//--------------------------------(Very Easy)----------------------------------------------

// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
    if(Number.isInteger(minutes)== true)
    {
    return Math.floor(minutes * 60);
    }
   }
let minutes = 11;
let minutesToSeconds = convert(minutes);
console.log("Conversion of  "+ minutes+" minutes in seconds is :"+minutesToSeconds);


//  Divides Evenly
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

let a=14;
let b= 2;
console.log(dividesEvenly(a,b));

function dividesEvenly(a,b) {
    if(a>=b)
    {
        if(a % b === 0)
        {
            //return console.log("true");
            return true;
        }
        else{
            //return console.log("false");
            return false;
        }
    }
}




//-----------------------------------------------------(Easy)------------------------------------------------------------------
//  Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

console.log(charCount('B','Big fat bubble'));

function charCount(letter, str) 
{
 let letter_Count = 0;
 for (let position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}



// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(number) {
 if(number >= 1 && number <= 1000)
 {
    let sum = 0;
    for (let i = 1; i<=number;i++)
    {
        sum += i;
    }
    return console.log("sum is "+ sum);
        
 }
 else{
     return console.log("sorry!! wrong Entry");
 }
}

addUp(13);


// Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.
// a = 1, e = 2, i = 3, o = 4, u = 5

let dict ={
a : "1",
e : "2",
i : "3",
o : "4",
u : "5",
}

let str = "karachi";
let str1 =str.toLowerCase();
console.log(replaceVowel(str1));

function replaceVowel(str)
{   let r="";
let ch;

let l=str.length;
for (let i = 0 ;i<l;i++) {
   ch = str.charAt(i);
   if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
   {
       ch = dict[ch];
   }
   r+=ch;
}

return r;
}


//---------------------------------------------------(Medium)-------------------------------------------------------------------------

// Reverse Words Starting with a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

function specialReverse(sentence,letter){
    let array = sentence.split(' ');
    let strComplete= "";
    for(var i=0;i<array.length;i++){
        let arr = array[i].split('');
        let reversedArray = arr;
        if(arr[0]==letter){
            reversedArray = arr.reverse().join('');
        }
        else{
            reversedArray = arr.join('');
        }
        strComplete  = strComplete + reversedArray + ' ';
    }
    return strComplete;
}

let sentence = 'word searches are super fun';
let letter = 's';
sentence= sentence.toLowerCase();
console.log(specialReverse(sentence,letter));



// Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

let array= ["SS", "SS", "SS", "SS"];
if(array.length==4)
{
console.log(testJackpot(array));
}
else{
  console.log("sorry!!Length of array is not 4");
}

function testJackpot(array) {
  var first = array[0];
  return array.every(function(element) {
      return element === first;
  });
}


// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

let chars = ["John", "Taylor", "John"];
console.log(removeDups(chars));

function removeDups(chars)
{
let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});
return uniqueChars;
}


//-----------------------------------------------------------(Hard)-------------------------------------------------------------------

// Get Real Type
// Create a function that takes a value as an argument and returns the type of this value. You should get the real type of a value (JavaScript typeof doesn't return the real object type of values and you need to fix that).

function realType(x) {

    switch (typeof (x)) {
        case 'object':
            if (x instanceof Array)
                return 'Array';
            if (x instanceof Date)
                return 'Date';
            if (x instanceof RegExp)
                return 'regexp';
            if (x instanceof String)
                return 'String';
            if (x instanceof Number)
                return 'Number';
            else if (x === null)
                return "null";
            return 'object';
           
        default:
            return typeof (x);
    }
}
console.log(realType([]));


// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(s) {
    let s1 = []
    for(let i in s) {
        let a = s[i].split('');
        
        for(let j in a) {
            if(isNaN(a[j]) === false && a[j] !== ' ') {
                s1.push(a.join(''));
                break;
            }                
        }
    }
    return s1;
}

console.log(numInStr (["this is a test", "test1"]));




