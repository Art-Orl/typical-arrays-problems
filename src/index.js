exports.min = function min(array) {
  if (!arr || arr.length == 0) {
    return 0;
  }
  return Math.min(...arr);
};

exports.max = function max(array) {
  if (!arr || arr.length == 0) {
    return 0;
  }
  return Math.max(...arr);
};

exports.avg = function avg(array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};
