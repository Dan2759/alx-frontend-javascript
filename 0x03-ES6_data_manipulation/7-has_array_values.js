export default function hasValuesFromArray(set, array) {
  const hasEl = array.every((value) => set.has(value));
  return hasEl;
}
