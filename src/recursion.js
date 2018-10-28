module.exports = function recursion(tree) {
  const arr = [];

  const treeRecursion = function treeR(treeRec, level) {
    if (!treeRec) {
      return;
    }
    if (!arr[level]) {
      arr[level] = [];
    }
    arr[level].push(treeRec.value);
    treeR(treeRec.left, level + 1);
    treeR(treeRec.right, level + 1);
  };

  treeRecursion(tree, 0);

  return arr;
};
