"use strict";

let i2 = 0;


while ( i2 < 0 ) {
    console.log(i2);
    i2++;
}

do {
    console.log(i2);
    i2++;
} while ( i2 < 0 );


console.log('*************');
console.log('kintamieji');
console.log('*************');
// 4 kintamieji
    // iniciavimas: const, let, var
    // scope:

let amzius = 17;
if ( amzius >= 18 ) {
    var a = 'aaaaaaa :O';
    let a1 = 'aaaaaaa :O 1';
    const a2 = 'aaaaaaa :O 2';
    console.log('pilnametis');
    console.log(amzius, a);
} else {
    var b = '*****';
    let b1 = '***** 1';
    const b2 = '***** 2';
    console.log('dat truksta...');
    console.log(amzius, b);
}

// console.log(amzius, a, a1, a2, b, b1, b2);

console.log('---------------');

// function arTesti( x ) {
//     return x<5 ? true : false;
// }

// let i=0;
// for ( ; arTesti(i);  ) {
//     console.log(i);
//     i++;
// }

console.log('---------------');

let i=0;
for ( ; i<5; i++ ) {
    console.log(i);
}

console.log(i);

console.log('---------------');

for ( ; i<10; i++ ) {
    console.log(i);
}
console.log(i);


let HTML = '';
const star = '<div class="fa fa-star"></div>';
const starO = '<div class="fa fa-star-o"></div>';
const s = 3;

let is=0;
for ( ; is<5; is++ ) {
    if ( is === s ) {
        break;
    }
    HTML += star;
    console.log(star);
}
for ( ; is<5; is++ ) {
    HTML += starO;
    console.log(starO);
}

// 4 operatoriai
console.log('*************');
console.log('operatoriai');
console.log('*************');

// matematiniai: +, -, *, /, %
// binarinis: ^
// kiti: ?, :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators


// 5 loginės išraiškos

if ( !false ) {
    console.log('kazkas true');
}
else if ( true ) {
    console.log('kazkas true 2');
}
else if ( true ) {
    console.log('kazkas true 3');
}

if ( 4>2 && (7<5 || 7<9) ) {
    console.log('sudetinga');
}

const eilinioDarbuotojoDiena = 'ast';
switch (eilinioDarbuotojoDiena) {
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pen':
        console.log('Darbo diena!!! =]');
        break;

    case 'ses':
    case 'sek':
        console.log('Poilsis... :(');
        break;
        
    default:
        console.log('Produktyviausia mano diena!');
        break;
}

console.log('------------------');


const freelancerioDiena = 'pir';
switch (freelancerioDiena) {
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pen':
        console.log('Keliames 7val ryto');
        
    case 'ses':
    case 'sek':
        console.log('Valomes dantis.');
        break;
        
    default:
        console.log('Produktyviausia mano diena!');
        break;
}

const temp = 19;

switch (temp) {
    case 18:
        console.log('Maike ir pirmyn');
        break;

    default:
        console.log('turbut reiks daugiau...');
        break;
}


// 6 ciklai
console.log('*************');
console.log('ciklai');
console.log('*************');

// const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const abc = 'abcd'.split('');

console.log('---------------');
console.log('for');

for ( let i=0; i<abc.length; i++ ) {
    const raide = abc[i];
    console.log(raide);
    if ( i === 2 ) {
        break;
    }
}
console.log('---------------');
console.log('while');

let raideIndex = 0;
while (raideIndex < abc.length) {
    const raide = abc[raideIndex];
    console.log(raide);
    raideIndex++;
}

console.log('---------------');
console.log('do-while');

let doRaideIndex = 0;
do {
    const raide = abc[doRaideIndex];
    console.log(raide);
    doRaideIndex++;
} while (doRaideIndex < abc.length);

console.log('---------------');
console.log('foreach');

abc.forEach( (raide, index) => {
    if ( index % 2 === 0 ) {
        console.log(raide);
    }
})

console.log('---------------');
console.log('for-in');

for ( let i in abc ) {
    const raide = abc[i];
    console.log(i);
}

console.log('---------------');
console.log('for-of');

for ( let i of abc ) {
    console.log(i);
}

console.log('---------------');

const start = 0;
const finish = 1000000;
let timeStart = 0;
let timeFinish = 0;
let time = 0;

timeStart = Date.now();
sumFor();
timeFinish = Date.now();

time = timeFinish - timeStart;
console.log('Uztruko laiko (for): ', time);


timeStart = Date.now();
sumWhile()
timeFinish = Date.now();

time = timeFinish - timeStart;
console.log('Uztruko laiko (while): ', time);

function sumFor() {
    let suma = 0;
    for ( let i=start; i<finish; i++ ) {
        suma += i;
    }
    return;
}

function sumWhile() {
    let sfi = 0;
    let suma = 0;
    while (sfi < finish) {
        suma += sfi;
        sfi++;
    }
    return;
}


console.log('----------------');

// map, filter, sort, reduce
const pirminiai = [2, 3, 23, 11, 13, 5, 7, 19, 17, 29];

const dvygubiPirminiai = pirminiai.map( s => s*2 );
console.log(pirminiai);
console.log(dvygubiPirminiai);

const maziauUz15 = pirminiai.filter( s => s<15 )
console.log(maziauUz15);

const nuoMikiDp = pirminiai.sort( (a, b) => a-b );
console.log(nuoMikiDp);

const pirminiuSuma = pirminiai.reduce( (a, b) => a+b, 0 )
console.log(pirminiuSuma);


const zmones = [
    { name: 'Name1', age: 18, eye: 'blue' },
    { name: 'Name2', age: 23, eye: 'blue' },
    { name: 'Name3', age: 44, eye: 'red' },
    { name: 'Name4', age: 12, eye: 'green' },
    { name: 'Name5', age: 87, eye: 'blue' }
]

const zmonesPoMetu = zmones.map(zmogus => 
    ({...zmogus, age: ++zmogus.age})
)
console.log(zmonesPoMetu);

const bendrasAmzius = zmones.reduce( (suma, zmogus) => {
    return suma + zmogus.age;
}, 0)
console.log(bendrasAmzius);



// 7 funkcijos
// 11 event listeners
// 13 DOM manipuliavimas
// 15 JS objektai (Date, Math)