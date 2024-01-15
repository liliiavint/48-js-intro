import spausdintiSvente from './spausdintiSvente.js';

/*
OBJECT - objektas
*/

const name1 = 'Jonas';
const name2 = 'Maryte';
const name3 = 'Petras';
const name4 = 'Ona';

const marks1 = [];
const marks2 = [10];
const marks3 = [2, 4, 6];
const marks4 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];

const phone1 = '8612314542';
const phone2 = '8612315626';
const phone3 = '8612354859';

// [name, marks, phone]
const student1 = [name1, null, phone1];
const student2 = [name2, marks2, null];
const student3 = [name3, marks3, phone2];
const student4 = [name4, phone3, marks4];

const students = [student1, student2, student3, student4];

// Koks yra trecio studento telefono numeris?
console.log(students[0][2]);
console.log(students[1][2]);

const emptyObject = {};
console.log(emptyObject);
console.clear();

const s1 = {
    name: 'Jonas',
    marks: [],
    phone: '860141562',
};

const s2 = {
    name: 'Maryte',
    marks: [10],
    phone: '860548562',
};

const s3 = {
    name: 'Petras',
    marks: [2, 4, 6],
    phone: '86054584558',
};

console.log(s3);

console.log(s3['name']);
console.log(s3['marks']);
console.log(s3['marks'][0]);
console.log(s3['marks'][1]);
console.log(s3['marks'][2]);
console.log(s3['marks'].length);
console.log(s3['phone']);
console.log(s3['phone'].slice(-3));

const pazymiaiArray = [10, 2, 8, 4, 6];
const pazymiaiObject = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.log(pazymiaiArray[2]);

/*
Vasara:
- menesiu pavadinimai
- kiekvienas menesis turi skirtinga dienu kieki
- svenciu sarasa
- kasdienes temperaturos
*/

const summer = {
    title: {
        lt: 'Vasara',
        en: 'Summer',
    },
    months: ['Birzelis', 'Liepa', 'Rugpjutis'],
    days: [30, 31, 31],
    holidays: [
        {
            name: 'Jonines',
            date: {
                year: 2023,
                month: 6,
                day: 23,
            },
        },
        {
            name: 'Mindaugo karunavimas',
            date: {
                year: 2024,
                month: 7,
                day: 6,
            }
        },
        {
            name: 'Varom prie juros kol galim',
            date: {
                year: 2024,
                month: 8,
                day: 31,
            }
        },
    ],
};

// standartine sintakse istraukti informacijai
console.log(summer['title']);
console.log(summer['title']['lt']);
console.log(summer['title']['en']);
console.log(summer['months']);
console.log(summer['months'][0]);
console.log(summer['months'][1]);
console.log(summer['months'][2]);

console.log('------------------------');
// supaprastinta objekto sintakse
console.log(summer.title);
console.log(summer.title.lt);
console.log(summer.title.en);
console.log(summer.months);
console.log(summer.months[0]);
console.log(summer.months[1]);
console.log(summer.months[2]);

console.log('..............................')

console.log(summer.holidays[0].name);
console.log(summer.holidays[0].date);
console.log(summer.holidays[0].date.year);
console.log(summer.holidays[0].date.month);
console.log(summer.holidays[0].date.day);



// 1) Jonines - 2024m Birzelio 23d.
// 2) Mindaugo karunavimas - 2024m Liepos 6d.

for (let i = 0; i < summer.holidays.length; i++) {
    const text = spausdintiSvente(i, summer.holidays[i]);
    console.log(text);
}