#!/usr/bin/env node
// firebase.json's `predeploy` for every hosting target and the functions block (docs/deploy-standard-design.md 2.6).
// A hand-typed `firebase deploy` skips the count, the commit, the tag and the live check, so the one honest answer is that
// it is refused. The deploy core runs the firebase CLI with TMV_DEPLOY_RUN set to its run id; nothing else sets it.
// Setting it by hand is a conscious act, like ALLOW_ALL_FUNCTIONS_DEPLOY is for the global hook.
import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const RUN_ID_VAR = 'TMV_DEPLOY_RUN';

/** Whether this environment belongs to a run of the deploy core. */
export const isDeployRun = (env) => typeof env[RUN_ID_VAR] === 'string' && env[RUN_ID_VAR].trim() !== '';

const isEntryPoint = process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
if (isEntryPoint && !isDeployRun(process.env)) {
  console.error('[predeploy-guard] REFUSED: deploys go through `npm run deploy -- --only <targets>`.');
  console.error('  A direct `firebase deploy` skips the release count, the commit, the tag and the live check.');
  process.exit(1);
}
