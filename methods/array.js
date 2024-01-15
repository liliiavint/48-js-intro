const marks = [10, 2, 8, 4, 6];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[777]);
console.log(marks[marks.length - 1], marks.at(-1));
console.log(marks[marks.length - 2], marks.at(-2));
console.log(marks[marks.length - 3], marks.at(-3));
console.log(marks[marks.length - 4], marks.at(-4));
console.log(marks[marks.length - 5], marks.at(-5));

console.log('-----------------------0');

const a = [1, 1, 1];
const b = [2, 2, 2];
const c = [3, 3, 3];
const d = a.concat(b).concat(c);
const e = a.concat(b, c);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log('-----------------------1');

const rugsejis = [10, 2];
const spalis = [8, 4];
const lapkritis = [6];

const trimestras = rugsejis.concat(spalis, lapkritis);
console.log(trimestras);

console.log('-----------------------2');

console.log(marks);
console.log(marks.includes(10));
console.log(marks.includes(7));

console.log(marks.indexOf(10));
console.log(marks.indexOf(2));
console.log(marks.indexOf(8));
console.log(marks.indexOf(4));
console.log(marks.indexOf(6));

console.log(marks.indexOf(7));
console.log(marks.indexOf(77));
console.log(marks.indexOf(777));

console.log('-----------------------3');

console.log(marks.join());
console.log(marks.join(', '));
console.log(marks.join(' --==-- '));
console.log(marks.join(' + '));

console.log('-----------------------4');

// const x = 102846;
const x = parseInt(marks.join(''));
console.log(x);

console.log('-----------------------5');

console.log(marks);
marks.reverse();

console.log(marks);
marks.reverse();

console.log(marks);

const alus = 'alus';
const sula = alus.split('').reverse().join('');
console.log(sula);

function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log(reverseString('alus'));
console.log(reverseString('sula'));
console.log(reverseString('sedekuzukedes'));
console.log(reverseString('sedek'));

console.log('------------------------');

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice());
console.log(numbers.slice(2));
console.log(numbers.slice(1, 3));
console.log(numbers.slice(0, -1));
console.log(numbers.slice(0, -2));

console.log('-------////-----------------');


const names = [];
console.log(names)
const n1 = names.push('Jonas');
console.log(n1, names)
const n2 = names.push('Maryte');
console.log(n2, names)
const n3 = names.push('Petras');
console.log(n3, names)
const n4 = names.push('Ona');
console.log(n4, names);
const n5 = names.pop('Ona');
console.log(n5, names);
const n6 = names.pop('Ona');
console.log(n6, names);
const n7 = names.unshift('Juozas');
console.log(n7, names);
const n8 = names.unshift('Barbora');
console.log(n8, names);
const n9 = names.unshift('Juozas');
console.log(n9, names);
const n10 = names.shift('Juozas');
console.log(n10, names);

console.log ('.....................................')

const colors = [ 'red', ['blue'], 'yellow' , 'pink', 'green', 'orange', 'violet'];
colors[1].push ('white') //pridete 'white'  su ['blue'];
colors.push ('white')
colors.splice(3, 1); // delete index pozicija, kiek
console.log(colors);
colors.splice(3, 1, 'BLACK', 'WHITE'); // delete index pozicija, kiek ir pridete 'BLACK', 'WHITE'
console.log(colors);

console.log ('.....................................')