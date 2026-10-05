// How a rule is declared and reported.
//   unitRule('V12', run, { kinds: BRANCH_LIKE })   run(u, check) once per unit of standard 1 (kinds: only those rows of the section 8 table:
//                                             'branch', 'gate', 'fact', 'procedure'; none given means every kind)
//   subjectRule('V1', run)                    run(s, check) once per subject of standard 1
//   siteRule('V47', run)                      run(site, check) once per run, over the whole input
// check(ok, message) counts one check; a failure is reported as "<rule id> <where> <message>".
// A rule never changes its input and never prints; the runner owns reporting.
export const BRANCH_LIKE = ['branch', 'procedure'];   // the rules of a classification unit, with `solved` for `worked` in a procedure unit (A12)
export const unitRule = (id, run, { kinds = null } = {}) => ({ id, scope: 'unit', kinds, run });
export const subjectRule = (id, run) => ({ id, scope: 'subject', kinds: null, run });
export const siteRule = (id, run) => ({ id, scope: 'site', kinds: null, run });

// Report every problem of one object as a failed check, or one passed check when there is none.
export function checkEach(check, label, problems) {
  if (problems.length === 0) { check(true, ''); return; }
  problems.forEach(p => check(false, `${label}: ${p}`));
}
// V58 has no run of its own: the runner applies the held list to the failures of every other rule (run.mjs).
export const heldRule = id => ({ id, scope: 'held', kinds: null, run: () => {} });
