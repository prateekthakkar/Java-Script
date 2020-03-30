//Factorial

function factorial(n)
{
    var fact=1;
    for(i=1;i<=n;i++)
    {
        fact = fact*i;
    }
    document.write("Factorial of ", n,' is ',fact,".<br/>");
}
var n = prompt("Enter Number");
factorial(n);

//star print
function star(n)
{    var k=n*2-2

    for(i=0;i<=n;i++)
    {
        for(j=0;j<=i;j++)
            {
                document.write(' * ');
            }
        document.write("<br/>");
    }
}
star(n);


var name="prateek";
function first()
{
    var a = "Hello!";
    second();
    document.write(a + name,"<br/>");
}
function second()
{
    var b = "Hi!";
    third();
    document.write(b + name,"<br/>");
}
function third()
{
    var c = "Hey!";
    document.write(c + name,"<br/>");
}
first();

var a="Hello!";
first1();
function first1(){
    var b="Hi!";
    second1();
    function second1(){
        var c="Hey!"
        third1();
    }
}

function third1(){
    var d="Prateek";
    document.write("</br>",a+d);
}