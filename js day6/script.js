// Javascipt Challenge 01
// Compare Mark And Jhon Bmi(Body Mass Index):
// Formula : BMI = Mass / (Height * Height),(Mass In Kg Ang Hight In Meter) .
// 1. Store Mark's And Jhon Height And Weight In Varibles.
// 2. Calculate Both BMI.
// 3. Compare Both Bmi And Store In Varible As Boolean Value.
// 4. Print String To Console Like This ("Is Mark's BMI Higher Than Jhon's?").  
var Jhonheigh=1.5; // Merter
var Jhonweight=65; // KG

var Markheight=1.8;
var Markheight=60;

var Jhonbmi =  Jhonweight / (Jhonheigh * Jhonheigh);
var Markbmi = Markheight / (Markheight * Markheight);

Highbmi = Markbmi > Jhonbmi;
console.log("Is Mark's Bmi Higher Than Jhon's?" , Highbmi);
