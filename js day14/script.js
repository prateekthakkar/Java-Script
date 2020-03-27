//// js day-14 javascript coding challenge
////coding challenge where Mark and John compared their BMIs.
////1. For each of them, create an object with properties for their full name, mass, and height
////2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
////3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
////Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
//
//var jhon = {
//    fullName : 'jhon smith',
//    mass : 92,
//    height : 1.75,
//    calBmi : function(){
//    this.bmi = this.mass / (this.height * this.height);
//    return this.bmi;
//    }
//}
//
//var mark = {
//    fullName : 'mark smith',
//    mass : 87,
//    height : 1.95,
//    calBmi : function(){
//    this.bmi = this.mass / (this.height * this.height);
//    return this.bmi;
//    }
//}
//
//if (jhon.calBmi()>mark.calBmi())
//{
//    console.log(jhon.fullName + " has heiher bmi " + jhon.bmi)
//}
//else if (mark.calBmi() > jhon.calBmi())
//{
//    console.log(mark.fullName + " has heiher bmi " + mark.bmi)
//}
//else
//{
//    console.log("Both Have Same Bmi!")
//}