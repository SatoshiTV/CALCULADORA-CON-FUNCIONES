function sumaDosNumeros() {
    let sumOne = document.getElementById("sum1");
    let sumTwo = document.getElementById("sum2");
    let sumar = document.getElementById("sumaRes");

    let numOne = parseInt(sumOne.value);
    let numTwo = parseInt(sumTwo.value);
    let suma = numOne + numTwo;
    sumar.value = suma;
}

function restaDosNumeros() {
    let resOne = document.getElementById("res1");
    let resTwo = document.getElementById("res2");
    let restar = document.getElementById("restRes");

    let numOne = parseInt(resOne.value);
    let numTwo = parseInt(resTwo.value);
    let resta = numOne - numTwo;
    restar.value = resta;
}

function multiDosNumeros() {
    let mulOne = document.getElementById("mul1");
    let mulTwo = document.getElementById("mul2");
    let multiplicar = document.getElementById("mulRes");

    let numOne = parseInt(mulOne.value);
    let numTwo = parseInt(mulTwo.value);
    let multiplicacion = numOne * numTwo;
    multiplicar.value = multiplicacion;
}

function divDosNumeros() {
    let divOne = document.getElementById("div1");
    let divTwo = document.getElementById("div2");
    let dividir = document.getElementById("divRes");

    let numOne = parseInt(divOne.value);
    let numTwo = parseInt(divTwo.value);
    let division = numOne / numTwo;
    dividir.value = division;
}