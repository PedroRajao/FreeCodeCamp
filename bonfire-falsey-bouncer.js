function bouncer(arr) {
    var filtrado = arr.filter(function (el){
    	if (el) return true;
	    return false;
    });

    return filtrado;
}

bouncer([ '', false, NaN, 'asd' ]);