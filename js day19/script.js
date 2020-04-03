////Js Day 19- Creating ccc

var prateek = {
    name : 'prateek',
    yearOfBirth : 1995,
    job : 'Programmer'
};

// Function Constructors
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = 
    function(){
        console.log(2020 - this.yearOfBirth);
    };

Person.prototype.lastName = 'Thakkar';

// new oprator here first create empty object then it called function constructor with this varible not ponting to global object but new object created here.

var prateek = new Person('prateek',1994,'Designer'); 
var jan = new Person('Jan',1995,'Coder');
prateek.calculateAge();
jan.calculateAge();

console.log(prateek.lastName);
console.log(jan.lastName);