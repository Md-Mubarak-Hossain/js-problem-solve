function numberValide(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        console.log('Enter a number;');
    }
    else {
        let sum = number1 + number2;
        console.log(sum);
    }
}
const num1 = 22;
const num2 = 33;
numberValide(num1, num2);
