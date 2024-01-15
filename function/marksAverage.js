const marks1 = [1, 2, 3, 4, 5];                     // 3
const marks2 = [2, 4, 6, 8, 10];                    // 6
const marks3 = [10, 2, 8, 4, 6, 10, 2, 8, 4, 6,];   // 6
const marks4 = [7, 7, 7, 7, 7, 7, 7];               // 7
const marks5 = [10];                                // 10
const marks6 = [1, 10];                             // 5.5
const marks7 = [];
const marks8 = [10, -10];                           // 10
const marks9 = [10, 2, 0, -6, 8, -3.14, 4, 2.727, 6, 11, 200, 1000, 10.99999, 10.00001];
const marks10 = [10, -10, 0, 0.99999, 10.0000001, 3.14, 'labas',
    true, false, [], NaN, Infinity, -Infinity, undefined, marksAverage];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Truksta duomenu (pazymiu)';
    }

    let count = 0;
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];

        // if (mark >= 1 && mark <= 10 && Number.isInteger(mark)) {
        if (typeof mark === 'number' && mark % 1 === 0 && mark >= 1 && mark <= 10) {
            sum += mark;
            count++;
        }
    }

    return sum / count;
}

const average1 = marksAverage(marks1);
console.log(average1, '-->', 3);

const average2 = marksAverage(marks2);
console.log(average2, '-->', 6);

const average3 = marksAverage(marks3);
console.log(average3, '-->', 6);

const average4 = marksAverage(marks4);
console.log(average4, '-->', 7);

const average5 = marksAverage(marks5);
console.log(average5, '-->', 10);

const average6 = marksAverage(marks6);
console.log(average6, '-->', 5.5);

const average7 = marksAverage(marks7);
console.log(average7, '-->', 'Truksta duomenu (pazymiu)');

const average8 = marksAverage(marks8);
console.log(average8, '-->', 10);

const average9 = marksAverage(marks9);
console.log(average9, '-->', 6);

const average10 = marksAverage(marks10);
console.log(average10, '-->', 10);