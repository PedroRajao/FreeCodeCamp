function end(str, target) {
	var lastChar = str.length;

	if( str.charAt(lastChar-1) === target ){
		return true;
	}else
	return false;
}

end('Bastian', 'n');