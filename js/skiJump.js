"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function skiJump( mountain ){
    const mountainHeight = mountain.length;
    const speed = mountainHeight * 1.5;
    let jumpLength = (mountainHeight * speed * 9) / 10;

    // matematiskai tvarkinga ir palieka skaiciu
    jumpLength = Math.round(jumpLength * 100) / 100;
    // apsisaugome nuo netycines dalybos klaidu (pvz: 12.00000000001)
    jumpLength = jumpLength.toFixed(2);

    if ( jumpLength < 10 ) {
        return jumpLength + ' metres: He\'s crap!';
    } else if ( jumpLength >= 10 && jumpLength < 25 ) {
        return jumpLength + ' metres: He\'s ok!';
    } else if ( jumpLength >= 25 && jumpLength < 50 ) {
        return jumpLength + ' metres: He\'s flying!';
    } else {
        return jumpLength + ' metres: Gold!!';
    }
}


test( skiJump(['*']), '1.35 metres: He\'s crap!' );
test( skiJump(['*', '**', '***']), '12.15 metres: He\'s ok!' );
test( skiJump(['*', '**', '***', '****', '*****', '******']), '48.60 metres: He\'s flying!' );
test( skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********']), '86.40 metres: Gold!!' );