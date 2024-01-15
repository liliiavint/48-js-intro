

/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

const sv = 5;
console.log(sv);

const de2 = 5.5;
console.log(de2);

const c6 = -5.55;

console.log(c6);


/* Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const ss1 = "obuoliu";
console.log(ss1);

const ss2 = 'morcos';
console.log(ss2);

const ss3 = "orange";
console.log(ss3);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

const numbers1 = [2.1, 3.2, 4.5, 5.6, 6.7];
console.log(numbers1);

const numbers2 = [10, -20, 30, -40, 50];
console.log(numbers2);

const numbers3 = [11, 22, 33, 44, 55];
console.log(numbers3);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

const friends = ['Zelenskyj, Nausieda, Tusk, Solc, Triudo']
console.log(friends);

const country = ['UA, "LV", PL, "DE", CA']
console.log(country);

const capitalCity = ['Kyiv, Vilnius, Warsawa, Berlin, Ottawa']
console.log(capitalCity);

/*Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console*/
const num1 = 1;
const num2 = 2;
const sum = num1 + num2;

console.log(sum);

//Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas


const ff1 = 'viskis,' + ' ' + 'konjakas,' +  ' ' + 'alus,' + ' ' +'brendis.';
const drinks = ` Mano mėgstamiausi gėrimai: ${ff1} `;
console.log(drinks);

//Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, 
//pagal pateiktą logiką 1-2+3-4+5

const numbers = [60, 50, 40, 30, 20, 10];

f = 0;

f += numbers[1];
f -= numbers[2];
f += numbers[3];
f -= numbers[4];
f += numbers[5];

console.log(f);

/*Sujungti sąrašų vertes, kurių tipas yra tekstai, 
nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/

let a = ['Zelenskyj.', 'Solc, ', 'Tusk, ', 'Merkel, ', 'Vintiuk,' + ' '], 
    a2 = a[4], i = 4;

    a2 = a [i--]
    a2 += a [i--]
    a2 += a [i--]
    a2 += a [i--]
    a2 += a [i--]
    
    console.log('Presidents:', a2);

console.log('................')


const list = ['gydytoja, ', 'elektrykas, ', 'vireja, ', 'QA engineer'];

let list2 = list.reverse();

console.log("Profesija:", list2)


/* Priklausomai nuo sąlygos, susikurkite 2 skirtingų 
reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau),
tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, 
išvesti sakinį “Bandykite kitą kartą.”.*/

const x = 5;
const y = 6;


if (y > x) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

//Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis
let a1 = 4, b1 = 2;
if (a1 > b1){
console.log('4 daugiau 2');
}
//kuris mazesnis;
if (b1 < a1){
console.log("2 maziau 4");
}
//ar jie lygūs;
if (a1 == b1){
console.log(false);
}
//ar jie nelygūs;
if (a1!=b1){
console.log(true);
}
// kuris didesnis arba lygus
let k2 = 5; 
if (k2 >= 5){
    console.log(true);
}
//kuris mažesnis arba lygus
if (k2 <= 5){
    console.log(true);

}
/*Išvesti teksto tipo kintamųjų ilgius*/
let txt = 'slaptazodis';
   ilg = txt.length

/*Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis*/
if (ilg > 10){
    console.log('Zodyje "slaptazodis" yra daugiau raidziu nei 10');
}
//kuris mažesnis
if (ilg < 17){
    console.log('There are less letters in the word password than 17')
}

//ar jie lygūs

if (ilg == 13){
    console.log('Zodyje "slaptazodis" yra', ilg + ' raidziu.');
}
//ar jie nelygūs
if (ilg != 14){
    console.log('Zodyje "slaptazodis" ne turi keturiolika raidziu.');
}
console.clear();
/*Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0*/

function summa(x, y){
    let sum = 0;
    for(a = x; a < y; a++){
    sum += a;
    }
return sum
}
console.log(summa(0, 0));
console.log(summa(0, 4));
console.log(summa(0, 100));
console.log(summa(574, 815));
console.log(summa(-50, 50));
console.log(summa(-70, 30));

/*panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”*/
   
let text2 = 'abcdef';
let tex2 = ''
    
for(i = text2.length - 1; i >= 0; i--){
    tex2 += text2[i];
 
}
console.log(`"abcdef" -> "${tex2}"`);



/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.*/

function interval(a, b, c) {
    let count = 0;

    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            count++;
        }
    }

    return `Skaičių intervale tarp ${a} ir ${b}, besidalijančių be liekanos iš ${c} yra ${count} vienetai.`;
}

console.log(interval(0, 11, 3));
console.log(interval(0, 11, 5));
console.log(interval(0, 11, 7));
console.log('.............................')
console.log(interval(8, 31, 3));
console.log(interval(8, 31, 5));
console.log(interval(8, 31, 10));
console.log('.............................')
console.log(interval(-18, 18, 3));
console.log(interval(-18, 18, 5));
console.log(interval(-18, 18, 10));


console.log('.............................')



console.log('Funkcija pavadinimu “tusciaFunkcija”:\n\gražina boolean tipo reikšmę “false”.');


function tusciaFunkcija(){
    return false
}
console.log(tusciaFunkcija());


/*console.log('Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą');*/

function daugyba (x, y){
    return x * y
}
console.log( daugyba(5, 3 ));
console.log( daugyba(8, 9 ));
console.log( daugyba(10, 11));



function skaitmenuKiekisSkaiciuje2(number){
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    let tex3 = ''+ number;
    count3 = tex3.length
   for(i > tex3[0]; i<= tex3.length; ++i){
    
    return count3
   } 
   
}

