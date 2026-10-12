/* ===================== LESSONS: THE BUSY TASK ===================== */
// Lesson standard 4 item 6 and 10 ("a message arriving while busy in another app" has no nearest: the app cannot get a notification from
// outside, so the busy task runs inside it). A group with `over: 'busy'` is a shopping list to sort by taps; messages arrive over it as banners.
// Only the messages are scored: nothing about the sorting is stored. Pure: the list and the HTML, no page and no storage.

const BUSY_BINS = [{ id: 'fridge', text: 'Fridge' }, { id: 'cupboard', text: 'Cupboard' }, { id: 'cleaning', text: 'Cleaning' }];
const BUSY_THINGS = [['Milk', 'fridge'], ['Rice', 'cupboard'], ['Dish soap', 'cleaning'], ['Eggs', 'fridge'], ['Pasta', 'cupboard'], ['Sponges', 'cleaning'],
  ['Yogurt', 'fridge'], ['Lentils', 'cupboard'], ['Bleach', 'cleaning'], ['Butter', 'fridge'], ['Flour', 'cupboard'], ['Paper towels', 'cleaning'],
  ['Cheese', 'fridge'], ['Oats', 'cupboard'], ['Laundry soap', 'cleaning'], ['Spinach', 'fridge'], ['Canned beans', 'cupboard'], ['Trash bags', 'cleaning']];
// the sorts the learner makes on a question before its banner arrives
const BUSY_TAPS_BEFORE = 2;
const busyThing = n => { const [name, bin] = BUSY_THINGS[n % BUSY_THINGS.length]; return { name, bin }; };
function busyHtml(at, taps, arrived){
  const thing = busyThing(at);
  return `<div class="busy" data-busy><span class="m lab">${esc(SAY.busyHeading)}</span>
    <p class="busyword">${esc(SAY.busyWhere(thing.name))}</p>
    <div class="busybins">${BUSY_BINS.map(b => `<button type="button" class="btn ghost sm" data-busy-bin="${esc(b.id)}">${esc(b.text)}</button>`).join('')}</div>
    <p class="hintline" data-busy-count>${esc(SAY.busySorted(at))}${arrived ? '' : ` ${esc(SAY.busyWait)}`}</p></div>`;
}
