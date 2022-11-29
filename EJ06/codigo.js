var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = window.prompt("Introduce el número del DNI");
var letraDni = window.prompt("Introduce una letra");

//Si el DNI es mayor de 99999999 directamente veremos que es no válido
if(dni < 0 || dni > 99999999){
    alert("El número introducido no es válido");
}else{
    console.log(dni%23);
    if(letraDni == letras[dni%23]){
        alert("El DNI es correcto")
    }else{
        alert("El DNI introducido no es correcto")
    }
}