function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let leftSide = mergeSort(arr.slice(0, middle));
  let rightSide = mergeSort(arr.slice(middle, arr.length));
  
  return merge(leftSide, rightSide);
}

  function merge(left, right) {
    let sortedArr = [];
    while(left.length > 0 && right.length > 0) {
      let smallerNum =  (left[0] < right[0] ? left : right)
      sortedArr.push(smallerNum.shift());
    }
    return sortedArr.concat(left, right);
}

function analyzeArray(arr) {
  const sortedArr = mergeSort(arr);
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length -1];
  const length = sortedArr.length;
  const sum = sortedArr.reduce((a, b) => a + b, 0);
  const average = Math.floor((sum / length) * 100) / 100;

  return {min, max, length, average}
}

module.exports = analyzeArray;
