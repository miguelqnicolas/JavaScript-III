/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
* 2. Implicit binding
* 3. New binding
* 4. Explicit binding where you use 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

'strict mode'

function test1() {
    console.log(this.phrase);
}

let phrase = 'phrase';

test1();

// Principle 2

// code example for Implicit Binding

let object1 = {
    phrase: 'phrase',
    function: function() {
        console.log(this.phrase)
    },
}

object1.function();

// Principle 3

// code example for New Binding

function test2(parameter) {
    this.test = parameter;
}

let newTest = new test2("argument");

console.log(newTest.test);

// Principle 4

// code example for Explicit Binding

function test3(){
  console.log(this.phrase);
}

let object2 = {
  phrase: 'phrase'
}

test3.call(object2);