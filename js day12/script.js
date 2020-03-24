//// Js Day 12
////John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
////To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
////In the end, John would like to have 2 arrays:
////1) Containing all three tips (one for each bill)
////2) Containing all three final paid amounts (bill + tip).
////(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

var tips = [];
var finalValue = [];
var percentage;

function tipCalculator(bill)
{
    if(bill < 50 )
        {
            percentage = .2;
        }
    else if(bill >=50 && bill<200)
        {
            percentage = .15;
        }
    else
        {
            percentage = .1;
        }
    return tips.push(percentage * bill);
}

var bill = [124, 48, 268];

for(i=0;i<bill.length;i++)
{
    tipCalculator(bill[i]);
    finalValue.push(bill[i] + tips[i]);
}
console.log(finalValue);
