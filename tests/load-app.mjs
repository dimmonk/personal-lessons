// Loads the app's scripts for headless checks: reads the <script src> list out of public/index.html and evaluates the same files in the
// same order in one isolated context. The boot file is left out because it renders and needs a browser. A test can also add the
// fixture subject (tests/fixtures/fixture-subject), registered as a real subject would be, so the engine runs on known data.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { FIXTURE_FILES, FIXTURE_IDS } from './fixtures/fixture-subject/design.mjs';

const PUBLIC = new URL('../public/', import.meta.url);
const FIXTURE = new URL('./fixtures/fixture-subject/', import.meta.url);
const BOOT_SCRIPT = 'app/init.js';
// the names a test reads out of the app's global scope
export const EXPORTS = ['SUBJECTS', 'buildSubject', 'FC', 'esc', 'SAY', 'ASK_KINDS', 'BLOCK_KINDS', 'RETURN_GAPS',
  'chooseOptions', 'scoreChoose', 'scoreItem', 'askApplies', 'askedAsks', 'openAsks', 'itemAnswered', 'shownStepIds', 'ruleCounts', 'ruleMet',
  'ruleText', 'checkResult', 'supportWeight', 'flatRefs', 'checkSize', 'checkIsDrawn', 'flowSets', 'refId', 'refCount', 'whereMatches',
  'seededRandom', 'hashSeed', 'shuffled', 'isRangeParam', 'drawParam', 'genValues', 'itemFromGen', 'slotsIn', 'fillSlots', 'instanceOf',
  'definitionOf', 'addDays', 'weekEnd', 'dayOf', 'itemsOf', 'recordTry', 'firstTries', 'checkRuns', 'completeRuns', 'lessonDone', 'lastCheck',
  'lessonsInOrder', 'usedIds', 'strandDefs', 'checkStrands', 'lessonsCovering', 'strandSchedules', 'dueStrands', 'retestDays', 'retestsDue',
  'strandInstance', 'retestInstances', 'drawInstances', 'buildSet', 'freshSeed', 'blockHtml', 'segmentsOf', 'itemHtml', 'feedbackHtml',
  'paras', 'lessonFail', 'storageRead', 'rangeOf', 'saveNote', 'notesOf', 'checkIsSung', 'rightWord',
  // sound and singing
  'noteToMidi', 'midiToNote', 'hzToMidi', 'noteToHz', 'centsBetween', 'foldCents', 'SING_TASKS', 'SING_FREE', 'SING_NEEDS_RANGE', 'SING_PARAMS',
  'SING_RANGE_MIN_SPAN', 'SING_MELODY_HOLD_MS', 'SING_LOUD_LIMIT', 'SING_MISSED', 'SING_CENTS', 'singKey', 'isSingKey', 'singTaskProblems', 'singItem',
  'singDefinition', 'singPlan', 'singScalePlan', 'singExample', 'singOk', 'scoreSing', 'singWordKey', 'singMiddle', 'singTop',
  'singNoteCents', 'singHoldMs', 'singLevel', 'singAnswer', 'singFindRange', 'steadyNotes', 'middleOf', 'stripAxis', 'voicePath', 'stripMidi',
  'singMarksHtml', 'singMissHtml', 'stripHtml', 'pitchHtml',
  // typed numbers, documents and figures
  'parseTyped', 'fmtNumber', 'typedText', 'frameParts', 'slotCount', 'numberValue', 'numberAnswers', 'frameFilled', 'isEstimateAsk', 'tolOf', 'withinTol',
  'numbersMatch', 'scoreNumber', 'estimateTyped', 'estimatesDisagree', 'estimateOff', 'calcPress', 'calcValue', 'CALC_START', 'NUMBER_BAND', 'numberHtml',
  'numberMarkHtml', 'numberMissHtml', 'numberRightText', 'calcHtml', 'documentHtml', 'figureHtml', 'markHtml', 'missLine',
  // forms, papers, values looked up, the learner's own data
  'formFieldAsk', 'formFieldResults', 'scoreForm', 'formDraftReady', 'formAnswerFrom', 'formFieldText', 'formFieldRight', 'formHtml', 'formMarksHtml', 'formMissHtml',
  // articles, charts, the tap and the 1,000 people
  'tapPick', 'tapRightIds', 'tapSegments', 'tapBlocks', 'tapReady', 'tapRightText', 'tapClip', 'scoreTap', 'TAP_NONE', 'tapMissHtml', 'tapHtml', 'articleHtml', 'chartHtml', 'chartTicks', 'chartAt', 'chartPlotHeight',
  'chartBand', 'chartFromZero', 'chartProblems', 'chartAlt', 'chartIsCut', 'niceStep', 'CHART_BOX', 'CHART_PLOT', 'CHART_MAX_TICKS', 'peopleHtml', 'redrawHtml',
  'LABEL_SIDES', 'panelBlocksOf', 'itemRuleIds', 'ruleOf', 'ruleNeeds', 'labelledPostsOf', 'hasLines', 'facetSplits', 'panelHtml', 'hasHtml', 'splitsHtml', 'labelledPostHtml', 'queueOutcomes',
  'askIsScored', 'MESSAGE_FORMS', 'TEXT_MAX', 'writtenWords', 'textReady', 'messageHtml', 'messageLineHtml', 'writeHtml', 'writeMarkHtml', 'panelHint',
  'EXCHANGE_FORMS', 'exchangeWalk', 'scoreExchange', 'exchangePaths', 'exchangeReach', 'exchangeLoops', 'exchangeReview', 'exchangeHtml', 'exchangeReviewHtml', 'exchangeMarkHtml',
  'scoreOrder', 'orderShown', 'orderReady', 'orderProblems', 'orderRightText', 'orderHtml', 'TIMER_SECONDS', 'TIMER_REVIEW_SECONDS', 'timerAfter', 'timerShown', 'timerShare', 'timerHtml',
  'BUSY_THINGS', 'BUSY_BINS', 'BUSY_TAPS_BEFORE', 'busyThing', 'busyHtml', 'planFromDraft', 'planSentence', 'setupMarked', 'setupCleared', 'setupDone', 'planSectionHtml', 'baselineLine',
  'MESSAGE_LINK_FORMS', 'MESSAGE_YOURS', 'checkContext',
  'documentTabsHtml', 'blockPieces', 'blocksHtml', 'refHtml', 'DOC_TAB', 'OWN_SLOTS', 'OWN_REQUIRED', 'ownDigitRun', 'ownValidDay', 'ownFieldProblem', 'ownRecord', 'ownSheetFromDraft',
  'ownDraftsFromSheet', 'ownHoldingDollars', 'ownAccountCost', 'ownSheetCost', 'ownSheetBalance', 'ownBalanceGaps', 'ownWarnings', 'ownDraftWarnings', 'ownActionFromDraft',
  'ownMarkDone', 'ownCalendarFile', 'ownCalendarName', 'ownMoney', 'sheetEditorHtml', 'ownCostsHtml', 'ownCostDocument', 'ownSectionHtml', 'parseTyped',
  // answers from memory, the question read aloud, a claim, the learner's own answers and the interview date
  'recallTokens', 'recallVariants', 'recallMatch', 'scoreRecall', 'recallGiven', 'recallWithOwn', 'recallOwnEntries', 'recallDefReady', 'recallProblems', 'recallEntryText',
  'isRecallAsk', 'recallListHtml', 'recallMarkHtml', 'recallClaimHtml', 'recallQuestionText', 'factHtml', 'spokenHtml', 'speechPick', 'claimTry', 'triesClaimed', 'claimedResults', 'resultOk',
  'interviewDay', 'roundDays', 'logOf', 'answersSectionHtml', 'answersFormHtml', 'answersFormOf', 'ANSWERS_PAGE',
  // maps and the place ask
  'PLACE_NONE', 'PLACE_DOT_TAP', 'PLACE_SMALL_TAP', 'placeSmallAt', 'PLACE_LINE_BAND', 'PLACE_ZOOM_MAX', 'PLACE_MODES', 'mapOf', 'mapPlace', 'mapHasPlace', 'placeGeom', 'placeContains', 'placeAt', 'scorePlace', 'placeRightText', 'placeRightIds',
  'placeNeighborsOf', 'placeWaterOf', 'placeTapOk', 'placeAskProblems', 'mapBlockProblems', 'mapHtml', 'mapBlockHtml', 'placeHtml', 'placeMarkHtml', 'placeMissHtml', 'placeWorkedHtml', 'placeLitIds',
  // a group of places made into questions
  'PLACE_GEN_FORMS', 'PLACE_SALTS', 'isPlaceGen', 'isMade', 'placeKey', 'placeKeyOf', 'placePairs', 'placePairAt', 'placeSeedOf', 'placeAllowedForms', 'placeItem', 'placeItems', 'placeDraw', 'placeSetPicks',
  'placeReviewPick', 'flagsBlockProblems', 'placeMemory', 'placeOnlyOf', 'placeFreshSeed', 'placeDrawInstances', 'placeSetInstances', 'placeReviewInstance', 'drawSize', 'drawStrands', 'defOfTry', 'mergeOnly', 'placeGenProblems', 'placeDrawProblems', 'placeRefProblems'];

