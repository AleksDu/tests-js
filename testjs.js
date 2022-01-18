// const arr = [3, 4, 4, 3, 6, 3];
// function remove(arr, indexes) {
//   var arrayOfIndexes = [].slice.call(arguments, 1);
//   return arr.filter(function (item, index) {
//     return arrayOfIndexes.indexOf(index) == -1;
//   });
// }

// remove(arr, 0, 1, 3);

const arr = [3, 4, 4, 3, 6, 3];
function remove(arr, ...args) {
  var set = new Set(args);
  return arr.filter((b, b1) => !set.has(b1));
}
remove(arr, 0, 1, 3);
(3)[(4, 6, 3)];
