"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function breakChocolate( n,m ) {
    if ( typeof(n) !== 'number' ||
         isFinite(n) === false ||
         n < 1 ||
         typeof(m) !== 'number' ||
         isFinite(m) === false ||
         m < 1 ) {
        return 0;
    }

    return n * m - 1;
}



test( breakChocolate(5, 5) , 24 );
test( breakChocolate(2, 2) , 3 );
test( breakChocolate(2, 4) , 7 );
test( breakChocolate(1, 1) , 0 );
test( breakChocolate(0, 0) , 0 );
test( breakChocolate(3, 3) , 8 );