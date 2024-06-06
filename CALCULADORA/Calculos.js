function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Por favor, ingrese ambos números.';
    } else {
        switch (operation) {
            case 'sum':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'No se puede dividir por cero.';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Operación no válida.';
        }
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
}