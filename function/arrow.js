const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// 
const minus = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function (rodykline funkcija)
const multiply = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function
// jeigu, logikos bloke yra tik 1 salyga
// tai galima nerasyti { return }
const divide = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

// arrow function
// jeigu, parametru bloke yra tik 1 parametras
// tai galima nerasyti ()
const square = a => a ** 2;
console.log(`${n1} * ${n1} = ${square(n1)}`);

const cube = a => a ** 3;
console.log(`${n2} * ${n2} * ${n2} = ${cube(n2)}`);


// Chuck Norris -> C.N.
// Pamela Anderson -> P.A.

function abbriavation(text) {
    const words = text.split(' ');
    let ans = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        ans += word[0] + '.';
    }

    return ans;
}

const abbr = t => t.split(' ').map(s => s[0] + '.').join('');

console.log(abbriavation('Jeses'));
console.log(abbriavation('Chuck Norris'));
console.log(abbriavation('Pamela Anderson'));
console.log(abbriavation('Jan Clod VanDam'));
console.log(abbriavation('Jan Clod Van Dam'));
console.log(abbriavation('Super Jan Clod Van Dam'));
console.log('---------------------------------------');
console.log(abbr('Jeses'));
console.log(abbr('Chuck Norris'));
console.log(abbr('Pamela Anderson'));
console.log(abbr('Jan Clod VanDam'));
console.log(abbr('Jan Clod Van Dam'));
console.log(abbr('Super Jan Clod Van Dam'));