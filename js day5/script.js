//Js Day 5 - Operator Precedence
var nowage = 2020;
var yearhello = 1995;
var fullage = 19;
//Multiple oprators
var isFullage = nowage - yearhello >= fullage; //It's Called operator precedence, It's Worked On Operator Priority
console.log(isFullage);
//Grouping
var agehello = nowage - yearhello;
var ageworld = 28;
var average = (agehello + agehello) / 2
console.log(average);
//Multiple Assignments
var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);
//More Operators
x *= 2
console.log(x);
x += 10
console.log(x);
x = x + 1 ;
//OR
console.log(x);
x += 1;
//OR
console.log(x);
//OR
x++;
console.log(x);

x--;
console.log(x);