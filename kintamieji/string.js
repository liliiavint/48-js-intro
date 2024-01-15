/*
STRING - tekstas

Iniciavimo kabutes:
- viengubos (')
- dvygubos (")
- backtick (`)
*/

console.log('labas');

const a = 'labas';
console.log(a);

const b = 'labas';
console.log(b);

const c = "labas";
console.log(c);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

// Dvyguba (") kabute.
const kabutes2 = 'Dvyguba (") kabute.';
console.log(kabutes2);

const name = 'Chuck';
const surname = 'Norris';

const fullname = name + ' ' + surname;
console.log(fullname);

// Vienguba (') ir dvyguba (") kabute.
const kabutes12 = "Vienguba (') ir" + ' dvyguba (") kabute.';
console.log(kabutes12);

const kabutes112 = 'Vienguba (\') ir dvyguba (") kabute.';
console.log(kabutes112);

const kabutes212 = "Vienguba (') ir dvyguba (\") kabute.";
console.log(kabutes212);

// Labas
// rytas,
// Lietuva!

const lrl1 = 'Labas rytas, Lietuva!';
console.log(lrl1);

// \r - return
// \n - new line
// \t - tab
const lrl2 = 'Labas\r\
rytas,\r\
Lietuva!';
console.log(lrl2);

console.log('Kopustas\rtau!');
console.log('Kopustas\\rtau!');
console.log('Labas\\rytas');

console.clear();
/*
<header>
    <img src="">
    <nav>
        <a> href=""</a>
        <a> href=""</a>
        <a> href=""</a>
    </nav>
</header>
*/

const html = '<header>\n\
\t<img src="">\n\
\t<nav>\n\
\t\t<a> href=""</a>\n\
\t\t<a> href=""</a>\n\
\t\t<a> href=""</a>\n\
\t</nav>\n\
</header>';

console.log(html);
console.clear();

const b1 = `Labas rytas, Lietuva!`;
console.log(b1);

const b12 = `Vienguba (') ir dvyguba (") kabute.`;
console.log(b12);

// Backtick (`) kabute.
const b3 = `Backtick (\`) kabute.`;
console.log(b3);

const username = 'Batman';

// Bruce is not a Batman, or is he!? 👀
const batman = 'Bruce is not a ' + username + ', or is he!? 👀';
const batman2 = `Bruce is not a ${username}, or is he!? 👀`;
console.log(batman);
console.log(batman2);

const c1 = 'red';
const c2 = 'green';
const c3 = 'blue';
const c4 = 'white';
const c5 = 'black';

// My favorite color: 1, 2, 3, 4, 5.
const colors = 'My favorite color: ' + c1 + ', ' + c2 + ', ' + c3 + ', ' + c4 + ', ' + c5 + '.';
console.log(colors);
console.log(colors);

const colors2 = `My favorite color: ${c1}, ${c2}, ${c3}, ${c4}, ${c5}.`;
console.log(colors2);

const x = 777;
console.log('${x}');
console.log("${x}");
console.log(`${x}`);