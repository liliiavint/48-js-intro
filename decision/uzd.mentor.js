/*
1. Sukurti du kintamuosius. Jiems priskirti savo mylimo 
aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
Atspausdinti trumpesnį stringą.
*/
const k = 'Tom Cruise';
const h = 'Tom Henks';
const lengthActor = (a, b) => a.length-1 < b.length-1 ? a : b;

console.log('1.', lengthActor(k, h));

/*
2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus 
ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų 
jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/
let varda = 'Liliia';
let pavarde = "Vintiuk";
let biozdik = 1980;
let date = 2024;
console.log(`2. "Aš esu ${varda} ${pavarde}. Man yra ${date - biozdik} metai."`);

/*
3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę 
kaip stringus. Sukurti trečią kintamąjį 
ir jam priskirti stringą, sudarytą iš 
trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

const akt = 'Zerar';
const act = 'Depardie' ;
let ter = 'rardie';
console.log(`3. '${akt.slice(0, 2) + ter.slice(0, 3)} ${act.slice(0, 5) + ter.slice(3, 6)}.'`)

/*
4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.
*/

let entext = 'Once upon a time in hollywood';

let newentext = entext.replaceAll('O', '*')
                      .replaceAll('o', '*');
console.log('4.', newentext);


/*
5. Sukurkite keturis kintamuosius kuriems sugeneruokite 
atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra
nulių, vienetų ir dvejetų. 
*/


/*
6.Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. 
Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite 
atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

/*
7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite
 atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
*/

/*
8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą 
ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

/*
9. Parašyti kodą, kuris generuotų atsitiktinį stringą iš 
lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/
