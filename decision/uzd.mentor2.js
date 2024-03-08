/*1. Parašykite funkciją, kuri priima vartotojo vardą 
kaip argumentą ir grąžina pasveikinimo žinutę.*/
const greet = (names) =>`Hello, ${names}!`

console.log('1.', greet('Kakė Makė'))

/*2. Sukurkite funkciją, 
kuri priima du skaičius kaip argumentus ir grąžina jų sumą.*/
const suma  = (a, b) => a + b;

console.log('2.', suma(100, 200));

/*3. Parašykite funkciją, kuri priima masyvą kaip argumentą 
ir grąžina visų masyvo elementų sumą.*/
const arrSum = index => index.reduce((x, total) => x + total, 0);

console.log('3.', arrSum([2, 8, 6, 4, 5]))


/*4.  Sukurkite funkciją, kuri priima masyvą skaičių 
ir grąžina didžiausią skaičių masyve.*/
const arrMaxNumber = index => Math.max(...index);

console.log('4.', arrMaxNumber([2, 8, 6, 4, 5]))



/*5. Parašykite funkciją, kuri priima tekstą kaip argumentą
 ir grąžina to teksto ilgį.*/
 const textLength = index => index.replace(/\s/g, '').length;

 console.log('5.', textLength('Pienas baltas'))


/*6. Sukurkite funkciją, 
kuri priima skaičių ir grąžina jo faktorialą.*/
    function factorial(index){
    if (typeof index !== 'number') {
        return 'Invalid input. Please provide a number.';
    }

    if (index < 0) {
        return 'Factorial is not defined for negative numbers.';
    }
    
    let result = 1;
    for (let i = 2; i <= index; i++) {
        result *= i;
    }
    return result;
}

console.log('6.', factorial(8))


/*7. Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, 
kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.*/
function biggestNumber(a, array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > a){
            newArray.push(array[i])
        }
        
    }
    return newArray;
}

console.log('7.', biggestNumber(3, [2, 8, 6, 4, 5]))




/*8. Sukurkite funkciją, kuri priima tekstą kaip argumentą 
ir grąžina jį atvirkštine tvarka.*/
const textReverse = text => text.split('').reverse().join('');

console.log('8.', textReverse('Modesta'))




/*9. . Parašykite funkciją, kuri nustato, 
ar pateiktas tekstas yra palindromas.*/
function textPalindromas(text){
    let textlower = text.toLowerCase()
    let arr =textlower.split('');
    let textlowerAtgal = textlower.split('').reverse();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== textlowerAtgal[i]){
            return `${text} nera palindromas`
        }
    
    }
    return `${text} yra palindromas`
}
console.log('9.', textPalindromas('Potop'))
console.log('9.', textPalindromas('kolobok'))


/*10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, 
jei skaičius yra nelyginis.*/
const evenNumber = n => n % 2 == 0 ? true : false

console.log('10.', evenNumber(4))




/*11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes:
 pakeistiną simbolį ir pakeitimo simbolį. Funkcija grąžina naują 
 tekstą su pakeistais simboliais.
*/
function pakeistiTexta(text, a, b){
    for(let i = 0; i < text.length; i++){
        if(text.includes(a)){
            return text.replaceAll(`${a}`, `${b}` ) 
        }   
    }
}

console.log('11.', pakeistiTexta('Buva dūda Vilniuj. Buva dūda Vilniuj.', 'dūda', 'Duda'))

/*12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus
 laipsniais ir konvertuoja ją į  laipsnius.
*/
const CelsijausToFarenheito = index => index * 1.8 + 32;

console.log('12.', CelsijausToFarenheito(-50) +'° F')

/*13. Parašykite funkciją, 
kuri priima masyvą ir grąžina naują masyvą be dublikatų.
*/
const MasyvaBeDublikatu = array => array.filter((item, index, arr) => arr.indexOf(item) === index);

console.log('13.', MasyvaBeDublikatu([2, 8, 6, 6, 4,  4, 5, 6, 4, 1, 1, 1, 5, 3]))

/*14. Sukurkite funkciją, kuri priima skaičių ir grąžina true, 
jei skaičius yra pirminis, ir false, jei ne.s.
*/
    function PirminisSkaicius(skaicius) {
        let data = [2, 3, 5];
        for (const index of data) {
            if (skaicius % index === 0 && skaicius !== index) {
                return `${skaicius} nera pirminis`;
            }
        }
        return `${skaicius} yra pirminis`;
    }
console.log('14.', PirminisSkaicius(2))
console.log('14.', PirminisSkaicius(3))
console.log('14.', PirminisSkaicius(5))
console.log('14.', PirminisSkaicius(7))
console.log('14.', PirminisSkaicius(13))
console.log('14.', PirminisSkaicius(17))
console.log('14.', PirminisSkaicius(19))
console.log('14.', PirminisSkaicius(23))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
console.log('14.', PirminisSkaicius(4))
console.log('14.', PirminisSkaicius(6))
console.log('14.', PirminisSkaicius(8))
console.log('14.', PirminisSkaicius(10))
console.log('14.', PirminisSkaicius(18))
console.log('14.', PirminisSkaicius(28))
console.log('14.', PirminisSkaicius(44))
 
