/*
NUMBERS

- sveikieji / desimtainiai
    sveikieji: 1, 2, 5, -7
    desimtainiai: 3.14, -2.727
- teigiami / neigiami
    teigiami: 1, 2.5
    neigiami: -1, -2.5
- normalus / "ne normalus"
    normalus: visi virsuje
    "ne normalus": NaN (not-a-number), Infinity, -Infinity

KINTAMUJU INICIAVIMAS:
- const (default)
- let (kai reiksme tures keistis)
- var (NIEKADA, nebent zinai ka darai ir megsti nuotykius 👀)

MATEMATINIAI PRISKIRIMO OPERATORIAI:
a = a + 5;      ->      a += 5;
a = a - 5;      ->      a -= 5;
a = a * 5;      ->      a *= 5;
a = a / 5;      ->      a /= 5;
a = a % 5;      ->      a %= 5;

MATEMATINIAI OPERATORIAI:
++ (dydinti 1 vienetu)
-- (mazinti 1 vienetu)

*/

const a = 5;
console.log('a');
console.log(a);

const b = 3.14;
console.log(b);

const c = -77;
console.log(c);

const d = -2.727;
console.log(d);

console.log(0);
console.log(-0);

const e = Infinity;
const f = -Infinity;
console.log(e, f);

console.log('labas', 123, a, b, 'rytas');

const gg = 777;
console.log(gg);


const n1 = 8;
const n2 = 6;
const suma = n1 + n2;

console.log(n1, '+', n2, '=', suma);

console.clear();

const n3 = 7;
const n4 = 5;

const k1 = n3 + n4;
console.log(k1);

const k2 = n3 - n4;
console.log(k2);

const k3 = n3 * n4;
console.log(k3);

const k4 = n3 / n4;
console.log(k4);

const k5 = n4 / n3;
console.log(k5);

console.log(0.1 + 0.2);
console.log(0.3 - 0.2);
console.log(0.3 - 0.1);

console.log('% -------');

const k6 = n3 % n4;     // liekana
console.log(k6);

console.log(10 % 3);
console.log(10 % 4);
console.log(10 % 5);
console.log(10 % 6);

console.clear();

let index = 0;
console.log(index);

++index;
console.log(index);

index++;
console.log(index);

++index;
console.log(index);

index++;
console.log(index);

++index;
console.log(index);

index++;
console.log(index);

console.clear();

let i = 0;

console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

console.log('--------------');
let j = 0;

console.log(++j);
console.log(++j);
console.log(++j);
console.log(++j);
console.log(++j);
console.log(++j);

console.log('--------------');
let k = 0;

console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);

console.log('--------------');
let l = 0;

console.log(--l);
console.log(--l);
console.log(--l);
console.log(--l);
console.log(--l);
console.log(--l);