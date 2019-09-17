function addFourAges (a,b,c,d) {
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// applying values from an array to a function and passing them as an argument.

const max3 = addFourAges(...ages);
console.log(max3);

// combining arrays with the spread operator

const familySmith = ['john','jame', 'mark'];
const familyMiller = ['mary', 'bob', 'add'];
const bigFamily = [...familySmith, 'lilly',...familyMiller];
console.log(bigFamily);

// using spread operator on node lists 
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'white');