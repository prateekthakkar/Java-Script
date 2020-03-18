// Day 8
// - Boolean Logic
// - Ternary Operator and Switch Statements
// - Truthy and Falsy Values and Equality Operators.

var firstName = "Prateek";
var age = 28;

if(age<13)
{
    console.log(firstName + " Is A Boy.")
}
else if(age>=13 && age<=18 )
{
    console.log(firstName + " Is Teenage.")
}
else
{
    console.log(firstName + " Is A Boy.")
}

//Ternary Operator

age>18? console.log(firstName + " Is A Mature."):console.log(firstName + " Is Not A Mature.");

var nature = age > 18 ? 'Mature' : "Not Mature";
console.log(nature);

//Switch Statements

var job = "Programmer";
switch(job)
{
    case 'Teacher':
        console.log(firstName + " Is A Teacher.");
        break;
    case 'Programmer':
        console.log(firstName + "Is A Programmer.");
        break;
    default :
        console.log(firstName + " Is A Something Else");
        break;
}

switch(true)
{
        case(age<13):
            console.log(firstName + "Is A Boy.");
            break;
        case(age>=13 && age<=18):
            console.log(firstName + " Is A Teenager.");
            break;
        case(age<30):
            console.log(firstName +" Is A Young Man.");
            break;
        default:
            console.log(firstName + " Is A Man.");
}


// Truthy and Falsy Values.
// falsy values : undefined,null,0,'',Nan
// truthy values : not falsy value

var height=0;
height = 100;
if(height || height === 0)
{
    console.log("Varible Is Define");
}
else
{
    console.log("Varible Is Not Define");
}

////Equality Operator
if (height == '100')
{
    console.log("The == Operator Is Does Type Coercion!");
}