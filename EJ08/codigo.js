
var numero = prompt("Introduce número para saber si es par o impar");

function checkPar(numero) {
    if (numero%2 ==0){
        return "Es par"
    }
    else{
        return "Es impar"
    }
}

alert(checkPar(numero));
