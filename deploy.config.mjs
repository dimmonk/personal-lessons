// How Fieldcraft ships: data and one named hook, nothing else. The mechanism is the shared deploy core vendored at
// .claude/standard/deploy/ (claude-config/docs/deploy-standard-design.md); `npm run deploy -- --only <targets>` runs it.

/** What `npm run deploy` ran before the standard: the whole test suite, in the worktree of origin/main. */
const npmTest = async (ctx) => { await ctx.run('npm', ['test']); };

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
  hooks: { preflight: npmTest, beforeFunctions: null },
  // The docs the sweep in .claude/standard/verify.mjs holds to the project's deploy vocabulary (npm test).
  liveDocs: ['CLAUDE.md'],
};
