// How Fieldcraft ships: data and one named hook, nothing else. The mechanism is the shared deploy core vendored at
// .claude/standard/deploy/ (claude-config/docs/deploy-standard-design.md); `npm run deploy -- --only <targets>` runs it.

/**
 * The part of `npm test` the shared checks (.claude/standard/checks.mjs: `test:unit`, the data, audio and lesson tiers) do
 * not already run before this hook: the standard check, in the worktree of origin/main.
 */
const standardCheck = async (ctx) => { await ctx.run('npm', ['run', 'test:standard']); };

export default {
  app: 'fieldcraft', // the service worker cache is fieldcraft-<revision>
  releases: {
    hosting: {
      origin: 'https://fieldcraft.web.app',
      siteRoot: 'public',
      copies: [{ path: 'public/sw.js', kind: 'sw', cachePrefix: 'fieldcraft' }],
      // Every header block of firebase.json's hosting block needs a sample, and every sample a block.
      check: {
        samples: {
          '**': ['/', '/version.json', '/app.css'], // `/` because cleanUrls redirects /index.html
          '/fonts/**': ['/fonts/fonts.css'],
          '/manifest.json': ['/manifest.json'],
        },
        privatePaths: ['/firebase.json', '/firestore.rules', '/package.json', '/.claude/settings.json', '/tests/lessons.lock.json'],
      },
    },
  },
  hooks: { preflight: standardCheck, beforeFunctions: null },
  // The docs the sweep in .claude/standard/verify.mjs holds to the project's deploy vocabulary (npm test).
  liveDocs: ['CLAUDE.md'],
};
