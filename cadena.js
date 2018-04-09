function mayuscula(cadena){
    return cadena.toUpperCase();
}

 function minuscula(cadena){
    return cadena.toLowerCase();
}

function ponerPipe(arrPalabras){
    var cad='';
    for(var i=0;i<arrPalabras.length;i++){
        cad=cad+arrPalabras[i]+'|';
    }
    return cad;
}
