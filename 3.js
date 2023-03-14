function example(number1) {
    return function (number2) {
        return number1 + number2;
    }
}

const resultFunc = example(5);

console.log(resultFunc(3));
