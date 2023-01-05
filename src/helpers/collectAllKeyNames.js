function collectAllKeyNames(array) {
  const keyNames = array.map((el) => Object.keys(el)).flat();
  return [...new Set(keyNames)];
}

export default collectAllKeyNames;
