"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function isDivisible( n, x, y ){
    if ( n % x !== 0 ) return false;
    if ( n % y !== 0 ) return false;

    return true;
}


test( isDivisible(3,3,4), false );
test( isDivisible(12,3,4), true );
test( isDivisible(8,3,4), false );
test( isDivisible(48,3,4), true );