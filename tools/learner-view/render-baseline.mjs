// The baseline check in the learner view (lesson standard E21). An action subject's first unit opens with one screen for each baseline
// story, and when the unit is finished its complete screen shows what each story was. The sentences the app prints around the stories
// are the app's, read from SAY in view.js (say.mjs), and are never typed here; the stories and their reasons are the subject's.
// `before` and `after` are lists of lines, empty for a unit that has no baseline.

// the baseline stories asked before this unit's first card: only the first unit of an action subject has them (the app's baselineFeedbackHtml)
export const baselineIds = (meta, unitId) => meta.action && meta.baseline && meta.baseline.length && meta.units[0] === unitId ? meta.baseline : [];

export function makeBaselineRenderer(v, T, line, { unitId, label, bar }) {
  const ids = baselineIds(v.subject.meta, unitId);
  if (ids.length && !line) throw new Error('a unit has a baseline check and the app’s sentences for it were not loaded');
  const story = id => v.cases[id] || fail(`baseline story ${id} is not a case of unit ${unitId}`);
  // what the story was: the name it is a case of (its outcome, or the answer of the first question), and whether the key marks that name
  // as one where nothing is wrong. As in the app (view.js `thing`), an outcome is looked for first, then an answer of the first question.
  const target = c => c.outcome || (v.gate && c.route && c.route[v.gate.code] ? c.route[v.gate.code][0] : null);
  const legit = id => {
    const named = v.key.outcomes.find(o => o.id === id) || (v.gate && v.gate.options.find(o => o.id === id));
    if (!named) fail(`baseline name ${id} is neither an outcome nor an answer of the first question`);
    return Boolean(named.legit);
  };
  const fine = c => legit(target(c));

  const screen = (id, i) => {
    const c = story(id);
    return [
      `### Question ${i + 1} of ${ids.length}. ${line('baselineHeading')}`, '',
      `*${bar} · Before the unit · Question ${i + 1} of ${ids.length}*`, '',
      `[reviewers only: baseline story \`${id}\`]`, '',
      line('baselineIntro', label), '',
      ...(c.name ? [`*${c.name}*`, ''] : []),
      T.show(c), '',
      `**${line('baselineAsk')}**`, '',
      `- ${line('baselineFine')}`,
      `- ${line('baselineWrong')}`, '',
      `Under the two buttons, a line for the learner’s own words: *${line('baselineWhy')}* After either answer the screen says “${line('baselineKept', label)}” and Next opens.`, ''
    ];
  };

  const was = id => {
    const c = story(id), code = v.routeSteps(c)[0];
    return [
      T.show(c, v.routeSteps(c)), '',
      `Beside the learner’s own answer (“${line('baselineSaid', line('baselineFine').toLowerCase())}” or “${line('baselineSaid', line('baselineWrong').toLowerCase())}”): **${line('baselineWas', fine(c))}**`, '',
      ...(code && c.reason && c.reason[code] ? [...T.P(c.reason[code], c).flatMap(p => [p, ''])] : [])
    ];
  };

  return {
    before: () => !ids.length ? [] : [
      '---', '',
      `## Before the unit: ${line('baselineHeading')}`, '',
      `*Asked once, before the unit’s first card, one screen for each of the ${ids.length} stories below, in this order. Nothing about the answers is shown until the unit is finished, and nothing is scored.*`, '',
      ...ids.flatMap(screen)
    ],
    after: () => !ids.length ? [] : [
      '---', '',
      `## When the unit is finished: what each of the first ${ids.length} stories was`, '',
      `${line('baselineAfter', label)}`, '',
      ...ids.flatMap(was)
    ]
  };
}

function fail(message) { throw new Error(message); }
