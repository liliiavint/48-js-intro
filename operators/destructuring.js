// ... - rest operator
// ... - spread operator

const marks = [10];

console.log(marks);

const mark1 = marks[0];
const mark2 = marks[1];
const marksOthers = marks.slice(2);

console.log(mark1);
console.log(mark2);
console.log(marksOthers);

const [first, second, ...others] = marks;

console.log(first);
console.log(second);
console.log(others);

console.clear();

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    height: 200,
    weight: 150,
};

const wantedKeys = ['name', 'age'];
const personName = person[wantedKeys[0]];
const personAge = person[wantedKeys[1]];
const personOtherInfo = {};

for (const key in person) {
    if (!wantedKeys.includes(key)) {
        personOtherInfo[key] = person[key];
    }
}

console.log(personName, personAge);
console.log(personOtherInfo);

const { name, age, ...personRestDetails } = person;

console.log(name, age);
console.log(personRestDetails);

console.clear();

const n1 = [1, 11, 111];
const n2 = [2, 22, 222];
const n3 = [3, 33, 333];

const n12 = n1.concat(n2);
console.log(n12);

const rest12 = [...n1, ...n2];
console.log(rest12);

const rest12231 = [...n1, ...n2, ...n2, ...n3, ...n1];
console.log(rest12231);

const n12231 = n1.concat(n2, n2, n3, n1);
console.log(n12231);