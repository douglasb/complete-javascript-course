


// Destructuring 

// It's a JavaScript expression that allows us to extract data from arrays, objects, maps and sets — which we're going to learn more about in a future ES6.io video —into their own variable. It allows us to extract properties from an object or items from an array, multiple at a time.Nov

// es5 

// var john =['john',26];
// var name = john[0];
// var age = john[1];

// es6

const [name,age] = ['john',25];

console.log(name, age);

const obj = {
    firstName: 'john',
    lastName: 'smith'
};

const {firstName, lastName} = obj;

console.log(firstName,lastName);

const {firstName: a, lastName: b} = obj
console.log(a,b);

function calcAgeRetirement(year) {
    const age = new
    Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);





// Spread operators
// ES5 -- 


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

// Rest paramaters
// arguments are special reference like 'this'
// es5
/*
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2016-cur) >=18);
    })
}

isFullAge5(1990,1999,1965);

// ES6

function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2016-cur) >= 18));
}

isFullAge6(1990,1999,1965);

*/
// limit is a single value that allows us to add a value to the arguments

function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);  // check to see if everything is there before applying the limit 
    argsArr.forEach(function(cur) {
        console.log((2016-cur) >=limit);
    })
}

isFullAge5(21, 1990,1999,1965);

// ES6

function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2016-cur) >= limit));
}

isFullAge6(16, 1990,1999,1965);

// Default Paramaters 

// function SmithPerson(firstName, YearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'American' : nationality = nationality;
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.YearOfBirth = YearOfBirth;
//     this.nationality = nationality
// }



// es6

function SmithPerson (firstName, YearOfBirth, lastName = 'smith', nationality = 'american' ) {
   
    this.firstName = firstName;
    this.lastName = lastName;
    this.YearOfBirth = YearOfBirth;
    this.nationality = nationality

}

var john = new SmithPerson('john', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);


// ES6 -- maps is a new key value structure in ES6 you can use anything as the key -- with objects you are limited to strings.  You can use functions as a key
// hash map 
// set - creates / get retreives
// maps are iteriable 

// A hash table (hash map) is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. ... In JavaScript arrays use numbered indexes.

// Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property [key, value] pairs found directly upon object. The ordering of the properties is the same as that given by looping over the property values of the object manually.
// maps are better than objects to create hash maps 
// you can use anything as keys which opens a lot of possiblities
// they are iterable
// it's easy to get the size of the map using the size propertie
// it's easy to add and remove data from a map

const question = new Map();
question.set('question', 'What is the offical name of the latest JavaScript version?'); 
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong answer, please try again');

// console.log(question.get('question'));
// console.log(question.size); // prototype option

if (question.has(4)) {
    // question.delete(4);
    console.log('Answer 4 is here');
}

// question.clear();

question.forEach((value, key ) => console.log(`this is ${key}, and it is set to ${value}`));

for (let [key, value] of question.entries()) {
 //   console.log(`this is ${key}, and it is set to ${value}`);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key} ${value}`);
    }
}

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));


// Classes -- are NOT hoisted

//A JavaScript class is a type of function. Classes are declared with the class keyword. We will use function expression syntax to initialize a function and class expression syntax to initialize a class. ... With prototypes, any function can become a constructor instance using the new keyword.

// ES5 

var Person5 = function(name,YearOfBirth,job) {
    this.name = name,
    this.YearOfBirth = YearOfBirth,
    this.job = job
}

Person5.prototype.calculateAge = 
    function() {
        var age = new Date().getFullYear - this.YearOfBirth;
        console.log(age);
    }

var john5 = new Person5('john',1990,'teacher');

// ES6

class Person6 {
    constructor (name,YearOfBirth,job) {
        this.name = name;
        this.YearOfBirth = YearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.YearOfBirth;
        console.log(age);
    }
}

const john6 = new Person6('john',1990,'teacher');