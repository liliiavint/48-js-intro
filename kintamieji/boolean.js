/*
BOOLEAN - logine reiksme
- true (pozityvas)
- false (negatyvas)

Logines operacijos:
- && (and)
- || (or)
- ! (priesinga reiksme, arba "not")
*/

const arRytas = true;
const arVakaras = false;
console.log('Ar rytas:', arRytas);
console.log('Ar vakaras:', arVakaras);

const isNumber = true;
const isText = false;

const isRaining = true;
const isNotRaining = false;
const isMorning = true;
const isWarm = false;

// galima, jeigu: yra silta ir ne lyja
const shouldIGoRollerBlading1 = isWarm && isNotRaining;
const shouldIGoRollerBlading2 = isWarm && !isRaining;
console.log('Rieduciai?', shouldIGoRollerBlading1);
console.log('Rieduciai?', shouldIGoRollerBlading2);

console.log(true, !true);
console.log(false, !false);

console.clear();

const arGrazus = true;
const arAukstas = true;
const arTurtingas = true;

const arEisIPasimatyma = arGrazus || arAukstas && arTurtingas;
console.log(1, true || true && true, 'true');
console.log(2, true || true && false, 'true???');
console.log(3, true || false && true, '2');
console.log(4, true || false && false, '2');
console.log(5, false || true && true, 'true');
console.log(6, false || true && false, 'false');
console.log(7, false || false && true, 'false');
console.log(8, false || false && false, 'false');
console.log('--------------');
console.log(1, true && true || true, 'true');
console.log(2, true && true || false, 'true');
console.log(3, true && false || true, 'true');
console.log(4, true && false || false, 'false');
console.log(5, false && true || true, 'true');
console.log(6, false && true || false, 'false');
console.log(7, false && false || true, 'true');
console.log(8, false && false || false, 'false');
console.log('--------------');

console.log('Pasimatymas:', arEisIPasimatyma);