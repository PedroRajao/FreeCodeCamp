function mutation(arr) {

	var fonte = arr[0].toLowerCase(), 
        palavra_checar = arr[1].toLowerCase(), 
        letra_checar;
    
    for (var i = 0; i < palavra_checar.length; i++) {
    	letra_checar = palavra_checar[i];
    	var reg = new RegExp(letra_checar);

    	if ( reg.test(fonte) ){
        	continue;
        } else 
        	return false;
    }        
    return true;
}

 mutation(['hello', 'hela']);
