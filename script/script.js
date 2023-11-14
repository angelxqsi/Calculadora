function suma(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 + number2;

    document.getElementById('resultado').value = result;
}

function resta() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 - number2;
    document.getElementById('resultado').value = result;
}

function multiplicacion() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 * number2;
    document.getElementById('resultado').value = result;
}

function division() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
        let result = number1 / number2;
        document.getElementById('resultado').value = result;
    }

function raizCuadrada() {
    let number1= parseFloat(document.getElementById('number1').value);
        let result = Math.sqrt(number);
        document.getElementById('resultado').value = result;
    }
