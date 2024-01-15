const a = 'Labas';
console.log(a, typeof a);

console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[2222222]);
console.log(a[-1]);
console.log(a[2.5]);

console.log('-----------------');

console.log(a.at(0), a[0]);
console.log(a.at(4), a[4]);
console.log(a.at(-1), a[a.length - 1]);
console.log(a.at(-2), a[a.length - 2]);
console.log(a.at(-3), a[a.length - 3]);
console.log(a.at(-4), a[a.length - 4]);
console.log(a.at(-5), a[a.length - 5]);

console.log('-----------------');

console.log('Labas'.includes('a'));
console.log('Labas'.includes('d'));
console.log('Labas'.includes('aba'));
console.log('Labas'.includes('Aba'));

console.log('Labas'.indexOf('L'));
console.log('Labas'.indexOf('a'));
console.log('Labas'.indexOf('b'));
console.log('Labas'.indexOf('a', 2));
console.log('Labas'.indexOf('s'));
console.log('Labas'.indexOf('aba'));
console.log('Labas'.indexOf('x'));
console.log('Labas'.indexOf('xadsfd'));

console.log('-----------------');

console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('Laba'));
console.log('Labas'.startsWith('a'));

console.log('Labas'.endsWith('a'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('bas'));

console.log('-----------------');

console.log('Labas'.charAt(-5));
console.log('Labas'.at(-5));

console.log('Labas'.charAt(1));
console.log('Labas'.at(1));

console.log('Labas'.charAt(5415));
console.log('Labas'.at(5415));

console.log('-----------------');

console.log('Labas'.charCodeAt(0));
console.log('Labas'.charCodeAt(1));
console.log('Labas'.charCodeAt(2));
console.log('Labas'.charCodeAt(3));
console.log('Labas'.charCodeAt(4));

console.log(String.fromCharCode(76));
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(98));
console.log(String.fromCharCode(99));
console.log(String.fromCharCode(100));
console.log(String.fromCharCode(101));
console.log(String.fromCharCode(115));

console.log('-----------------');

console.log('Labas'.repeat(0) + '.');
console.log('Labas'.repeat(1) + '.');
console.log('Labas'.repeat(2) + '.');
console.log('Labas '.repeat(5) + '.');

console.log('-----------------');

console.log('Kopustas'.slice());
console.log('Kopustas'.slice(0));
console.log('Kopustas'.slice(0, 1));
console.log('Kopustas'.slice(2, 5));
console.log('Kopustas'.slice(-3));
console.log('Kopustas'.slice(-5));
console.log('Kopustas'.slice(-5, -2));
console.log('Labas '.repeat(5).slice(0, -1) + '.');

console.log('--------------6');

console.log('Kopustas'.replace('p', 'k'));
console.log('Vasara'.replace('a', '-'));
const vasara = 'Vasara'
    .replace('a', '-')
    .replace('a', '-')
    .replace('a', '-');
console.log(vasara, '=====');

const kisk = 'Bepasikiskekopusteliaudamasis'
    .replaceAll('i', '-');
console.log(kisk);

console.log('-----------------');

const sakinys = 'Siandien yra labai grazi Nauju metu diena!';
const dalys = sakinys.split(' ');
console.log(dalys);
console.log('Zodziu sakinyje:', dalys.length);

const sakinys2 = 'Labas rytas!';
const dalys2 = sakinys2.split(' ');
console.log(dalys2);
console.log('Zodziu sakinyje:', dalys2.length);

const sakinys3 = 'Labas rytas, Lietuva!';
const dalys3 = sakinys3.split(' ');
console.log(dalys3);
console.log('Zodziu sakinyje:', dalys3.length);

const raides = 'Raudonas pomidoras'.split('');
console.log(raides);

const raides2 = 'vvvvasara'.split('vasa');
console.log(raides2);

console.log('-----------------');

console.log('PoMiDoRaS'.toLowerCase());
console.log('PoMiDoRaS'.toUpperCase());

const pomBad = 'PoMiDoRaS';

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
    // return text.toLowerCase()
    //     .replace(text[0], text[0].toUpperCase());
}

const pomGood = capitalize(pomBad);
console.log(pomBad, '-->', pomGood);

console.log('-----------------');

console.log(`"${'labas'.trim()}"`);
console.log(`"${'labas'.trimStart()}"`);
console.log(`"${'labas'.trimEnd()}"`);

console.log(`"${'rikiki    '.trim()}"`);
console.log(`"${'rikiki    '.trimStart()}"`);
console.log(`"${'rikiki    '.trimEnd()}"`);

console.log(`"${'    rokoko'.trim()}"`);
console.log(`"${'    rokoko'.trimStart()}"`);
console.log(`"${'    rokoko'.trimEnd()}"`);

console.log(`"${'    pomidoras    '.trim()}"`);
console.log(`"${'    pomidoras    '.trimStart()}"`);
console.log(`"${'    pomidoras    '.trimEnd()}"`);

console.log(`"${'labas    rytas'.trim()}"`);
console.log(`"${'labas    rytas'.trimStart()}"`);
console.log(`"${'labas    rytas'.trimEnd()}"`);

