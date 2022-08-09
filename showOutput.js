/*
solve the problem:
......................................................................................
1.Show output from 1-50;
2.If the number is divisible by the 3 than instead of the number show "foo";
3.If the number is divisible by the 5 than instead of the number show "bar";
4.If the number is divisible by both 3 and 5 than instead of the number show "foobar";
......................................................................................
*/

function showOutput(numbers) {
    for (let i = 1; i <= numbers; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('foobar');
        }
        else if (i % 3 === 0) {
            console.log('foo')
        }
        else if (i % 5 === 0) {
            console.log('bar')
        }
        else {

            console.log(i);
        }
    }
}




const number = 50;
showOutput(number);
