// Loads lesson data headlessly: evaluates classic script files, in order, in one vm context, and returns what the registry
// (public/app/registry.js) holds, together with the engine's own pure functions (so the validator and the app can never hold two
// versions of what counts as right). Files that need a browser are never evaluated.
//
//   loadFromPublic(publicDirUrl, { extra })   the file list is the <script src> list of that directory's index.html, keeping the
//                                             registry, the pure engine files and subjects/; `extra` are further files (the test
//                                             subject) evaluated last, as absolute URLs
//   loadFromFiles(publicDirUrl, files, opts)  an explicit list, evaluated in order
//
// Result: { standard, subjects: { [id]: { meta, lessons, items, gens } }, maps: { [region]: the map data of public/maps/ }, engine }.
// A list with no registry loads as { standard: null, subjects: {}, engine: null }.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

export const REGISTRY_FILE = 'app/registry.js';
// the pure files of the engine the rules read from: nothing in them touches the page or storage
export const ENGINE_FILES = ['app/helpers.js', 'app/lessons/view.js', 'app/lessons/gen.js', 'app/lessons/rules.js', 'app/lessons/number.js', 'app/lessons/form.js', 'app/lessons/own.js', 'app/lessons/own-work-later.js', 'app/lessons/own-work.js', 'app/lessons/sing-task.js', 'app/lessons/tap.js', 'app/lessons/place.js', 'app/lessons/place-gen.js', 'app/lessons/exchange.js', 'app/lessons/order.js', 'app/lessons/timer.js', 'app/lessons/busy.js', 'app/lessons/chart.js', 'app/lessons/panel.js', 'app/lessons/recall.js', 'app/lessons/message-view.js', 'app/lessons/text-view.js', 'app/lessons/item-view.js',
  'app/lessons/audio-notes.js'];
export const ENGINE_NAMES = ['ASK_KINDS', 'BLOCK_KINDS', 'RETURN_GAPS', 'chooseOptions', 'scoreChoose', 'askedAsks', 'shownStepIds', 'ruleCounts', 'ruleMet', 'ruleText',
  'checkResult', 'supportWeight', 'flatRefs', 'checkSize', 'checkIsDrawn', 'flowSets', 'refId', 'refCount', 'whereMatches', 'isRangeParam', 'drawParam', 'genValues',
  'itemFromGen', 'slotsIn', 'segmentsOf', 'definitionOf', 'seededRandom', 'asList', 'checkIsSung', 'SING_TASKS', 'SING_FREE', 'SING_NEEDS_RANGE',
  'SING_RANGE_MIN_SPAN', 'singTaskProblems', 'singPlan', 'singKey', 'isSingKey', 'noteToMidi', 'singItem', 'rightWord', 'SING_LOUD_LIMIT', 'SING_MELODY_HOLD_MS', 'SAY',
  'parseTyped', 'fmtNumber', 'frameParts', 'slotCount', 'numberAnswers', 'numbersMatch', 'scoreNumber', 'tolOf', 'withinTol', 'isEstimateAsk', 'frameFilled',
  'estimateOff', 'calcPress', 'calcValue', 'CALC_START', 'NUMBER_BAND', 'formFieldAsk', 'formFieldText', 'formFieldRight', 'OWN_SLOTS', 'OWN_REQUIRED', 'ownValidDay', 'OWN_WORKS', 'OWN_ACCOUNT', 'OWN_KIND',
  'tapPick', 'tapRightIds', 'tapSegments', 'scoreTap', 'tapRightText', 'TAP_NONE', 'chartProblems', 'chartFromZero', 'chartTicks',
  'LABEL_SIDES', 'panelBlocksOf', 'itemRuleIds', 'ruleNeeds', 'labelledPostsOf', 'hasLines', 'facetSplits',
  'askIsScored', 'MESSAGE_FORMS', 'MESSAGE_LINK_FORMS', 'MESSAGE_YOURS', 'TEXT_MAX', 'writtenWords', 'textReady',
  'EXCHANGE_FORMS', 'exchangeWalk', 'scoreExchange', 'exchangePaths', 'exchangeReach', 'exchangeLoops', 'exchangeOptionEnds', 'exchangeRightOption', 'exchangeReview',
  'orderProblems', 'scoreOrder', 'orderScored', 'orderReady', 'orderOpen', 'TIMER_SECONDS', 'BUSY_TAPS_BEFORE',
  'recallProblems', 'recallEntryText', 'recallIsOwn', 'recallOwnKey', 'recallMatch', 'recallNeed',
  'PLACE_MODES', 'PLACE_NONE', 'mapOf', 'mapPlace', 'placeAskProblems', 'mapBlockProblems', 'placeRightIds', 'placeNeighborsOf', 'placeWaterOf', 'placeRightText',
  'PLACE_GEN_FORMS', 'PLACE_FORM_FACET', 'isPlaceGen', 'isMade', 'drawSize', 'drawStrands', 'placeItem', 'placeItems', 'placePairs', 'placeGenProblems', 'placeDrawProblems', 'placeRefProblems', 'placeAllowedForms', 'placeOnlyOf', 'flagsBlockProblems', 'placeSeedOf', 'placeKey'];
export const isDataFile = src => src === REGISTRY_FILE || src.startsWith('subjects/') || src.startsWith('maps/') || ENGINE_FILES.includes(src);

export const asDirUrl = dir => dir instanceof URL ? new URL(dir.href.replace(/\/?$/, '/')) : new URL(`file://${dir.replace(/\/?$/, '/')}`);

async function readIfPresent(url) {
  try { return await readFile(url, 'utf8'); }
  catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

// Every script src of an index.html, in load order. The page must not carry inline scripts.
export function scriptSources(html, where = 'index.html') {
  const tags = [...html.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
  const srcs = tags.map(attrs => (attrs.match(/\bsrc="([^"]+)"/) || [])[1]);
  if (srcs.some(src => !src)) throw new Error(`${where} has an inline <script>; scripts must be files`);
  return srcs;
}

export async function loadFromFiles(publicDirUrl, files, { extra = [] } = {}) {
  const root = asDirUrl(publicDirUrl);
  const dataFiles = files.filter(isDataFile);
  if (!dataFiles.includes(REGISTRY_FILE)) return { standard: null, subjects: {}, maps: {}, engine: null };
  const context = vm.createContext({ console });
  const sources = [...dataFiles.map(file => ({ file, url: new URL(file, root) })), ...extra.map(url => ({ file: url.pathname, url }))];
  for (const { file, url } of sources) {
    const source = await readFile(url, 'utf8');
    try { vm.runInContext(source, context, { filename: file }); }
    catch (error) { throw new Error(`${file}: ${error.message}`); }
  }
  const FC = context.FC;
  if (!FC || typeof FC.ids !== 'function') throw new Error(`${REGISTRY_FILE} did not define FC.ids()`);
  const engine = vm.runInContext(`({ ${ENGINE_NAMES.join(', ')} })`, context);
  return { standard: FC.STANDARD, subjects: Object.fromEntries(FC.ids().map(id => [id, FC.get(id)])), maps: FC.maps, engine };
}

export async function fileListFor(publicDirUrl) {
  const root = asDirUrl(publicDirUrl);
  const html = await readIfPresent(new URL('index.html', root));
  if (html === null) throw new Error(`${root.pathname} has no index.html`);
  return scriptSources(html, `${root.pathname}index.html`).filter(isDataFile);
}

export async function loadFromPublic(publicDirUrl, opts) {
  return loadFromFiles(publicDirUrl, await fileListFor(publicDirUrl), opts);
}
