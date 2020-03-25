//// Js Day13
//// Objects and methods
////Objects is keys and values pair.

var intro = {
    firstName : 'Prateek',
    lastName : 'Thakkar',
    birthYear : 1995,
    family : ['Hello', 'World'],
    job : 'Programmer',
    isMarried : true
 };

console.log(intro.firstName);
console.log(intro['lastName']);
var x = 'birthYear';
console.log(intro[x]);

intro.job = 'Developer';
intro.isMarried = false;
console.log(intro);

////new object syntax
var jane = new Object();
jane.firstName = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'smith';
console.log(jane);


////Methods

var intro = {
    firstName : 'Prateek',
    lastName : 'Thakkar',
    birthYear : 1995,
    family : ['Hello', 'World'],
    job : 'Programmer',
    isMarried : true,
    calAge : function(){
        this.age = 2020 - this.birthYear; //this means current(intro) object.
    }
 };
intro.calAge();
console.log(intro);