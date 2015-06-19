function repeat(str, num) {
  var str_n=[];
  
  if(num > 0){
	for (var i = 0; i < num; i++) {
		str_n += str;
	}
  }else
    return '';

  return str_n;
}

repeat('abc', 14);
