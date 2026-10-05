// How a rule is declared and reported.
//   unitRule('V12', run, { branch: true })   run(u, check) once per unit of standard 1 (branch: only branch units, see section 8 table)
//   subjectRule('V1', run)                    run(s, check) once per subject of standard 1
//   siteRule('V47', run)                      run(site, check) once per run, over the whole input
// check(ok, message) counts one check; a failure is reported as "<rule id> <where> <message>".
// A rule never changes its input and never prints; the runner owns reporting.
export const unitRule = (id, run, { branch = false } = {}) => ({ id, scope: 'unit', branch, run });
export const subjectRule = (id, run) => ({ id, scope: 'subject', branch: false, run });
export const siteRule = (id, run) => ({ id, scope: 'site', branch: false, run });

// Report every problem of one object as a failed check, or one passed check when there is none.
export function checkEach(check, label, problems) {
  if (problems.length === 0) { check(true, ''); return; }
  problems.forEach(p => check(false, `${label}: ${p}`));
}
