module.exports = function make(...args) {
  const array = [];
  args.reduce((previousValue, currentItem) => {
    array.push(currentItem);
    return previousValue;
  }, 0);

  function f(...args) {
    args.reduce((previousValue, currentItem) => {
      array.push(currentItem);
      return previousValue;
    }, 0);
    return f;
  }

  f.toString = () => {
    if ((typeof array[array.length - 1]) === 'function') {
      const callback = array[array.length - 1];
      array.length -= 1;
      return array.reduce(callback);
    }
  };

  return f;
};
