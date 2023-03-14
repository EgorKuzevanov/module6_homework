isPrime(2);

function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        } else {
            prime = true;
            break;
        }
    }
    if (num > 1000) {
        console.log('Данные неверны');
    } else {
        if (prime === true) {
            console.log('Число простое');
        } else {
            console.log('Число составное');
        }
    }
}
