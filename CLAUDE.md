# Fieldcraft

Static site in `public/`, no build step. Tests: `npm test` (the standard check, then `test:unit`: the data, audio and lesson tiers).

## Deploy

Ship with `npm run deploy -- --only hosting` (add `,firestore:rules` when the rules changed). It ships `origin/main` from a throwaway
worktree: it runs the same suite as `npm test` (`test:unit` as the shared checks, then the standard check), cuts the next release (`public/version.json`, the cache name in `public/sw.js`), commits
`chore: release N`, tags `release-N`, pushes, deploys, then checks the live site. Push your work to `origin/main` first; nothing
unpushed ships. Never edit `public/version.json` or the `RELEASE` line in `public/sw.js` by hand. Re-check a release with
`npm run deploy-check -- release-N`. The config is `deploy.config.mjs`; the mechanism is vendored at `.claude/standard/deploy/`.
