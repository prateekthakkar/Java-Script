////Js Day - 10
//// - Basic Functions
///  - Function Statements and Expressions.
function calculateAge(birthYear)
{
    return 2020 - birthYear;
}
var ageJhon = calculateAge(1994);
var ageMike = calculateAge(1995);
var agePrateek = calculateAge(1993);

console.log(ageJhon , ageMike , agePrateek);

function yearUntilRetirement(year,firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0)
    {
        console.log(firstName + ' retires in ' + retirement + ' year.');
    }
    else
    {
        console.log(firstName + ' already retired.');    
    }
}
yearUntilRetirement(1995,"prateek");
yearUntilRetirement(1950,"Jhon");

////  - Function Statements and Expressions.

//// Function Declaration 
//// funtion whatDoYouDo(job, firstName) { }

////Function Expression
var whatDoYouDo = function (job, firstName)
{
 switch(job)
     {
        case('Teacher'):
             console.log(firstName + ' is a ' + job);
             break;
        case('Programmer'):
             console.log(firstName + ' is a ' + job);
             break;
        default:
             console.log(firstName + ' is somthing else');
             break;
     }
}
whatDoYouDo("Programmer","Prateek")