function cubeOdd(arr) {
  if (arr.every(y => y % 2 === 0)) return 0;
  if (arr.every(x => x === parseInt(x))) {
  return arr.filter(x => x % 2 === 1 || x % 2 === -1).map(x => x*x*x).reduce((a, b) => (a + b));
} else return undefined;
};