
/* 
Create a function that returns true if a string contains any spaces. 
** Examples  
hasSpaces("hello") ➞ false
hasSpaces("hello, world") ➞ true
hasSpaces(" ") ➞ true
hasSpaces("") ➞ false
hasSpaces(",./!@#") ➞ false
*/

/*********************************/
function hasSpaces(str){
    if (/\s/.test(str)){
        return true
    }else
        return false 
    
}
console.log(hasSpaces("hello world"))


/*
Create a function that takes a string and returns the number (count) of vowels contained within it.
** Examples  
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
countVowels("Prediction") ➞ 4
*/

/*********************************/

function countVowels(str2) {
    return str2.replace(/[^aeiouy]/gi,"").length;
}
console.log(countVowels("klmn"))

/*
Create a function that takes a string and character as arguments and  replaces all the vowels in a string with character.
** Example
replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"
replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"
*/

/*********************************/

function replaceVowels(str3, sym){
    return str3.replace(/[aeiuo]/gi,sym)
  }
console.log(replaceVowels("saif eddine", "?"));

/*
Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.
mathExpr("4 + 5") ➞ true
mathExpr("4*6") ➞ true
mathExpr("4*no") ➞ false
*/

/*********************************/

function mathExpr(str4) {
    let patt = /[0-9 \s][-*/+][\s 0-9]/;
    return patt.test(str4)
}
console.log(mathExpr("12 + 30"))

/*
Create a function that takes a string as argument and return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them
Use the .test() method in your function
asterisk("bbbccount") ➞ false
asterisk("abbbccount") ➞ true
asterisk("abccount") ➞ true
asterisk("account") ➞ true 
*/

/*********************************/
function asterisk(h){
    let u = /[a-z]{0,}[a][a-z]{0,}[c]{0,}[a-z]{0,}/i;
   let j = u.test(u,"@")
    return j;
}

console.log(asterisk( "aaasdfsdfsdfccount"));

/*
Create a function that takes a string as argument and write a regular expression that matches a string if and only if it is a valid zip code
Zip Codes must be 5 digits long exactly and only contain numbers.
"20438" ➞ true
"1#368" ➞ false
"202801" ➞ false
*/

/*********************************/

function zipcode(n){
    let jus = /^[0-9][0-9][0-9][0-9][0-9]$/;
    return jus.test(n);

}

console.log(zipcode("528659"));

/*********************************/

