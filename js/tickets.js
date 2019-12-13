"use strict";

function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function tickets( peopleInLine ){
    // money: [25, 50, 100]
    let money = [0, 0, 0];

    for ( let i=0; i<peopleInLine.length; i++ ) {
        const kupiura = peopleInLine[i];
        
        // paimame piniga
        if ( kupiura === 25 ) {
            money[0]++;
        }
        if ( kupiura === 50 ) {
            money[1]++;
        }
        if ( kupiura === 100 ) {
            money[2]++;
        }

        // atiduodame graza
        if ( kupiura === 50 ) {
            // tikrinu ar turiu grazos 25
            if ( money[0] > 0 ) {
                money[0]--;
            } else {
                return 'NO';
            }
        }
        if ( kupiura === 100 ) {
            // bandau atsiskaityti duodamas 50 + 25
            // jeigu neturiu 50, tai grazinu 3 * 25
            if ( money[1] > 0 ) {
                // grazinu 50
                money[1]--;
                // grazinu 25
                if ( money[0] > 0 ) {
                    money[0]--;
                } else {
                    return 'NO';
                }
            } else {
                // grazinu 3 * 25
                if ( money[0] > 2 ) {
                    money[0] -= 3;
                } else {
                    return 'NO';
                }
            }
        }
    }
    return 'YES';
}



test( tickets([25, 25, 50, 50]), "YES" );
test( tickets([25, 50, 50]), "NO" );
test( tickets([50]), "NO" );
test( tickets([100]), "NO" );
test( tickets([25, 100]), "NO" );
test( tickets([25, 25, 100]), "NO" );
test( tickets([25, 25, 25, 100]), "YES" );
test( tickets([25, 50, 25, 100]), "YES" );
test( tickets([25, 25, 50, 100]), "YES" );
test( tickets([25, 25, 50, 50, 100, 100]), "NO" );
test( tickets([25, 25, 50, 50, 100]), "NO" );





// let [c25,c50,c100] = [14, 85, 99];

// let c25 = 14;
// let c50 = 85;
// let c100 = 99;


// let {name, age} = { name: 'vardenis', age: 55, surname: 'x' }