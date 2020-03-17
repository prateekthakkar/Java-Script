//Js Day 7 - If Else Statements OR Conditional Statements
//When You Compare Value With == (Double Equal To) Than It Will Just Comapre Both Values.
// But When You Use === (Tripple Equal To) Than It Will Compare Both Datatype And Values.

var firstName = 'Prateek';
var civilstatus = 'Married';

if (civilstatus === 'Married')
{
    console.log(firstName + ' Is Married!');
}
else
{
    console.log("Great!");
}

isMarried = true;

if (isMarried)
{
    console.log(firstName + ' Is Married!');
}
else
{
    console.log("Great!");
}

var val = 1;
if (val == "1")
{
    console.log("True");
}
else
{
    console.log("False");
}

if (val === "1")
{
    console.log("True");
}
else
{
    console.log("False");
}

var Jhonheigh=1.5; // Merter
var Jhonweight=65; // KG

var Markheight=1.8;
var Markheight=60;

var Jhonbmi =  Jhonweight / (Jhonheigh * Jhonheigh);
var Markbmi = Markheight / (Markheight * Markheight);

if(Markbmi > Jhonbmi)
{
    console.log("Mark's Bmi Higher Than Jhon's Bmi.")
}
else
{
    console.log("Jhon's Bmi Higher Than Mark's Bmi.")
}
