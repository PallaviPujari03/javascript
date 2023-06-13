



console.log(`-----------------Given String Is Palindrome Or Not--------------------------------`);
function isPalindrome(str) {
    const myArray = str.split("");
    const reversedStr = myArray.reverse().join("")
    
    if (str === reversedStr) {
        console.log(`given string is :`,str ,`is palindrome` );  
    } else {
        console.log(`given string is :`,str, ` is not palindrome`);  
    }
}
isPalindrome("141");
isPalindrome("madam");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");