/*15.  Parašykite funkciją, kuri priima masyvą skaičių ir grąžina 
jį surikiuotą mažėjančia tvarka.*/
const TvarkaMasyv = array => array.sort((a, b) => b - a);

console.log('15.', TvarkaMasyv([1000, 2, 8, 6, 10, 4, 5, 100]))

/*16. Sukurkite funkciją, kuri priima du skaičius kaip pradžios
ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.
*/

    function tarpaSum(a, b){
        let count = 0;
        for(let i = a; i <= b; i++){
            count += i
        }
        return count;
    }
    console.log('16.', tarpaSum(1, 5))

/*17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, 
pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.*/

    function replaceLetter(text){
        let textNumber = [];
                   
        for(let i = 0; i <= text.length; i++){
             textNumber.push (text.charCodeAt(i))
              
        }
        let letterPlus = textNumber.map(n => n + 1);
        let NewText = ' '
        for(let i = 0; i <= letterPlus.length; i++){
            NewText += String.fromCharCode(letterPlus[i]).replace('!', ' ')
            
       }
      return NewText;
    }
    console.log(replaceLetter('Hello World'))


/*18.  Sukurkite funkciją,
 kuri priima gimimo metus ir grąžina asmenio amžių.
*/






/*19.Parašykite funkciją, kuri priima tekstą ir simbolį, 
o grąžina, kiek kartų tas simbolis pasikartoja tekste.
Paskutinė užduotis sunkesnė ir jei pasirodė praeitos užduotys
 per lengvos galite pasipraktikuoti su šita :)*/
 
 const textSymbol = (text, a) => text.split(`${a}`).length - 1;

 console.log('19.', textSymbol('Te//?????55555*****xt', '?'));

 /*20. Parašykite funkciją, kuri priima kelių masyvų sąrašą 
 ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, 
 kurie pasikartoja visuose pradiniuose masyvuose.
Reikalavimai:
Universalumas: funkcija turėtų veikti su bet kokiu masyvu sudarytu 
iš skaičių.Veiksmingumas: stenkitės optimizuoti funkciją taip, kad
ji veiktų kuo efektyviau su dideliais masyvais. Unikalumas: 
grąžinamame masyve neturėtų būti pasikartojančių elementų.*/

//Kartoti elementus atskiruose masyvuose 
//kurie pasikartoja visuose pradiniuose masyvuose.


const KeliuMasyvaBeDublikatusuMap = array => array.map(subArray => subArray.filter((item, index, arr) => arr.indexOf(item) !== index));
// map patikrina, ar kitas elementas yra toks pat, jei taip, tai pažymi, daugiau nei du [2, 2, 5, 6, 1000], [2, 2, 2, 2, 2], [2, 2]
//kaip dirba map su filter map [1!=2 --- istrauk (1); (1, 2) patikrinto su kieta skaicu, (1, 2, 2) patikrinto su kieta skaicu,]
console.log('20.suMap', KeliuMasyvaBeDublikatusuMap([[1, 2, 2, 2, 800, 5, 5, 6, 1000, 6, 1000], [1, 2, 800, 2, 2, 1000, 2, 2, 2], [1, 2, 800, 2, 1000, 2]]));


const KeliuMasyvaBeDublikatu3 = array => array.map(subArray => subArray.filter((item, index, arr) => arr.indexOf(item) !== index)).flat().filter((item, index, arr) => arr.indexOf(item) === index);
console.log('20.tikrainas variantas', KeliuMasyvaBeDublikatu3(([[1, 2, 2, 2, 2, 2], [3, 2, 2], [4, 2, 2], [5, 5, 5, 5, 5]])));
console.log('20.tikrainas variantas', KeliuMasyvaBeDublikatu3([[1, 2, 2, 2, 800, 1000, 100], [3, 64, 4,  58, 77, 5, 55, 55, 4, 4], [5, 6, 6, 9, 100, 9, 7,  7, 100]]));

//Masyve yra pogrupis su pasikartojančiais elementais

const KeliuMasyvaBeDublikatusuMap2 = array => array.map(subArray => subArray.filter((item, index, arr) => arr.indexOf(item) !== index));                                                                                           
console.log('20.su sub array', KeliuMasyvaBeDublikatusuMap2([[1, 2, 2, 2, 800, [3, 800, 3], 1000, 100], [3, 64, 2,  58, [77, 5, [6, 6, 5], 55, 5], 55, 4, 4], [5, 6, 6, 9, 100, 9, [6, 100, 45], 7,  7]]));




const arr2 = [0, 1];

console.log(arr2.filter(n => n !== 1));

/*
let arrabecele = 'abcefghijklmnopqrstuvwxyz';
let BigArrAbecele = 'ABCDEFGHIJKLMNOQPRSTUVWXYZ';
*/