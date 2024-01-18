const students = [
    {
        name: 'Jonas',
        marks: [2, 10],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7],
    },
    {
        name: 'Petras',
        marks: [10, 10],
    },
    {
        name: 'Ona',
        marks: [7, 7, 7, 7, 7],
    },
];

function studentWithTheHighestGrade (studentsMarksNames) {

    let studentName = [];
    let studentsMarks = [];
    let topMarks = [];
    let studentsObj = {};

    for (let i = 0; i < studentsMarksNames.length; i++){
        studentsMarks.push(studentsMarksNames[i].marks)
    }

    for (let i = 0; i < studentsMarks.length; i++){
        let min = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            if(studentsMarks[i][j] > min) min = studentsMarks[i][j];
                topMarks.push(min)
    }

    for (let i = 0; i < studentsMarksNames.length; i++){
        studentName.push(studentsMarksNames[i].name)
    }

    for (let i = 0; i < studentsMarksNames.length; i++){
        studentsObj[studentName[i]] = [topMarks[i]];
    }
    const student = Object.keys(studentsObj)
        .sort((a, b) => studentsObj[a] - studentsObj[b]);

    return student[student.length -1];
}

console.log(studentWithTheHighestGrade(students)); 

  let text = 'abracadabra';
  

  let arr = [];
  
 for( let i = 0; i < text.length; i++){
  let dot = text.charCodeAt(i);
  let d = text[i]
    if (dot > 1) {
     arr[d]++;
    } else {
        dot = 1;
        arr[d]+=1
       
    }
}
    
    console.log(arr, '........')
   
    

 // count++// lichyt kilkist 11
  //   arr+=1 // dobavliaje odynyc 111111111111
  
 // count++// lichyt kilkist 11
  //   arr+=1 // dobavliaje odynyc 111111111111
  function removeDup(str) {
    let arOut = [];
    for (let i=0; i < str.length; i++) {
      let c = str.charAt(i);
      if (c === '') continue;
      if (str.indexOf(c, i+1) === -1) {
        arOut.push(c);
      }
      else {
        var rx = new RegExp(c, "g");
        str = str.replace(rx, '_');
      }
    }
    return arOut.join('');
  }
  console.log(removeDup('abracadabra'), '=======')

  function removeDuplicateCharacters(string){
    return string
       .split('')
       .filter(function(item, pos, self) {
       return self.indexOf(item) == pos;
       });
     
   }
   console.log(removeDuplicateCharacters('abracadabra', '======='));
   function removeDuplicates(str) {
    var returnObject = {
        unique : "",
        duplicates : 0
    };

    for (var i = 0; i < str.length; i++){
        if (returnObject.unique.indexOf(str[i]) < 0) {
            returnObject.unique += str[i];
        } else {
            returnObject.duplicates++;
        }
    }

    

    return returnObject;
}console.log(removeDuplicateCharacters('abracadabra'), '+++++')




//
//const enabc = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z'];
//console.log(changeLetter('Jędrzej Błądziński'));

//'ą'const polabc = ['ą','ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
//cconst sentence = 'The quick brown fox jumps over the lazy dog.';


//const sentence = 'Jędrzej Błądziński';

   
  
   

   /*function openOrSenior(data){
    let x = index;
    let data2 = [[x], [y]];
         
    if(x > 55 && y >7){
      return "Senior";
      } else if(x < 55 && y > -2){
        return "Open";
      }
    } 
    console.log(openOrSenior());*/
    const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
    const isHaystack = (element) => element === 'needle' ;
    function findNeedle(haystack_1) {
    // TODO
        console.log( `found the needle at position ${(haystack_1.indexOf(isHaystack))}`);
      }
      
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];

function abbr(str) {
    return str[0];
}

const abbr2 = str => str[0];

const namesAbbr = names.map(abbr);
const namesAbbr2 = names.map(abbr2);
const namesAbbr3 = names.map(function (str) {
    return str[0];
});
const namesAbbr4 = names.map(s => s[0]);

console.log(names);
console.log(namesAbbr);
console.log(namesAbbr2);
console.log(namesAbbr3);
console.log(namesAbbr4);

console.log('//////////////////////////////////////////');
const numbers = [1, 2, 3, 4, 5, 6, 7];
const bas = numbers.filter((n) => n % 2 === 0)
console.log(bas);

console.log('///////////////////////////////////////////////');
const  addLength = s1 => s1.split(' ').length;
const  addLength2 = s1 => s1.split(' ').map(t => t.length);
const  addLength3 = s1 => s1.split(' ').map(t => t.length).join('');
const  addLength4 = s1 => s1.split(' ').join('.')
const  addLength5 = s1 => s1.split(' ').join('').length;

console.log(addLength('apple ban'));
console.log(addLength2('apple ban'));
console.log(addLength3('apple ban'));
console.log(addLength4('apple ban'));
console.log(addLength5('apple ban'));
console.log('==========================================');

const array1 = [NaN];

const isLargeNumber = (element) => element == true;

const asa = array1.filter(isLargeNumber).length;

console.log (asa);


console.log('==========================================');
  





    function addLengthmm(str) {
        let result = []; 
      for(let i = 0; i< str.length; i++){ 
        let ch = str.charAt(i)
        if(!result[ch]){ 
          result[ch] =1; 
        } 
        else{ 
          result[ch]+=1 
        } 
    
      } 
      //start-here
      return result;
         }
         console.log(addLengthmm('GeeksforGeeks'));      

         function kiekraidaizodzio(str, char) {
          let count = 0;
          for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
              count++;
            }
          }
          return count;
        }
        console.log (kiekraidaizodzio('GeeksforGeeks', 'G'))

        const arr2 = [
          'geeks', 2, 'geeks', 2, 'Javascript', 4,
          'Javascript', 5, 'for', 6, 'Javascript', 1,
          'for', 5, 7, 8, 'for'
      ];
       
      const kiekzodzioarray = (value, index) => {
          return value.filter((x) => x == index).length;
      };
       
      console.log(kiekzodzioarray(arr, 'for'));

      



          const abbrevName = (name => name.toUpperCase().split(' ').map(n => n[0]).join('.'));

    // code away
    console.log(abbrevName("PjIzNqNlXoXhV aoAHMYzoDTbFI"), '++++++++++++');




         
       
      
const orderedCount22 = function (text) {
 
let i = 0;
count = 0
sep = text.split(text [i]).length - 1;
das = [text[i], sep]
return [[text[i], sep], [text[3], sep]];
}
function removeEveryOther(arr){
  let i = 0
  count = 0;
  for(let i = 0; i < arr.length; i++);
   count += arr[i] % 2 == 0;
   return count
}




  console.log('==========================================');
  function warnTheSheep(queue) {
    for(let i = queue.length; i > 0; i--){
      if(queue [i] != sheep){
        return queue [i]
      }
    }
    }