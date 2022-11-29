function checkUpperCase() {

    let inpu = document.getElementById("input").value;
    //Elimina todos los espacios "Remplazandolos" por nada.
    let texto = inpu.replace(/ /g,'');
    let aux = "";
    console.log(aux);
    for (let i = texto.length -1 ; i >= 0; i--) {
        aux += texto[i];
        console.log(aux);
    }
    if (texto == aux) {
        alert("Es palindromo")
    }
    else {
        alert("No es palindromo")
    }
}