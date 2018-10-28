module.exports = function sumOfOther(arr) {
  const array = [];

  const result = arr.reduce((sum, currentItem) => sum + currentItem);
  arr.reduce((sum, currentItem) => {
    array.push(result - currentItem);
    return sum;
  }, 0);

  return array;
};
