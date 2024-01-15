function numberSize(number) {
    if (typeof number !== 'number') {
        return 'ERROR: duok skaiciaus tipo reiksme';
    }
    if (!isFinite(number)) {
        return 'ERROR: duok normalu skaiciu, kuris turi skaitmenis';
    }

    const numberAsString = '' + number;
    let size = numberAsString.length;

    if (!Number.isInteger(number)) {
        size--;
    }
    if (number < 0) {
        size--;
    }

    return size;
}

console.log(numberSize(3), '-->', 1);
console.log(numberSize(314), '-->', 3);
console.log(numberSize(86123456789), '-->', 11);
console.log(numberSize(3.14), '-->', 3);

console.log(numberSize(-3), '-->', 1);
console.log(numberSize(-314), '-->', 3);
console.log(numberSize(-86123456789), '-->', 11);
console.log(numberSize(-3.14), '-->', 3);

console.log(numberSize('labas'));
console.log(numberSize(true));
console.log(numberSize(false));
console.log(numberSize([]));
console.log(numberSize([1, 2, 3, 4, 5]));
console.log(numberSize(Infinity));
console.log(numberSize(-Infinity));
console.log(numberSize(NaN));
console.log(numberSize());