// jsday 20  primitives vs objects 

//Varible containg primitives atcually hold data in side of varible it self.
//varible associate with object do not actually contain object but instade it contain reference to place and memory where object is stored.

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//object
var object1 = {
    name : 'prateek',
    age : 26,
};
var object2 = object1;

object1.age = 28;
console.log(object1.age);
console.log(object2.age);

//functions
var age = 25;
var object = {
    name : 'prateek',
    country : 'india'
}
function change(a,b){
    a = 30;
    b.country = 'canada';
};

change(age,object);
console.log(age);
console.log(object.country);