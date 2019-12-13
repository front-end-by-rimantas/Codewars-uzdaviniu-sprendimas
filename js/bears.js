"use strict";

function test ( pirmas, antras ) {
    if ( JSON.stringify(pirmas) === JSON.stringify(antras) ) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}


function bears(x, s){
    let pairs = '';
    let done = false;
    let radybos = false;
    
    while ( done === false ) {
        let place_B8 = s.indexOf('B8');
        let place_8B = s.indexOf('8B');

        // nerado nei vieno
        if ( place_8B === -1 && place_B8 === -1 ) {
            done = true;
        }

        if ( place_8B >= 0 && place_B8 >= 0 ) {
            // rado abu
            if ( place_8B < place_B8 ) {
                // pirmesnis 8B
                pairs += '8B';
                s = s.replace('8B', '-');
                radybos = true;
            } else {
                // pirmesnis B8
                pairs += 'B8';
                s = s.replace('B8', '-');
                radybos = true;
            }
        } else {
            // rado vien is
            if ( place_8B >= 0 ) {
                // rado 8B
                pairs += '8B';
                s = s.replace('8B', '-');
                radybos = true;
            }
            if ( place_B8 >= 0 ) {
                // rado B8
                pairs += 'B8';
                s = s.replace('B8', '-');
                radybos = true;
            }
        }

        if ( radybos === false ) {
            done = true;
        }
        radybos = false;
    }

    const pairsCount = pairs.length / 2;
    let pairsEnought = false;
    if ( pairsCount >= x ) {
        pairsEnought = true;
    }

    return [pairs, pairsEnought]
}

test( bears(1, 'asd8B8asd'), ["8B", true] );
test( bears(1, 'asd8Basd'), ["8B", true] );
test( bears(2, 'asd8Basd'), ["8B",false] );
test( bears(1, 'asdB8Basd'), ["B8",true] );
test( bears(2, 'asdB8B8asd'), ["B8B8",true] );
test( bears(2, 'asdB88Basd'), ["B88B",true] );
test( bears(2, 'asd8B88Basd'), ["8B8B",true] );
test( bears(1, 'asd88BBasd'), ["8B",true] );
test( bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false] );
test( bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]) ; 
test( bears(8, '8'), ["",false] );