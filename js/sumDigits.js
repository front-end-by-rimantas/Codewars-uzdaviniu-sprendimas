"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

// function sumDigits( x ){
//     const numbers = (''+Math.abs(x)).split('');
//     let sum = 0;
//     for ( let i=0; i<numbers.length; i++ ) {
//         sum += parseInt(numbers[i]);
//     }
//     return sum;
// }

function sumDigits( x ){
    let sum = 0;

    x = Math.abs(x)

    while ( x >= 10 ) {
        let liekana = x % 10
        sum += liekana
        x -= liekana
        x /= 10
    }

    sum += x

    return sum;
}

test( sumDigits(10), 1 );
test( sumDigits(99), 18 );
test( sumDigits(-32), 5 );
test( sumDigits(-12345), 15 );