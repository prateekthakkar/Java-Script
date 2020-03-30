////Js Day17-This Keyword

var prateek = {
    name : 'prateek',
    yearOfBirth : '1995',
    calculateAge : function()
    {
        console.log(this); ////refer to current object prateek
        console.log(2020 - this.yearOfBirth);
        function innerFunction()
        {
            console.log(this); ////refer to window object
        }
        innerFunction();
    }
}
prateek.calculateAge();

var raz = {
    name : 'raz',
    yearOfBirth : '1994',
}
//Method Borrow
raz.calculateAge = prateek.calculateAge
raz.calculateAge();