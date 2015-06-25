function where(arr, num) {  
  // Find my place in this sorted array.
  for (var i in arr) {
    console.log(i, arr[i], num);
    if (num === arr[i]) return i * 1;
    if (num < arr[i]) return i * 1;
  }
}

where([40, 60], 50);  
