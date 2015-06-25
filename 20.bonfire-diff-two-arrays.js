function diff(arr1, arr2) {  
  var diffArr = [];
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      diffArr.push(arr1[i]);
    }
  }
  for (var i in arr2) {
    if (arr1.indexOf(arr2[i]) === -1) {
      diffArr.push(arr2[i]);
    }
  }
  // Same, same; but different.
  return diffArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);  
