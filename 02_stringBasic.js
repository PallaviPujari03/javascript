console.log("*************-------------------++++++++Assignment 02+++++++------------------*********************");
function stringHandsOn(){
    console.log("Given a string : hey you are doing good, keep it up");
    console.log("**********-------------++++++++++ 1 +++++++++-----------************");

    var strone = "hey you are doing good, keep it up";
    var charLength = strone.length;
    console.log("Length of string is:", charLength);
    console.log("*************------------------+++++ 2 +++++-------------***********");
    var trimmedStrOne = strone.trim();
    var lengthAfterString = trimmedStrOne.length;
    console.log("After removing extra spaces the string length is:",lengthAfterString);
    console.log("*************-----------+++++ 3 +++++----------************");

    var extraSpaces = charLength - lengthAfterString;
    console.log("Total number of extra spaces in string are:",extraSpaces);
    console.log("***************--------------++++++ 4 ++++++-----------************");

    var charAtZeroIndex = trimmedStrOne.charAt(0);
    var charAtLastIndex = trimmedStrOne.charAt(trimmedStrOne.length-1);
    console.log("First character of String after trim are:",charAtZeroIndex);
    console.log("Last character of string after trim are:",charAtLastIndex);
}

stringHandsOn();

