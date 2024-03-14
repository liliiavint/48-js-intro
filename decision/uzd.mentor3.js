// 1.     Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, 
// autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą.

//kiekvieną objekto savybę 
console.log('Uzdotys 1.')
const dataBook = {
    knygos: "Kur dingo gandras Grantas?", 
    author: "Gina Viliūnė",
    year: 2021
}
for(const key in dataBook){
    console.log(`${key}: ${dataBook[key]}`);
}
console.log('.....................................')

console.log('Uzdotis 2.')
// 2.     Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, 
// kiekviena reikšmė turėtų vartotojo vardą ir amžių. Naudodami for of ciklą, 
// išveskite kiekvieno vartotojo vardą ir amžių.


const Friends = [
    {
        name: 'Joey',
        age: 22,
    },
    {
        name: 'Phoebe',
        age: 30,
    },
    {
        name: 'Chandler',
        age: 25,
    },
    {
        name: 'Monica',
        age: 31,
    },
    {
        name: 'Ross',
        age: 27,
    },
    {
        name: 'Rachel',
        age: 25,
    },
];
for(const key of Friends){
    console.log(`${key.name} ${key.age} years old.`)
}
console.log('..........................................')

console.log('Uzdotis 3.')
// 3.     Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija 
// apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją,
//  kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam 
//  tikrai kategorijai.


const produktai = [
    {
        name: 'Kopusto',
        price: 22,
        kategorija: 'darzoves'
    },
    {
        name: 'Coca-cola',
        price: 2,
        kategorija: 'gerimai'
    },
    {
        name: 'Bulve',
        price: 0.29,
        kategorija: 'darzoves'
    },
    {
        name: 'Pienas',
        price: 1.2,
        kategorija: 'pieno produktai'
    },
    {
        name: 'Sprite',
        price: 1.5,
        kategorija: 'gerimai'
    },
    {
        name: 'Varske',
        price: 22,
        kategorija: 'pieno produktai'
    },
];

const pasirinkimas = (kategorija) => {
    let sarasa = ''; 
    for(const produkt of produktai) {
        if (kategorija === produkt.kategorija){
            sarasa += `${produkt.name} `;
        }
        
    }
    return sarasa;
}
console.log(pasirinkimas('pieno produktai'))
console.log(pasirinkimas('gerimai'))
console.log(pasirinkimas('darzoves'))

console.log('.....................................')

console.log('Uzdotis 4.')
// 4.     Objekto Kopijavimas: Parašykite funkciją, kuri naudojant 
// for in ciklą sukurtų objekto kopiją.

const s2 = {
    name: 'Maryte',
    marks: [10],
    phone: '860548562',
};

function copyObjekt(Obj){
    let newObj = { }
    for (const key in Obj){
        newObj[key] = Obj[key] 
    }
    return newObj;
} 
console.log(copyObjekt(s2))
console.log('.....................................')

console.log('Uzdotis 5.')
// 5.     Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis. 
// Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto 
// raktus, o kitame - reikšmes.


const sarasa = {
    name: 'Petras',
    marks: [2, 4, 6],
    phone: '86054584558',
};

let arrRaktus = [ ];
let arrReikšmes = [ ];

for (const key in sarasa){
    arrRaktus.push(key)
    arrReikšmes.push(sarasa[key])
}
console.log('Raktus:', arrRaktus)
console.log('Reikšmes:', arrReikšmes)

console.log('.....................................')

console.log('Uzdotis 6.')
// 6.     Masyvo Suma: Turite masyvą, kuriame yra skaičiai. 
// Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.


let arr = [2, 4, 8, 6]
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum)
console.log('.....................................')

console.log('Uzdotis 7.')
// 7.     Didžiausias Skaičius: Turite skaičių masyvą. 
// Naudodami for ciklą, raskite didžiausią skaičių masyve.


let arrMax = [2, 4, 8, 6, 100]
let max = 0;
for(let i = 0; i < arrMax.length; i++){
    if(arrMax[i] > max){
        max = arrMax[i]
    }
    
}
console.log(max)
console.log('.....................................')

console.log('Uzdotis 8.')
// 8.     Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant 
// for in ciklą, grąžina objekto savybių skaičių.


const sarasa2 = {
    name: 'Petras',
    marks: [2, 4, 6],
    phone: '86054584558',
};
function cauntKey(index){
let arrLength = [ ];
for (const key in index){
    arrLength.push(key)
    
    }
    return arrLength;
}

console.log(cauntKey(sarasa2))
console.log('.....................................')

console.log('Uzdotis 9.')
// 9.     Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, 
// kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos 
// vartotojus, kurių amžius yra didesnis nei 18.


const Draugai = [
    {
        name: 'Tom',
        age: 12,
    },
    {
        name: 'Karl',
        age: 30,
    },
    {
        name: 'Devid',
        age: 17,
    },
    {
        name: 'Vicka',
        age: 31,
    },
    {
        name: 'Sasha',
        age: 28,
    },
    {
        name: 'Vlada',
        age: 35,
    },
];
let s = '';
for(const key of Draugai){
    if(key.age > 18){
        s+= `${key.name} `
    }
    
}
console.log(`Amžius kurių yra didesnis nei 18: ${s}`)

console.log('.....................................')

console.log('Uzdotis 10.')
// 10.  Objekto Savybių Keitimas: Turite objektą, 
// kuriame saugomi įvairių žmonių amžiai. Naudodami 
// for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

for(const key in Draugai){
    Draugai[key].age++
 
    }
   
// for(const key of Draugai){
//     key.age++
//     }
console.log(Draugai);