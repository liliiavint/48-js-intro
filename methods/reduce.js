const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log(sum);

const totalSum = marks.reduce((sum, mark) => sum + mark);
console.log(totalSum);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

let allNames = names[0];

for (let i = 1; i < names.length; i++) {
    allNames += names[i][0];
}

console.log(allNames);

const reducedNames = names.reduce((total, name) => total + name[0]);
console.log(reducedNames);

console.clear();

// 1+2+3+4
console.log([1, 2, 3, 4].reduce((t, n) => t + n));

// 1-2-3-4
console.log([1, 2, 3, 4].reduce((t, n) => t - n));

// 1*2*3*4
console.log([1, 2, 3, 4].reduce((t, n) => t * n));

// 1/2/3/4
console.log([1, 2, 3, 4].reduce((t, n) => t / n));


// 10+1+2+3+4
console.log([1, 2, 3, 4].reduce((t, n) => t + n, 10));

// 10-1-2-3-4
console.log([1, 2, 3, 4].reduce((t, n) => t - n, 10));

const inicialai = names.reduce((t, s) => t + s[0] + '.', '');
console.log(inicialai);