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
for(var i=0; i<3; i++) {// use function factory
    (function test(o){
        alert(o);
    })(i)
}