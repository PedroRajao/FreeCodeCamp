function largestOfFour(arr) {
	var arr_max = [];
	for (var i = 0; i < arr.length; i++) {
		arr_max[i] = Math.max.apply( Math, arr[i]);
	}
  return arr_max;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);