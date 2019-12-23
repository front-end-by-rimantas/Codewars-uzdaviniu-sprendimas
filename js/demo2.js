"use strict";

// 4 kintamieji
    // iniciavimas: const, let , var
    // scope

const amzius = 18;
const vardas = 'Vardeni';
let zinute = '';

if ( amzius >= 18 ) {
    var pranesimas = ' tau kazkas galima nes tu vyresnis.'
} else {
    var pranesimas = ' tau kazkas negalima nes per jaunas.'
}
zinute = vardas + pranesimas;

console.log( zinute );

    // tipai:
        // primityvai:  number, string, boolean, Symbol, undefined, null
        // kompleksiniai: array, object, function

let arr = [
    {name: 'Vardenis', age: 18, megsta: ['bulves', 'kefyra']},
    {name: 'Vardenis2', age: 19, megsta: ['bulves2', 'kefyra2']},
    {name: 'Vardenis3', age: 12, megsta: ['bulves3', 'kefyra3']}
];

// let brr = [...arr];
let brr = JSON.parse( JSON.stringify(arr) );

// console.log(arr);
// console.log(brr);

brr[0].age = 7;

console.log(arr);
console.log(brr);


// 4 operatoriai

// matematiniai: +, -, *, /, %, ++, --
// priskirimo: =, +=, -=, *=, /=, %=
// loginiai: ==, >, <, <=, >=, ===, !=, !==, &&, ||
// kita: ...

for ( let i=0; i<3; i-=-1 ) {
    console.log(i);
}

let num = 4;
if ( ++num === 5 ) {
    console.log(true);
} else {
    console.log(false);
}
console.log(num);




// 5 loginės išraiškos
console.log('*******************');
console.log('loginės išraiškos');
console.log('*******************');

if ( true ) {
    console.log(true);
}

if ( !!true ) {
    console.log(true);
}

if ( !!!!true ) {
    console.log(true);
}

if ( false ) {
    console.log(true);
} else if ( 5 > 9 ) {
    console.log(true, true);
} else if ( false ) {
    console.log(true, true, true);
} else if ( false ) {
    console.log(true, true, true, true);
} else {
    console.log(false);
}

const kojos = 2;
switch (kojos) {
    case 0:
        console.log('Soki breika');
        break;
    case 1:
        console.log('Zaidi "klases"? :D');
        break;
    case 2:
        console.log('Eilinis zmogus');
        break;
    case 3:
        console.log('Senelis su lazdele');
        break;
    case 4:
        console.log('Kudikis');
        break;
        
    default:
        console.log('Ar tu turi kojas?.. :O');
        break;
}
console.log('--------------');

const diena = 'pir';
switch (diena) {
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pen':
        console.log('Reikia eiti mokytis :P');
        // break;
    
    case 'ses':
    case 'sek':
        console.log('Pusryciai!!!');
        break;

    default:
        console.log('Eiti nereikia, bet mokytis vis vien reikia :P :P');
        break;
}




// 6 ciklai
console.log('*******************');
console.log('ciklai');
console.log('*******************');

console.log('ciklas: for');

function arSuktis( index, index2 ) {
    return index < index2 ? true : false;
}

for ( let i=0, k=6; i<k; i++, k-- ) {
    console.log(i, k);
}

console.log('ciklas: while');

let iWhile = 0;
while (iWhile < 5) {
    console.log(iWhile);
    iWhile++;
}

console.log('ciklas: do-while');

let dwIndex = 0;
do {
    console.log(dwIndex);
    dwIndex++;
} while (dwIndex < 5);

console.log('ciklas: foreach');

const pirminiai = [2, 3, 23, 11, 13, 5, 7, 19, 17, 29];

pirminiai.forEach( (skaicius, index) => {
    const rez = skaicius * index;
    return console.log( index, skaicius, rez );
} )

console.log('ciklas: for-in');

for( let i in pirminiai ) {
    console.log(i, pirminiai[i]);
}

console.log('ciklas: for-of');

for( let i of pirminiai ) {
    console.log(i);
}

// map, filter, sort, reduce

console.log('ciklas: map');

const dvygubiPirminiai = pirminiai.map( s => s * 2 )
console.log(pirminiai);
console.log(dvygubiPirminiai);


console.log('ciklas: filter');

const daugiauUz15 = pirminiai.filter( s => s>15 )
console.log(daugiauUz15);


console.log('ciklas: sort');

// const isEiles = pirminiai.sort( (a, b) => b-a )
// console.log(pirminiai);
// console.log(isEiles);


console.log('for\'inis sortinimas');

const forIsEiles = [];
let maz = Infinity;

for ( let i=0; i<pirminiai.length; i++ ) {
    console.log('--------');
    const si = pirminiai[i];
    console.log(i, si);
    
    
    maz = si;
    for ( let k=i+1; k<pirminiai.length; k++ ) {
        const sk = pirminiai[k];
        if ( sk < maz ) {
            maz = sk;
        }
    }
    forIsEiles.push(maz);
}

console.log(forIsEiles);







// 7 funkcijos
// 11 event listeners
// 13 DOM manipuliavimas
// 15 JS objektai (Date, Math)