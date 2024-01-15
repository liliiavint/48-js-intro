/*
Viskas JS'e turi savo tipa.
*/

console.log(typeof 3.14);
console.log(typeof -999);
console.log(typeof 0);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log('-----------');
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof ['a', 'b']);
console.log(typeof [true, false]);
console.log(typeof [sum, sum]);

console.log('--------------');

function sum(a, b) {
    if (typeof a !== 'number') {
        return 'Error: pirmas parametras nera skaiciaus tipo.';
    }

    if (typeof b !== 'number') {
        return 'Error: antras parametras nera skaiciaus tipo.';
    }

    return a + b;
}

console.log(sum(7, 5), 12);
console.log(sum(7, true));
console.log(sum([], 5));
console.log(sum('labas', undefined));