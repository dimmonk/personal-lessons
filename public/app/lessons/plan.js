/* ===================== LESSONS: THE LEARNER'S ONE PLAN, AND THEIR OWN WAYS IN ===================== */
// Lesson standard 5 (`plan` and `setup` in the subject's notes) and 10.3 step 8. The plan is one if-then sentence the learner writes, cued
// by the request: { cue, then, saved }. The setup is a list of things the learner does on their own phone (save the bank's number from the back
// of the card, check the app is installed): each is marked with the day the learner marked it, { [stepId]: 'YYYY-MM-DD' }. Neither is scored
// against a truth, neither is a try; both are shown on the subject's own screens and leave the phone only in the file the learner saves.
// Pure: what a typed plan must be and what is shown of it, no page and no storage (plan-run.js).

// { plan, problems: [{ path, text }] } from the drafts of the plan form
function planFromDraft(form, draft, day){
  const r = ownRecord(form.fields, {}, draft);
  return { plan: { cue: r.value.cue, then: r.value.then, saved: day }, problems: Object.entries(r.problems).map(([path, text]) => ({ path, text })) };
}
// the subject's own words around its plan (`words` of its form into the plan): the step's title and how to write it, the line once saved, and the
// line that shows it again before practice and the review. Each subject's moment differs (a request for money, a number about to move you).
const planWordsOf = data => (Object.values(data.meta.own || {}).find(f => f.into === 'plan') || lessonFail('the subject has no plan form')).words;
const planTrim = text => String(text).trim().replace(/[.,;:!?\s]+$/, '');
// the plan as one sentence: "If a text asks for a code, I will hang up and call the number on my card."
const planSentence = plan => `${SAY.planIf} ${planTrim(plan.cue)}, ${SAY.planThen} ${planTrim(plan.then)}.`;
// the setup marked done on a day (replaced, never changed), or taken off again
const setupMarked = (setup, id, day) => ({ ...(setup || {}), [id]: day });
const setupCleared = (setup, id) => Object.fromEntries(Object.entries(setup || {}).filter(([k]) => k !== id));
const setupDone = (form, setup) => form.fields.filter(f => (setup || {})[f.id]).length;
