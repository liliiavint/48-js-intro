
function toFixed(n, f = 0) {
    if (f < 0) {
        return 'ERROR';
    }

    const text = '' + n;
    const parts = text.split('.');
    const partsRounds = mathRound(parts)
    const sveikojiDalis = partsRounds[0];
    // const desimtaineDalis = parts[1] || ''; // || jei reiksme falsy ('', 0, false, undefined, null)
    const desimtaineDalis = partsRounds[1] ?? ''; // ?? jei reiksme neegzistuoja

    if (f === 0) {
        return sveikojiDalis;
    }

    return sveikojiDalis + '.' + (desimtaineDalis + '0'.repeat(f)).slice(0, f);
}
function mathRound(n){
    let arr = n[1]?.split('') || [];
    let arrIndex = parseFloat(arr.at(-1));
    if(arrIndex >= 5){
        return [n[0], (parseFloat(n[1].slice(0, -1))+1).toString()]
    }else{
        return n;
    }

}








/*function toFixed2(n, f = 0){
const desimtaineDalis = n > 0 ? n % 1 : -n % 1;
const sveikojiDalis = n - desimtaineDalis;
//console.log(n, ':', sveikojiDalis );

let result = ' ';
if (f === 0){
   return result ;
}
if(f > 0){
    result += ('' + desimtaineDalis).slice(1);
}
return result;
}*/
console.log(toFixed(30.2, 0), '-->', '3');
console.log(toFixed(-3, 0), '-->', '-3');
console.log(toFixed(3.14, 0), '-->', '3');
console.log(toFixed(-3.14, 0), '-->', '-3');
console.log(toFixed(3.11, 1), '-->', '3.1');
console.log(toFixed(-3.12, 1), '-->', '-3.1');
console.log(toFixed(3.14, 5), '-->', '3.14000');
console.log(toFixed(-3.14, 5), '-->', '-3.14000');
console.log(toFixed(3.1412, 3), '-->', '3.141');
console.log(toFixed(-3.1412, 3), '-->', '-3.141');
console.log(toFixed(3.14, 2), '-->', '3.14');
console.log(toFixed(-3.14, 2), '-->', '-3.14');
console.log(toFixed(3.14159, 5), '-->', '3.14159');
console.log(toFixed(-3.14159, 5), '-->', '-3.14159');
console.log(toFixed(3.14, 4), '-->', '3.1400');
console.log(toFixed(-3.14, 4), '-->', '-3.1400');
console.log(toFixed(3.1412, 0), '-->', '3');
console.log(toFixed(-3.1412, 0), '-->', '-3');
console.log(toFixed(3.1, 2), '-->', '3.10');
console.log(toFixed(-3.1, 2), '-->', '-3.10');
console.log(toFixed(3, 3), '-->', '3.000');
console.log(toFixed(-3, 3), '-->', '-3.000');

console.log(toFixed(6.2568963, 4), '-->', '6.2569');

console.log(toFixed(3.14159, 3), '-->', '3.142');
console.log(toFixed(-3.14159, 3), '-->', '-3.142');