// Every script the page loads, in load order. The page must not carry inline scripts.
export async function scriptList() {
  const html = await readFile(new URL('index.html', PUBLIC), 'utf8');
  const tags = [...html.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
  const srcs = tags.map(attrs => (attrs.match(/\bsrc="([^"]+)"/) || [])[1]);
  if (srcs.some(src => !src)) throw new Error('public/index.html has an inline <script>; scripts must be files');
  if (!srcs.includes(BOOT_SCRIPT)) throw new Error(`public/index.html does not load ${BOOT_SCRIPT}`);
  return srcs;
}

export async function loadApp({ fixture = false, seed = null } = {}) {
  const files = (await scriptList()).filter(src => src !== BOOT_SCRIPT);
  const parts = await Promise.all(files.map(async src => {
    const text = await readFile(new URL(src, PUBLIC), 'utf8');
    return `/* ${src} */\n` + (seed ? seed(src, text) : text);
  }));
  const fixtureParts = fixture ? await Promise.all(FIXTURE_FILES.map(async f => `/* fixture/${f} */\n` + await readFile(new URL(f, FIXTURE), 'utf8'))) : [];
  const add = fixture ? FIXTURE_IDS.map(id => `\nSUBJECTS.push(buildSubject('${id}', SUBJECTS.length));`).join('') : '';
  const source = parts.join('\n') + '\n' + fixtureParts.join('\n') + add + `\nglobalThis.__app = { ${EXPORTS.join(', ')} };`;
  // the app reads and writes localStorage; headless it gets an empty in-memory one, so nothing is read or kept
  const memory = new Map();
  const localStorage = { getItem: key => memory.has(key) ? memory.get(key) : null, setItem: (key, value) => memory.set(key, String(value)), removeItem: key => memory.delete(key) };
  const context = vm.createContext({ console, localStorage });
  vm.runInContext(source, context, { filename: 'public (scripts in load order)' });
  return { ...context.__app, storage: memory, context };
}
