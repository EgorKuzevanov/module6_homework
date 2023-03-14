sumOddPar();

function sumOddPar() {
    const arr = [1, 2, 3, 4, 5];

    var sumOdd = 0;
    var sumPar = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumPar++;
        } else {
            sumOdd++;
        }
    }

    console.log("Количество чётных элементов массива: " + sumPar);
    console.log("Количество нечётных элементов массива: " + sumOdd);
}
