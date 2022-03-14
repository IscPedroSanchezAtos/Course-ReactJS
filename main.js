/*console.log(test); //returns undifined beacuse run the declaretion before be declared
var test = 'test';*/

/*console.log(test); //returns an error beacuse we cannot access 'test' before initialization nad doesnt have hoisting
let test = 'test';*/

/*console.log(test); //returns an error beacuse we cannot access 'test' before initialization nad doesnt have hoisting
const test = 'test';*/

/*test();//hoisting with function
function test(){
    console.log('im a function')
}*/

/*
function test() {// scope example
    var nice = 'nice'
}
console.log(nice);*/

/*if (true) {// block scope - change var to let/const
    var test = 'test';
}
console.log(test);*/


/*for(var i=0; i<3; i++) {// for loop example - to fix this use let
    setTimeout(() => {
        alert(i);
    }, 500);
}*/

/*for(var i=0; i<3; i++) {// use function factory
    (function test(o){
        alert(o);
    })(i)
}*/

/* logical OR and AND
const test  = 5 || 6; 
const sample = 0 || 20; 
const sample2 = 0 || false || null; 

console.log(test);
console.log(sample);
console.log(sample2);

const testand  = 5 && 6;
const sampleand = 0 && false && null;

console.log(testand);
console.log(sampleand); */

// primitive values & reference type 
let sample = 5;

let copySample  = sample;

sample = 10;

console.log('sample:', sample);

console.log('copySample:', copySample);


let sampleref = { name: 'Rysh' };

let copySampleref  = sampleref;

sampleref.test = 'test';

console.log('sample:', sampleref);

console.log('copySample:', copySampleref);