//// Day 9 
//// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
////1. Calculate the average score for each team
////2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
////3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
////4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
////5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

var jhonScore = (89 + 120 + 103) / 3;
console.log("Jhon Team Average Score Is",jhonScore);
var mikeScore = (116 + 94 + 123) / 3;
console.log("Mike Team Average Score Is",mikeScore);
var marryScore = (97 + 134 + 105) / 3;
console.log("Marry Team Average Score Is",marryScore);

if (jhonScore > mikeScore && jhonScore > marryScore)
{
    console.log("Jhon Team Is Winner And Score Is " + jhonScore);
}
else if (mikeScore > jhonScore && mikeScore > marryScore)
{
    console.log("Mike Team Is Winner And Score Is " + mikeScore);
}
else if (marryScore > mikeScore && marryScore > jhonScore)
{
     console.log("Marry Team Is Winner And Score Is " + marryScore);
}
else
{
    console.log("Draw");
}

