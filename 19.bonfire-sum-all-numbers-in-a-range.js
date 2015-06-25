function sumAll(arr) {  
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var num = 0;
  for (var i = min; i <= max; i++){
    num += i;
  }
  return num;
}

sumAll([4, 1]);  
