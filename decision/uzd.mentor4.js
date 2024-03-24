/*Masyvo Elementų Filtravimas: Sukurkite funkciją, 
kuri naudojant for ciklą iš masyvo išrenka ir grąžina
naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.*/

function elementuFiltravimas(masyvo){
    const salyga = (n)=> typeof n == 'string';
    let newMasyvo = [ ];
    for(let a = 0; a < masyvo.length; a++){
        if(salyga(masyvo[a])){
        newMasyvo.push(masyvo[a])
        }
    }

    return newMasyvo;
}
console.log('...................1')
console.log(elementuFiltravimas([true, 'list', 33, false, 'Labas!', NaN, [9, 8, 7]]))

/*2.     Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis. 
Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.*/

const arr = [true, 'list', 33, false, 'Labas!', 44, NaN, {a: [9, 8, 7], b: [6, 5, 4]}];
let newMasyvo = [];
let typeMasyvo = [];

for (let a = 0; a < arr.length; a++) {
    typeMasyvo.push(typeof arr[a]);
}
for (let b = 0; b < typeMasyvo.length; b++) {
    let g = typeMasyvo[b];
    if (typeMasyvo.indexOf(g) == b) { 
        newMasyvo.push(g);
  }
}
console.log('...................2')
console.log(newMasyvo);

/*3.     Objekto Gylis: Parašykite funkciją, kuri naudodama 
for in ciklą ir rekursiją, grąžintų objekto gylį 
(kiek giliausiai objektas turi įdėtinius objektus).*/

function rekursia(obj, level = 0) {
    let maxLevel = level; 
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const childLevel = rekursia(obj[key], level + 1);
            if (childLevel > maxLevel) {
                maxLevel = childLevel; 
            }
        }
    }
    return maxLevel;
}
const obj = {
    1: {
      2: {
        3: {
            4:{
                5:{}
            }, 
            4.1:{

            },
            4.2:{

            }
        }
      },
      3.1: {}
    },
    2.1: {}
  };
  console.log('...................3')
  console.log(rekursia(obj));

/*4. Masyvo Atvirkštinis: Turite skaičių masyvą. 
Naudodami for ciklą, sukurkite naują masyvą, 
kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.*/

let array = [ 22, 333, 2, 66, 8 , 100, 555, 9999, 7777777]
let newarray = [ ]
for(let i = array.length - 1; i > 0; i--){
    newarray.push(array[i])
} 

console.log('...................4')
console.log(newarray);

/*5.     Raktų Filtravimas Objekte: Turite objektą su daugybe 
savybių. Sukurkite funkciją, kuri naudojant for in ciklą, grąžina 
naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą.*/

function filtravimasObjekte(array) {
    let types = [];

    for (const obj of array) {
        for (const key in obj) {
            const type = typeof obj[key];
           if(type === 'string'){
            types.push(`${key}:${obj[key]}`)
           }  
         }
    }
    return types;
}

const sarasa = [
    {
        name: 'Tomas',
        age: 25,
        city: 'Kaunas',
        ismarried: true, 
        vaikai: 10
    },
    {
        country: 'Lietuva',
        city: 'Vilnus',
        isnato: true,
        zmoniu: 2.8
    }
];
console.log('...................5')
console.log(filtravimasObjekte(sarasa));

/*6.     Suminė Vertė Objekte: Turite objektą, 
kurio savybės yra skaičiai. Naudodami for in ciklą, 
apskaičiuokite visų objekto savybių sumą.*/

const vaisiai = 
    {
        obuoliai: 25,
        kriaušiniai: 20,
        brazke: 12,
        bananai: 10
    }

let count = 0
for(const key in vaisiai){
    
    count += vaisiai[key]
}
console.log('...................6')
console.log(count)

/*7.     Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais. 
Naudodami for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų.*/

const arrejus = [true, 'list', 33, false, 'Labas!', 
44, NaN, {a: [9, 8, 7], b: [6, 5, 4]}]
    let result = []; 
    for(let i = 0; i<arrejus.length; i++){ 
        let ch = typeof arrejus[i]
            if(!result[ch]){ 
               result[ch] =1; 
            }else{ 
               result[ch]+=1 
            } 
    } 
    

console.log('...................7')
console.log(result)

/*8. Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą 
(raktai ir reikšmės) konvertuotų į masyvą, kur kiekvienas elementas
 būtų [raktas, reikšmė] pora.*/

function konversija(object){
    let arr = [ ];
    for(const key in object){
        arr.push([key, object[key]])
    }
    return arr
}

 const darzoves = 
    {
        bulve: 25,
        morko: 20,
        svogunai: 12,
        burokeliai: 10
    }
    console.log('...................8')
    console.log(konversija(darzoves))

/*9. Dinaminis Objekto Sudarymas: Naudodami for 
ciklą, sukurti objektą, kurio raktai yra skaičiai nuo 1 iki n, 
o reikšmės - tie skaičiai pakelti kvadratu.*/

        const objektas = {};
        let n = 7
        for (let i = 1; i <= n; i++) {
            objektas[i] = i*i;
        }

        console.log('...................9')
        console.log(objektas);

/*10.  Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos 
įvairios vartotojų savybės (pvz., vardas, amžius, miestas). Sukurkite 
funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes,
jeigu jos tenkina nurodytą sąlygą (pvz., jeigu vartotojo amžius yra mažesnis 
nei 18, pridėkite savybę pilnametis: false).*/

function pakeistiSavybes(objektas) {
    for (let key of objektas) {
            if (key.amzius > 18) {
                key['pilnametis'] = true;
                key['studentas'] = true;
            }else{
                key['pilnametis'] = false;
                key['studentas'] = false;
            } 
            if (key.amzius < 15){
                key['vaikas'] = true
            }else{
                key['vaikas'] = false
            }              
        }
    
    return objektas;
}


const people =[
    
   {
    vardas: 'Darius',
    amzius: 50,
    miestas: 'Vilnius'
   },
   {
    vardas: 'Petras',
    amzius: 20,
    miestas: 'Kaunas'
   },
   {
    vardas: 'Ona',
    amzius: 10,
    miestas: 'Klaipeda'
   },
   
]
console.log(pakeistiSavybes(people));

    
