for (let i = 0; i < 5; i++) {
    console.log(i);
}

const studentNames = ['Jonas', 'Maryte', 'Petras',  'Ona'];

for (let i = 0; i < studentNames.length; i++) {
    const studentName = studentNames[i];
    console.log(studentName);
}

console.log('-----------');

function arTestiCikla(iteracijosNr, sarasoIlgis) {
    return iteracijosNr < sarasoIlgis;
}

let j = 0;
for (; arTestiCikla(j, studentNames.length);) {
    const studentName = studentNames[j];
    console.log(j, studentName);
    j++;
}

console.log('END...');


function kaDarytiIfui(pirmas, antras) {
    return (pirmas * 2) >= (antras + 5);
}

const a = 7;
const b = 5;

if (kaDarytiIfui(a, b)) {
    console.log('--- TAIP');
} else {
    console.log('--- NE');
}

console.clear();

const colorsList = ['red', 'green', 'blue', 'black', 'white', 'yellow'];

console.log('FOR: ---------------------------');
for (let i = 0; i < colorsList.length; i++) {
    const color = colorsList[i];
    console.log(i, color);
}

console.log('FOR-OF: ---------------------------');
let i2 = 0;
for (const color of colorsList) {
    console.log(i2++, color);
}

console.log('WHILE: ---------------------------');
let i3 = 0;
while (i3 < colorsList.length) {
    const color = colorsList[i3];
    console.log(i3, color);
    i3++;
}

console.log('DO-WHILE: ---------------------------');
let i4 = 0;
do {
    const color = colorsList[i4];
    console.log(i4, color);
    i4++;
} while (i4 < colorsList.length)

console.log('FOR-EACH: ---------------------------');
colorsList.forEach((color, i5, originalArray) => {
    console.log(color, i5, originalArray);
});

console.clear();

console.log('FOR-IN: ---------------------------');

const car = {
    brand: 'Audi',
    model: '80',
    color: 'red',
    price: 300,
};

const carObjKeys = Object.keys(car);
console.log(carObjKeys);

for (const key of carObjKeys) {
    console.log('---', key, car[key]);
}

console.log('------------------');

for (const key in car) {
    console.log(car[key]);
}