"use strict";

function test ( pirmas, antras ) {
    if ( JSON.stringify(pirmas) === JSON.stringify(antras) ) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

function testit( a, b ){
    return [
            ...a.filter((v, i, aa) => aa.indexOf(v) === i),
            ...b.filter((v, i, bb) => bb.indexOf(v) === i)
        ].sort( (s1, s2) => s1 - s2 );
}

test( testit( [0],[1] ),     [0,1] )
test( testit( [1,2],[3,4] ), [1,2,3,4] )
test( testit( [1],[2,3,4] ), [1,2,3,4] )
test( testit( [1,2,3],[4] ), [1,2,3,4] )
test( testit( [1,2],[1,2] ), [1,1,2,2] )
test( testit( [1,2],[11,20] ), [1,2,11,20] )