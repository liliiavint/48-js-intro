const a = 3.1415;
const b = a.toFixed(2);

console.log(a, typeof a);
console.log(b, typeof b);

const c = parseInt(b) + parseInt(b);
console.log(c);

const d = parseFloat(b) + parseFloat(b);
console.log(d);

console.log(isNaN(3));
console.log(isNaN(NaN));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(14562));

console.clear();

console.log(Math.PI);
console.log(Math.E);

const max1 = Math.max(1, 2, 3);
console.log(max1);

const max2 = Math.max([1, 2, 3]);
console.log(max2);

const max3 = Math.max(...[1, 2, 3]);
console.log(max3);


   
   console.log('>>>>>>>>>>>');
   function addLength(str) {
  const arra = [];
  const das = str.split('');
  let count = 0;
  for (let i = 0; i < das.length; i++){
    let as = das[i];
    if (das.includes(as) !== das.includes(as)){
        count = 1;
    }else{
            count++;}
          was = str.split(das[i]).length-1;
        arra.push([das[i]+' '+was]);
  }
        return arra;
   }
    console.log(addLength('appleban'));
    // a 2, p 2, l 1, e 1, b 1, n - 1

    /*function openOrSenior(data){
      let count = 0;
      for (let i = 0; i < data.length; i++){
        data[i]= [x, y]
      if([x > 55, y >7]){
        return "Senior";
        } else if( [x < 55, y > -2]){
          return "Open";
        }
       count++;
      return count;
      } 
      }
      console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));*/

isBelowThreshold = (x, y) => {x < 40, y > 7;
return 'Senior';
    }

console.log(isBelowThreshold(45, 12));