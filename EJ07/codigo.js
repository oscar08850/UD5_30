
var numero = prompt("Introduce número para hacer el factorial");
var resultado = 1;

for (let i = numero; i > 0; i--) {
    resultado = resultado * i;
    console.log(resultado);
}

console.log(resultado);
alert(numero + "! = " + resultado);
