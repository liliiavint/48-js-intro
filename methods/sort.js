const marks = [10, 2, 21, 8, 33, 121, 13, 4, 75, 6, 10000];

marks.sort((a, b) => a - b);
console.log(marks);

marks.sort((a, b) => b - a);
console.log(marks);

const students = [
    {
        name: 'Jonas',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 88,
    },
    {
        name: 'Petras',
        age: 33,
    },
    {
        name: 'Ona',
        age: 44,
    },
];

students.sort((a, b) => a.age - b.age);
console.log(students);

students.sort((a, b) => b.age - a.age);
console.log(students);

console.clear();

const lists = [
    [5],
    ['a', 's'],
    [true],
    [[], 5, 's', false, undefined],
    [],
    [[], 5, 's', false],
];
console.log(lists);

lists.sort((a, b) => a.length - b.length);
console.log(lists);


console.clear();

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
names.sort();

console.log(names);

const abc = ['a', 'aa', 'f', 'sss', 'c', 'cb', 'ca', 'A', '152', '?', '%'];

abc.sort();
console.log(abc);