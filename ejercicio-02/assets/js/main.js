
const plus = (num1, num2) => {
    //Code
    return num1 + num2;
};
const subtract = (num1, num2) =>{
    //Code
    return num1 - num2;
} ;
const multiply = (num1, num2) =>{
    //code
    return num1 * num2;
} ;
const split = (num1, num2) => {
    //code
    if(num2 != 0){
        return num1 / num2;
    } else {
        alert("No se puede dividir entre cero.");
        return null;
    }
};

const requestNumber = (message) => {
    //code
    let num = parseFloat(prompt(message));
    while (isNaN(num)) {
        alert("Por favor, introduce un número válido.");
        num = parseFloat(prompt(message));
    }
    return num;
};

const selectOperation = () => {
    //code
    let operation = parseInt(prompt("Introduce una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));
    while (![1, 2, 3, 4].includes(operation)) {
        alert("Por favor, selecciona una opción válida (1-4).");
        operation = parseInt(prompt("Introduce una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));
    }
    return operation;
};

const main = () => {
    //code
    const num1 = requestNumber("Introduce un número:");
    const num2 = requestNumber("Introduce otro número:");
    const operation = selectOperation();

    let result;
    switch (operation) {
        case 1:
            result = plus(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = split(num1, num2);
            break;
    }

    if (result !== null) {
        alert(`El resultado es: ${result}`);
    }
};

main();






