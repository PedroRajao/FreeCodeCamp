function busqueMaiorPalavra(str){
  
	var maiorPalavra = 0;	
    var palavras = str.split(' ');  	
	
	for (var i = 0; i < palavras.length; i++) {
		if( maiorPalavra < palavras[i].length ){
			maiorPalavra = palavras[i].length;
		}
	}	
  
	return maiorPalavra;
}

busqueMaiorPalavra('Ache a maior desse texto palavra');