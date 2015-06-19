function chunk(array, chunk) {  

	var i, j, tempArray, subArr = [];	
  
	for (i=0, j=array.length; i<j; i+=chunk) {

	    tempArray = array.slice(i,i+chunk);     
      
	    subArr[ i/chunk ] = tempArray;            
	}
  
	console.log( subArr );
}

chunk(['a', 'b', 'c', 'd'], 2);
