console.log(".............. 1 ..............");

function show(){
    console.log("1)Function without argument and no return type");
}
console.log();
show();

console.log();

function show1(){
    console.log("2)Function without argument and no return type");
}
console.log(); 
show1();

console.log(" ");

console.log(".................. 2 ..................");

var firstName = "Pallavi";
var lastName = "Pujari";
var collegeName = "Sangmeshwar college,solpaur";

function personalDetails(firstName,lastName,college){
    var firstName = "Pallavi";
    var lastName = "Pujari";
    var collegeName = "Sangmeshwar college,solpaur";
    console.log("firstName:",firstName,"lastName:",lastName,"college:",college); 
}
personalDetails();

console.log(".................. 3 .................");

valueOne = "Virat";
valuetwo = "Anushka";

noOne = 1000;
noTwo = 2000;

function swapvalueDude(argOne , argTwo) {
    console.log("Before Swap:", argOne , argTwo);
    var temp = argOne;
    argOne = argTwo;
    argTwo = temp;
    console.log("After Swap:", argOne , argTwo);
}

swapvalueDude(valueOne,valuetwo);
swapvalueDude(noOne,noTwo);

console.log(".................. 4 .................");

var a = 10.23;
var b = 600;
var c = 40;

var valueOne = "Hello";
var valuetwo = "Good";
var valueThree = "Morning";

function addThreeValues(paraOne , paraTwo , paraThree){
    console.log("Before Addition:",paraOne , paraTwo , paraThree);
    var addValues = paraOne + paraTwo + paraThree ;
    console.log("After Addition:",addValues);
}
addThreeValues(a,b,c);
addThreeValues(valueOne,valuetwo,valueThree);