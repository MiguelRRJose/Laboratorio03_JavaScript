const calculateFactorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

const requestNumber = () => {
    let number;
    do {
        number = parseInt(prompt("Introduce un número entero no negativo para calcular su factorial:", "0"));
    } while (isNaN(number) || number < 0);
    return number;
}

const main = () => {
    const number = requestNumber();
    const factorial = calculateFactorial(number);
    alert(`El factorial de ${number} (iterativo) es: ${factorial}`);
}

main();
