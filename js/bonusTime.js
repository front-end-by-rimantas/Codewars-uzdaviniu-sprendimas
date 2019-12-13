"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function bonusTime(salary, bonus) {
    if ( typeof(salary) !== 'number' ||
         isFinite(salary) === false ||
         salary % 1 !== 0 ||
         salary < 0 ) {
        return "\u00A3" + salary;
    }
    if ( typeof(bonus) !== 'boolean' ) {
        return "\u00A3" + salary;
    }

    if ( bonus === true ) {
        return "\u00A3" + salary * 10;
    }

    return "\u00A3" + salary;
}



test( bonusTime(10000, true), '£100000' );
test( bonusTime(25000, true), '£250000' );
test( bonusTime(10000, false), '£10000' );
test( bonusTime(60000, false), '£60000' );
test( bonusTime(2, true), '£20');
test( bonusTime(78, false), '£78' );
test( bonusTime(67890, true), '£678900' );
test( bonusTime(0, true), '£0' );
test( bonusTime(-11000, true), '£-11000' );
test( bonusTime(Infinity, true), '£Infinity' );
