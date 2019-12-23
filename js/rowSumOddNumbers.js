"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function rowSumOddNumbers( x ){
    return x**3;
}

test( rowSumOddNumbers(1), 1 );
test( rowSumOddNumbers(2), 8 );
test( rowSumOddNumbers(3), 27 );
test( rowSumOddNumbers(4), 64 );
test( rowSumOddNumbers(5), 125 );