"use strict";

function test ( pirmas, antras ) {
    if ( JSON.stringify(pirmas) === JSON.stringify(antras) ) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

function monkeyCount(n) {
    let result = [];

    if ( typeof(n) !== 'number' ||
         isFinite(n) === false ||
         n < 1 ) {
        return result;
    }


    for ( let i=1; i<=n; i++ ) {
        result.push(i)
    }

    return result;
}


test( monkeyCount(3), [1, 2, 3] );
test( monkeyCount(5), [1, 2, 3, 4, 5] );
test( monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9] );
test( monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
test( monkeyCount(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] );
test( monkeyCount(1), [1] );
test( monkeyCount(0), [] );
test( monkeyCount(Infinity), [] );
test( monkeyCount(-Infinity), [] );
test( monkeyCount(-30), [] );