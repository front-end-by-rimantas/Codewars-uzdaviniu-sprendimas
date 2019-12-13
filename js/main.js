"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function noSpace( x ){
    if ( typeof(x) !== 'string' ) {
        return '';
    }

    let result = '';
    
    for ( let i=0; i<x.length; i++ ) {
        if ( x[i] === ' ' ) {
            continue;
        }
        result += x[i];
    }

    return result;
}

test( noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB' );
test( noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd' );
test( noSpace('8aaaaa dddd r     '), '8aaaaaddddr' );

test( noSpace('     '), '' );
test( noSpace('asdfghjk'), 'asdfghjk' );
test( noSpace(5412365), '' );
test( noSpace('    ,    '), ',' );
