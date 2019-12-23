"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}



test( greet('Daniel', 'Daniel'), 'Hello boss' )
test( greet('Greg', 'Daniel'), 'Hello guest' )
