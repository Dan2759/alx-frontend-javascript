export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = appendString + array[i];
  }
  return newArray;
}
