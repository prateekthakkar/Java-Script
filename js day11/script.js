//// Day - 10 
/// - Arrays

var names = ['Jhon','Prateek'];
var year = new Array(1990,1994);

console.log(names[0]);
console.log(year.length);

//Mutable Array
names[5]="Harry";
console.log(names);
console.log(names.length);

//Different Data Type
var prateek = ['Prateek', 'Thakkar', 1994, 'Programmer', true]

prateek.push('blue');
prateek.unshift('Mr.');
console.log(prateek);

prateek.pop()
console.log(prateek); 

console.log(prateek.indexOf('Thakkar'));

var isProgrammer = prateek.indexOf('Programmer') === -1 ? "Prateek Is Not A Programmer" : "Prateek Is A Programmer";
console.log(isProgrammer);