replace("He is Sleeping on the couch", "Sleeping", "sitting");

function replace(str, find, replace) {   
// Originals
    var findOrig = find;
    var strOrig = str;
// TO COMPARISON    
    find = find.toLowerCase();
    str  = str.toLowerCase();
// int :  first letter 
    var posFirstLetter = str.indexOf(find);
    posFirstLetter = parseInt(posFirstLetter);
// char : first letter
    var firstLetter = str.charAt(posFirstLetter);
// replace without the capitalization     
    var strReplaced = strOrig.replace(new RegExp(find, 'gi'), replace);
// Capitalize, is it upper?
    if (findOrig[0] == findOrig[0].toUpperCase()) {
        strReplaced = capitalizeFirstLetter(strReplaced, posFirstLetter);
    }
    return strReplaced;
}

function capitalizeFirstLetter(string, pos_str) {
    return string.substr(0, pos_str) + string.charAt(pos_str).toUpperCase() + string.slice(pos_str + 1);
}
