// X52: Strategy's built lessons on the owner's Galaxy Z Fold, in Chromium. Each lesson's why, its teaching screens (the value stick among them),
// its worked example opened step by step to its answer, the first question of each group, the step on the learner's own business and the
// check's first screen, at the cover screen (344 px), the inner screen (752 px) and a desktop (1440 px), dark, and the cover screen light:
// every screen in plain words and American English, with nothing sideways and nothing cut off (env.inspect). What a question asks and scores is
// the validator's and X24's; the stick's drawing is X20's. tests/e2e-controls.mjs seeds a fault.

const SIZES = [{ width: 344, scheme: 'dark' }, { width: 752, scheme: 'dark' }, { width: 1440, scheme: 'dark' }, { width: 344, scheme: 'light' }];

// the flow of a lesson as the kinds of its steps
const flowOf = (page, lesson) => page.evaluate(id => FC.get('strategy').lessons[id].flow.map(s => s.show ? 'show' : s.worked ? 'worked' : s.own ? 'own' : 'set'), lesson);
const moveTo = (page, at) => page.evaluate(n => moveLesson(n), at);

async function walk(env, c, page, lesson, size) {
  const at = `${size.width}px ${size.scheme} ${lesson}`;
  await env.openSubject(page, 'strategy');
  await env.clickVisible(page, `#screen [data-l="${lesson}"]`);
  await env.inspect(c, page, `${at} the why`);
  const flow = await flowOf(page, lesson);
  for (let i = 0; i < flow.length; i++) {
    await moveTo(page, i + 1);
    if (flow[i] === 'worked') {
      const commit = page.locator('[data-commit]');
      if (await commit.count()) await commit.first().click();
      while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
    }
    await env.inspect(c, page, `${at} step ${i + 1} (${flow[i]})`);
    if (flow[i] === 'show' && await page.locator('.block-fig[data-figure="stick"]').count()) {
      const fits = await page.locator('.block-fig[data-figure="stick"]').evaluate(fig => fig.scrollWidth <= fig.clientWidth + 1);
      c.check(fits, `${at}: the value stick is wider than its screen`);
    }
  }
  await moveTo(page, flow.length + 1);
  await env.inspect(c, page, `${at} the check's first screen`);
}

export async function X52(env) {
  const c = env.checker('X52');
  for (const size of SIZES) {
    const { context, page } = await env.freshPage(c, size.width, { colorScheme: size.scheme });
    await env.openSubject(page, 'strategy');
    await env.inspect(c, page, `${size.width}px ${size.scheme} the subject screen`);
    const lessons = await page.evaluate(() => Object.keys(FC.get('strategy').lessons).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1))));
    c.check(lessons.length >= 5, `Strategy has ${lessons.length} lessons, not the five built first`);
    for (const lesson of lessons) await walk(env, c, page, lesson, size);
    await context.close();
  }
  return c;
}

export const STRATEGY_CHECKS = { X52 };
