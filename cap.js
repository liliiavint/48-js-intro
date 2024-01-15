//function capitalize(text) {
    //return text[0].toUpperCase() + text.slice(1).toLowerCase();
    
function capitalize(text) {
   
    return text    //Labas
    .toLowerCase() //labas
    .replace(text[0], text[0].toUpperCase()); // text[0] = L; replace(L, L)
}
console.log (capitalize2('labas'));
console.log (capitalize('Labas'));

function capitalize2(text) {
   const lower = text.toLowerCase(); // garantuote mazosine kentamis
   return lower.replace(lower[0], lower[0].toUpperCase()); // text[0] = L; replace(L, L)
}
console.log (capitalize2('labas'));
console.log (capitalize('Labas'));

/*function solution(str){
    let arr=[];
    let count = 0;
    let ufo = str.length;
 let newStr = str.split('')
 for(let i=0; i<newStr.length; i+=2){
  
  if ( ufo % 2 !== 0){
    arr.push(newStr[i]+newStr[i+1]);
    count++
   
 } else if ( ufo  % 2 == 0){
  arr.push(newStr[i]+newStr[i+1]);
  count++
 
}
}
    
return arr;

 */

 
