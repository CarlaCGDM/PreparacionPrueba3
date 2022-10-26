//EJERCICIO 1

function repetirBauuuba(n) {
    //falta comprobar que el input sea un numero entero
    //hacerlo constante
    if (n <= 0) {
        return "";
    } else {
        return "bauuuba " + repetirBauuuba(n-1);
    }
}

//console.log(repetirBauuuba(10));

function ejercicio1() {
    let p = document.getElementById("resultado1");
    let n = document.getElementById("input1").value;
    let resultado = repetirBauuuba(n)
    p.innerHTML = resultado;
}

//EJERCICIO 2

function dados() {
    const TIRADAS = 36000;
    let resultados = {
    }
    for (let i=0;i<TIRADAS;i++) {
        //numero aleatorio
        let num1 = Math.floor((Math.random() * 6) + 1);
        let num2 = Math.floor((Math.random() * 6) + 1);
        let n = num1 + num2;
        resultados[n] = 1 + (Object.is(resultados[n],undefined) ? 0 : resultados[n]);
    }
    return resultados;
}

console.log(dados());

function ejercicio2() {
    let p = document.getElementById("resultado2");
    let resultado = dados(); 
    console.log(resultado);
    let string = "";
    for(var propt in resultado){
        string += (propt + ': ' + resultado[propt] + "<br>");
    }
    p.innerHTML = string;

}