// Immutable updates by path. A path step is a key, an index, or { field: value } (such as { id: 'x' }, { code: 'R1' } or { ask: 'piece' }) to pick the array item
// whose field matches. Every function returns a new value that shares what it did not touch; the input is never changed.
// Used by the negative controls to build a faulty copy of the loaded data in memory.

function selectIndex(array, step) {
  const [field] = Object.keys(step);
  const index = array.findIndex(item => item && item[field] === step[field]);
  if (index < 0) throw new Error(`setIn: no item with ${field} "${step[field]}"`);
  return index;
}

const keyFor = (container, step) => (step !== null && typeof step === 'object') ? selectIndex(container, step) : step;

export function updateIn(root, path, change) {
  if (path.length === 0) return change(root);
  if (root === null || typeof root !== 'object') throw new Error(`updateIn: cannot descend into ${typeof root}`);
  const key = keyFor(root, path[0]);
  const next = updateIn(root[key], path.slice(1), change);
  if (Array.isArray(root)) return root.map((item, i) => i === key ? next : item);
  return { ...root, [key]: next };
}

export const setIn = (root, path, value) => updateIn(root, path, () => value);

// Remove an object field, or an array item, at the path.
export function removeIn(root, path) {
  const parent = path.slice(0, -1);
  const last = path[path.length - 1];
  return updateIn(root, parent, container => {
    if (Array.isArray(container)) {
      const key = keyFor(container, last);
      return container.filter((_, i) => i !== key);
    }
    return Object.fromEntries(Object.entries(container).filter(([k]) => k !== last));
  });
}

// A plain, unfrozen deep copy of loaded data (the registry freezes what it holds, in another realm).
export const plain = value => JSON.parse(JSON.stringify(value));
