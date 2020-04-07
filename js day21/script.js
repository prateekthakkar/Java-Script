//Js day 21 Functions And Function Returning Functions 
var year = [1990, 1995, 1998, 2000, 2003, 2006];

function arrayCalc(arr, fn){
    var arrRes= [];
    for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    };
    return arrRes;
};

function calculateAge(year){
    return 2020 - year;
};

function isFullage(year){
    return year >= 18;  
};

var ages = arrayCalc(year,calculateAge);
var fullAge = arrayCalc(ages ,isFullage);

console.log(ages);
console.log(fullAge);


var number = 5
function factorial(number)
{
    var fact=1;
    for(i=1;i<=number;i++)
    {
        fact = fact*i;
    }
    console.log(fact);
}
factorial(number);

////Function Returning Functions 

function interviewQuestion(job){
    if(job == 'designer'){
        return function(name){
            console.log(name + " can you explain what us design is?")
        }
    }
    else if (job == 'teacher')
        {
            return function(name)
            {
                console.log("what subject do you teach, " + name + '?');
            }
        }
    else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }   
    }
    };

interviewQuestion('designer') ('prateek');