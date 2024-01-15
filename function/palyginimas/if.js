/*
IF - palyginimas

LOGIKOS SABLONAI:
- if () {}
- if () {} else {}
- if () {} else if () {}
- if () {} else if () {} else {}
- if () {} else if () {} ... else if () {}
- if () {} else if () {} ... else if () {} else {}

PALYGINIMO OPERATORIAI:
- visi: >, <, >=, <=, ==, !=, ===, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=
*/

if (true) {
    console.log('Tik kai TRUE');
}

console.log('------------------------------');

const cartValue = 1000;
const discountTreshold = 500;
const discountPercentage = 10;

const coof = 'coof...';
console.log(coof);

if (cartValue > discountTreshold) {
    const coof = 1 - (discountPercentage / 100);
    console.log('Total to pay:', coof, cartValue * coof);
} else {
    console.log('Total to pay:', cartValue);
}

console.log('--------------------------');

const colors = ['red', 'green', 'blue'];
const selectedColor = 'red';

if (selectedColor == colors[0]) {
    console.log('Pasirinkta: raudona.');
} else if (selectedColor == colors[1]) {
    console.log('Pasirinkta: zalia.');
} else if (selectedColor == colors[2]) {
    console.log('Pasirinkta: melyna.');
} else {
    console.log('Tavo spalvos nera tarp galimu pasirinkimu :(');
}

console.log('--------------------------');

// '' (tuscias stringas) -> false
// 'asd' (ne tuscias stringas) -> true
// 0 (nulis) -> false
// 5 (bet koks kitas skaicius) -> true

const a = '10';
const b = 10;

if (a === b) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('end...');

console.clear();

const day = 3;

if (day === 1) {
    console.log('Pirm');
} else if (day === 2) {
    console.log('Antr');
} else if (day === 3) {
    console.log('Trec');
} else if (day === 4) {
    console.log('Ketr');
} else if (day === 5) {
    console.log('Penkt');
} else if (day === 6) {
    console.log('Sest');
} else if (day === 7) {
    console.log('Sekm');
} else {
    console.log('Tokios savaites dienos nera.');
}

console.clear();

const diena = 2;

if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis');
    } else {
        if (diena === 3) {
            console.log('Treciadienis');
        } else {
            if (diena === 4) {
                console.log('Ketvirtadienis');
            } else {
                if (diena === 5) {
                    console.log('Penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('Sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokios dienos savaiteje nera.');
                        }
                    }
                }
            }
        }
    }
}

console.clear();

const temperatura = 3;
const siltaNuo = 20;
const arLyja = true;

if (temperatura >= siltaNuo && arLyja) {
    console.log('Lauke silta ir lyja');
} else if (temperatura >= siltaNuo && !arLyja) {
    console.log('Lauke silta ir ne lyja');
} else if (temperatura < siltaNuo && arLyja) {
    console.log('Salta ir lyja');
} else if (temperatura < siltaNuo && !arLyja) {
    console.log('Salta ir ne lyja');
} else {
    console.log('Sitos vietos kode turetu buti neimanoma pasiekti.');
}

if (temperatura >= siltaNuo) {
    if (arLyja) {
        console.log('Lauke silta ir lyja');
    } else {
        console.log('Lauke silta ir ne lyja');
    }
}else if (arLyja) {
        console.log('Salta ir lyja');
    } else {
        console.log('Salta ir ne lyja');
    }