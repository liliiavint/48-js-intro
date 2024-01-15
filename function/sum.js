const s1 = 7+5;
console.log(s1);

const s2 = 77+55;
console.log(s2);

const s3 = 777+555;
console.log(s3);


function add(a, b){
    const suma = a + b;
    console.log(suma);
    return suma;
}

const s4 = add(7, 5);
console.log(s4);

const s5 = add(77, 55);
console.log(s5);

//Prekes kaina 100 euro
// Reikia funkcijos, kuri grazina pilna suformuota su PVM
// kuri bus naudojama ant prtekes etiketes.
// Pvz.:121 Eur

function kainaSuPVM(kainaBePVM) { 
    const PVM = 21;
    const coof = 1 + PVM/100
    const galutineKaina = kainaBePVM * coof;

        return galutineKaina + 'Eur';

}


const kaina1 = 100;
const kainaSuPVM1 = kainaSuPVM(kaina1);
console.log(kainaSuPVM1)

