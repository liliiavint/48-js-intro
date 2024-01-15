const marks = [10, 2, 8, 4, 6, 100, -7, 3.14, -2.717, 'labas'];

function isMarkCorrect(mark) {
    if (typeof mark !== 'number'
        || mark < 1
        || mark > 10
        || mark % 1 !== 0) {
        return false;
    }

    return true;
}

const correctMarks = marks.filter(isMarkCorrect);
console.log(correctMarks);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

const pirmaKomanda = students.filter((_, index) => index % 2 === 0);
const antraKomanda = students.filter((_, index) => index % 2 === 1);

console.log(pirmaKomanda);
console.log(antraKomanda);

console.log('--------------');

function aboutStudent(item, index, originalList) {
    console.log(item, index, originalList);
}

const about = students.filter(aboutStudent);