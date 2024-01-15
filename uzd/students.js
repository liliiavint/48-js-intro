// Koks yra klases pazymiu vidurkis?
// Kokia yra klases pazymiu mediana?
// Koks yra maziausias pazymys?
// Koks yra didziausias pazymys?
// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?
// Koks yra vardas studento kuris turi maziausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymiu vidurki?
// Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?
// Koks yra vardas studento kuris turi maziausiai pazymiu?
// Koks yra vardas studento kuris turi daugiausiai pazymiu?
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).

const students = [
    {
        name: 'Jonas',
        marks: [2],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7],
    },
    {
        name: 'Petras',
        marks: [10, 10],
    },
    {
        name: 'Ona',
        marks: [7, 7, 7, 7, 7],
    },
];
console.log(students)
// Koks yra klases pazymiu vidurkis?
// Koks yra klases mokiniu pazymiu vidurkiu vidurkis?

// Klases vidurkis = susumuojame kiekvieno studento vidurki
// 1) 10 -> 10
// 2) 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 -> 1
// (10+1) / 2 = 5.5

// Susumuojame visu mokiniu visus pazymius ir dalinam is viso kiekio
// 1) 10
// 2) 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
// (10+1+1+1+1+1+1+1+1+1+1) / 2 = 20 / 11 = 1.91919191;


// Koks yra klases mokiniu pazymiu vidurkiu vidurkis?
const classAverage = students
    .map(student => student.marks)
    .map(marks => marks.reduce((t, mark) => t + mark, 0) / marks.length)
    .reduce((t, average) => t + average, 0) / students.length;

let bendriPazymiai = [];

for (let i = 0; i < students.length; i++) {
    bendriPazymiai = bendriPazymiai.concat(students[i].marks);
}

console.log(bendriPazymiai);
const average = students
    .map(student => student.marks)
    .map(marks => marks.reduce((t, mark) => t + mark, 0)/ marks.length);
    console.log('.....', average);
    
    
    
  
    
 for (const student of students) {
    if (student.marks.length > 2) {
        console.log(student.name);
    }
}

// 1. Koks yra klases pazymiu vidurkis?

// 2. Kokia yra klases pazymiu mediana?
function mediana(arr){
arr.sort((a, b) => a - b);
const vidurki = Math.floor(arr.length / 2);
 if(arr.length % 2){
  return arr[vidurki]
 }else{
  return ((arr[vidurki - 1] + arr[vidurki]) / 2);
 }
}

console.log('2. Mediana:', mediana(average));
// 3. Koks yra maziausias pazymys?
const minmarks = Math.min(...students.flatMap(o => o.marks));
console.log(`3. Maziausias pazymys yra ${minmarks}.`);
// 4. Koks yra didziausias pazymys?
const maxmarks = Math.max(...students.flatMap(o => o.marks));
console.log(`4. Didziausias pazymys yra ${maxmarks}.`);
// 5. Koks yra skirtumas tarp didziausio ir maziausio pazymiu?
const diff = maxmarks - minmarks;
console.log(`5. Skirtumas tarp didziausio ir maziausio pazymiu yra ${diff}.`);
// 6. Koks yra vardas studento kuris turi maziausia pazymi?
const minmarkStudent = (stud) => {
    let minStudent = ' ';
    let min = Infinity;
    for (const mark of stud) {
        let minbal = Math.min(...mark.marks) 
           if (minbal < min) {
           min = minbal;
           minStudent = mark.name;
        }
      }
      return minStudent;
    }
    console.log(`6. Vardas studento kuris turi maziausia pazymi yra: ${minmarkStudent(students)}.`);
// 7. Koks yra vardas studento kuris turi geriausia pazymi?
const maxmarkStudent = (stud) => {
    let maxStudent = ' ';
    let max = 0;
    for (const student of stud){
        let maxbal = Math.max(...student.marks) 
           if (maxbal > max) {
           max = maxbal;
           maxStudent = student.name;
        }
      }
      return maxStudent;
    }
    console.log(`7. Vardas studento kuris turi geriausia pazymi yra: ${maxmarkStudent(students)}.`)
// 8. Koks yra vardas studento kuris turi geriausia pazymiu vidurki?
let marksAverage2 = f => f.reduce((total, i) => total + i, 0)/f.length;
const radogeraiStudent = (stud) => {
    let geraiStudent = '';
    let max = 0;
    stud.forEach((student) => {
        if(marksAverage2(student.marks)  > max ){
            max = marksAverage2(student.marks);
            geraiStudent = student.name;
        }
        })
      
      return geraiStudent;
}

    console.log(`8. Vardas studento kuris turi geriausia pazymi vidurki yra: ${radogeraiStudent(students)}.`)
// 9. Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?
const marksAverage = f => f.reduce((total, i) => total + i, 0)/f.length;
const radoblogaiStudent = (stud) => {
let blogaiStudent = null;
let min = Infinity;
for (const mark of stud) {
    let serbal = marksAverage(mark.marks) 
       if (serbal < min) {
        min = marksAverage(mark.marks);
        blogaiStudent = mark.name;
    }
  }
  return blogaiStudent;
}
console.log(`9. Vardas studento kuris turi prasciausia pazymiu vidurki yra: ${radoblogaiStudent(students)}.`)
// 10. Koks yra vardas studento kuris turi maziausiai pazymiu?
const trumpasjuostaStudent = (stud) => {
    let trumpaijuosta = null;
    let min = Infinity;
    for (const mark of stud) {
        let juostabal = mark.marks.length;
           if (juostabal < min) {
            min = juostabal;
            trumpaijuosta = mark.name;
        }
      }
      return trumpaijuosta;
    }
    console.log(`10. Vardas studento kuris turi maziausiai pazymiu: ${trumpasjuostaStudent(students)}.`)
// 11. Koks yra vardas studento kuris turi daugiausiai pazymiu?
const ilgaijuostaStudent = (stud) => {
    let ilgaijuosta = '';
    let max = 0;
    for (const mark of stud) {
        let juostabal = mark.marks.length;
           if (juostabal > max) {
            max = juostabal;
            ilgaijuosta= mark.name;
        }
      }
      return ilgaijuosta;
    }
    console.log(`11. Vardas studento kuris turi daugiausiai pazymiu: ${ilgaijuostaStudent(students)}.`)
// 12. Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).

// 13. Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).