console.log( skaitmenuKiekisSkaiciuje2(5));
console.log( skaitmenuKiekisSkaiciuje2(781));
console.log( skaitmenuKiekisSkaiciuje2(37060123456));
console.log( skaitmenuKiekisSkaiciuje2(true));
console.log( skaitmenuKiekisSkaiciuje2('asd'));
console.log( skaitmenuKiekisSkaiciuje2(NaN));

console.log('.........................');
function skaitmenuKiekisSkaiciuje(number){
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    const numberAsString = '' + number;
    let size = numberAsString.length;

    // tikriname ar yra minusas?
    if (number < 0) {
        size--;
    }

    // tikriname ar skaicius yra desimtainis?
    if (number % 1 !== 0) {
        size--;
    }

    return size;
}

console.log(skaitmenuKiekisSkaiciuje(-3));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN, 'Pateikta netinkamo tipo reikšmė.'));




//Funkcija pavadinimu “didziausiasSkaiciusSarase”:
console.log('Funkcija pavadinimu “didziausiasSkaiciusSarase” pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias' +
'gražina didžiausią surastą skaičių');

function didziausiasSkaiciusSarase(list){
if (!Array.isArray(list)){ 
    return 'Pateiktas sąrašas negali būti tuščias.';
}

    else if (list.length === 0) {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    for (let i = 0; i < list.length; i++) {
        didziausias = Math.max();
}   
}

console.log( didziausiasSkaiciusSarase([ 1 ]));
console.log( didziausiasSkaiciusSarase([ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase([ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase('pomidoras'));
console.log( didziausiasSkaiciusSarase([]));

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];

// Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}
function arrayMadness(a, b ) {
    const triguba = a.map(n => n ** 3);
    const dviguba = b.map(n => n ** 2);
    const sumArray = (elem, sum = 0) => sum += elem;
    if (sumArray(dviguba) > sumArray(triguba)){
    return true;
    }else{
        return false;
    }

}
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]));
/* let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`);


let price = 100;
let shippingCost = price > 50 ? 0 : 5;
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0S*/

 
    


   
   

   /* let confirm = "Are you ready?";
    console.log(confirm);
    if (confirm) {
       console.log("User ready!");
    }
    
    let name1 = 'Alice';
    function showName1() {
         console.log(name1);
    }
    showName1();
/*if(list1Arraylength > 10){
        console.log(' List1 turiejo daugau nei 2 kintamieji.');
    } else if (list1Arraylength < 5){
        console.log(' List1 turiejo maziau nei 7 kintamieji.');
    } else if (list1Arraylength == 6){
        console.log(' List1 turiejo sesi kintamieji.');
    } else if (list1Arraylength != 8){
        console.log(list1,'nėra lygus 8 kintamieji.');
    } else if (list1Arraylength <= 5){
    console.log(' List1 turiejo maziau nei 7 kintamieji.');
    } else if (list1Arraylength == 6){
    console.log(' List1 turiejo sesi kintamieji.');
}*/
//Tarpusavyje palyginti teksto tipo kintamųjų ilgius:*/
/*let ron = 'ronnabyte',
    yot = 'Yottabyte';

if (ron > yot){
    console.log(`Taip, ${ron} yra daugiau uz ${yot}`);
}else{
    console.log(`Ne ${ron} nera daugiau uz ${yot}`);
}
*/

/*let act1 = 'Tom Henks',
    act2 = 'Tom Kruzzzzzz';
 
if(act1.length > act2.length){
    console.log(act1);
} else { 
    console.log(act2);
}

function numberLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: duok skaiciu';
    }
    if (isNaN(number)) {
        return 'ERROR: duok normalu skaiciu, o ne NaN';
    }
    if (number === Infinity || number === -Infinity) {
        return 'ERROR: duok normalu skaiciu, o ne begalybe';
    }

    const numberAsString = '' + number;
    let size = numberAsString.length;

    // tikriname ar yra minusas?
    if (number < 0) {
        size--;
    }

    // tikriname ar skaicius yra desimtainis?
    if (number % 1 !== 0) {
        size--;
    }

    return size;
}

console.log(numberLength(true));
console.log(numberLength(false));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
console.log(numberLength(undefined));
console.log(numberLength());
console.log(numberLength([]));
console.log(numberLength(numberLength));
console.log('--------------------------------');
console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);
console.log(numberLength(3.14), '->', 3);
console.log(numberLength(2.727), '->', 4);
console.log(numberLength(-3.14), '->', 3);



const marks9 = [10, 2, 0, -6, 8, -3.14, 4, 2.727, 6, 11, 200, 1000, 10.99999, 10.00001];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Truksta duomenu (pazymiu)';
    }

    let count = 0;
    let sum = 0;
    
    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];
        if (mark % 1 == 0 && mark >= 1 && mark <=10 ){
      

    
}
const average9 = marksAverage(marks9);
console.log(average9, '-->', 6);


for (let i = 10; i < 33; i++){

console.log(i, (i - (i % 10))/10);
}

for (let i = 0; i < 13; i += 2){
    console.log('step', i);
    }
    const hi = 'labukas';
for (let i = 0; i < 5; i++){
console.log(hi)
}
const marks = [10, 2, 4, 8, 6];
console.log( marks.length);

for (let i = 0; i < 5; i++){
console.log(marks, i, '->', marks[i]);
}

console.clear();

let count = 0; 
for (s = 0; s < 11; s++){
      if(s % 3 === 0){
        
    count++;
    console.log(count(s));
    }
}
    
/*function count(nuo, iki, daliklis) {
    let kiekis = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            kiekis++;
        }
    }

    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
}

console.log(count(0, 11, 3));
console.log(count(0, 11, 5));
console.log(count(0, 11, 7));

console.log(count(0, 10, 2));
console.log(count(0, 10, 5));
console.log(count(0, 10, 10));*/