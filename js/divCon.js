"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function divCon( x ){
    let sum = 0;

    for ( let i=0; i<x.length; i++ ) {
        const number = x[i];
        if ( typeof(number) === 'number' ) {
            sum += number;
        } else {
            sum -= parseInt(number);
        }
    }

    return sum;
}



test( divCon([9, 3, '7', '3']), 2 );
test( divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14) ; 
test( divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13 );
test( divCon([0, '0']), 0 );
test( divCon([0]), 0 );
test( divCon(['-850']), 850 );
test( divCon([]), 0 );