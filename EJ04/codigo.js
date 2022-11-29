//Vector con diferentes tipos de datos
var valores = [true, 5, false, "hola", "adios", 2];

//Comprobamos que cadena de texto contiene mas cáracteres
if (valores[3].length > valores[4].length) {
    console.log(valores[3] + " es mayor")
} else {
    console.log(valores[4] + " es mayor")
}


//Comprobamos el true y el false.
if (valores[0] == valores[2]) {
    console.log(true);

} else {
    console.log(false);
}

//Comprobar operaciones matemáticas

console.log("La suma es " + (valores[1] + valores[5]))
console.log("La resta es " + (valores[1] - valores[5]))
console.log("La division es " + (valores[1] / valores[5]))
console.log("La multiplicación es " + (valores[1] * valores[5]))
console.log("El resto es " + (valores[1] % valores[5]))
