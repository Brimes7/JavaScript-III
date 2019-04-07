/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding 
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
}
console.log(sayName("Russian Trouble"));

// code example for Window Binding

// Principle 2
const myObj = {
    intro: 'Hey yall ',
    sayHey: function(name) {
        console.log(`${this.intro} my name is ${name}`);
        console.log(this);
    }
};
console.log(myObj.sayHey('Bustah RIMES'));
// code example for Implicit Binding

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

newman.speak();
newman.speak();

// code example for New Binding

// Principle 4

// code example for Explicit Binding
//Taking the above object oriented approach we can discover that we can override what the CordialPerson constructor objects get set to. By calling them explicitly with a new context using .call and .apply

jerry.speak.call(newman); newman.speak.apply(jerry);

