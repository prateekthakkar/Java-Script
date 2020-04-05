////Js Day 19- Creating Objects Function Constructors And Creating Objects Objects.create

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

////Creating Objects Objects.create

//Object.create built a object that's an inherits directly from one the pass in the first arguments.
//function constructor newly created object inherits from construtors prototype type property.
//object.create allows to implement really complex inheritance structure in easyer way then function construction because it's allows to direct the specify which object should be a prototype. 

var personProto = {
    calculateAge : function(){
        console.log(2020 - this.yearOfBirth);
    }
};
var prateek = Object.create(personProto);
prateek.name = 'prateek';
prateek.yearOfBirth = 1995;
prateek.job = 'Programmer';

var jane = Object.create(personProto,{
    name : { value : 'jane'},
    yearOfBirth : { value : 1996},
    job : { value : 'Designer'},
});