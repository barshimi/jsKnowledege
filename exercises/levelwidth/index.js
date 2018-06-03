// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

export default function levelWidth (root) {
  const arrHelper = [root, 's'];
  const arrWidth = [0];
  while (arrHelper.length > 1) {
    const firstElm = arrHelper.shift();
    if (firstElm === 's') {
      arrHelper.push(firstElm);
      arrWidth.push(0);
    } else{
      if (firstElm.children.length) arrHelper.push(...firstElm.children);
      arrWidth[arrWidth.length - 1]++;
    }
  }
  return arrWidth;
}
