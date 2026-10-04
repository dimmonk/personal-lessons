// Loads the subject data and det* helpers out of public/index.html for headless checks:
// extracts the inline <script>, truncates before the INIT marker (so nothing renders),
// and evaluates it in an isolated context.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const INIT_MARKER = '/* ===================== INIT ===================== */';
const EXPORTS = ['SUBJECTS', 'detActiveSteps', 'detCandidates', 'detReady', 'nameOptions', 'correctSteps', 'answerOf'];

export async function loadApp() {
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  if (scripts.length !== 1) throw new Error(`Expected exactly one inline <script>, found ${scripts.length}`);
  const cut = scripts[0].indexOf(INIT_MARKER);
  if (cut < 0) throw new Error('INIT marker not found in the inline script');
  const source = scripts[0].slice(0, cut) + `\nglobalThis.__app = { ${EXPORTS.join(', ')} };`;
  const context = vm.createContext({ console });
  vm.runInContext(source, context, { filename: 'public/index.html <script>' });
  return context.__app;
}
