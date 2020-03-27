//js day 14
// Loops

for(i=1;i<10;i++)
{
    console.log(i);
}

var names = ['hello','world',1995,'hello world','javascript']
for(i=0;i<names.length;i++)
{
    console.log(names[i]);
}
var i=0;
while(i<names.length)
{
    console.log(names[i]);
    i++;
}

//// continue and break statements

var names = ['hello','world',1995,'hello world','javascript']
for(i=0;i<names.length;i++)
{
    if(typeof names[i] !== 'string') // !== is strict different operator
        {
            continue;
        }
    console.log(names[i]);
}

for(i=0;i<names.length;i++)
{
    if(typeof names[i] !== 'string') // !== is strict different operator
        {
            break;
        }
    console.log(names[i]);
}



////Looping Backwards
for (var i=names.length - 1; i>=0 ; i--)
    {
        console.log(names[i]); 
    }