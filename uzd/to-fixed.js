
function toFixed(n, f = 0) {
    function partsRounds(n) {
        let arr = n[1]?.split('') || [];
        let arrIndex = parseFloat(arr[f]);
        
        if (arrIndex >= 5) {
            n[1] = (parseFloat(n[1].slice(0, f)) + 1).toString();
        }
        return n;
    }

    if (f < 0) {
        return 'ERROR';
    }

    const text = '' + n;
    const parts = text.split('.');

    const partsDalis = partsRounds(parts);
    // const desimtaineDalis = parts[1] || ''; // || jei reiksme falsy ('', 0, false, undefined, null)
    const desimtaineDalis = partsDalis[1] ?? ''; // ?? jei reiksme neegzistuoja
    const sveikojiDalis = partsDalis[0];


    if (f === 0) {
        return sveikojiDalis;
    }

    return sveikojiDalis + '.' + (desimtaineDalis + '0'.repeat(f)).slice(0, f);
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
console.log(toFixed(3.2, 0), '-->', '3');
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
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(toFixed(6.3468963, 3), '-->', '6.347');
console.log(toFixed(6.2567963, 2), '-->', '6.26');
console.log(toFixed(6.2567963, 1), '-->', '6.3');
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(toFixed(6.2999963, 5), '-->', '6.3');
console.log(toFixed(6.2567963, 4), '-->', '6.2568');
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(toFixed(3.14159, 3), '-->', '3.142');


