// extract match

/*
let extractStr = "Extract the world 'coding' from this string";
let codingRegex = /coding/;
let result  = extractStr.match(codingRegex);
console.log(result);
*/

// find more than the first match -g flag


// let testStr = "Repeat,Repeat,Repeat";
// let ourRegex = /Repeat/g;
// console.log(testStr.match(ourRegex));

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/ig;
// let result = twinkleStar.match(starRegex);

// console.log(result);

//match anything with wildcard period -.flag

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// console.log (humStr.match(huRegex));
// console.log(hugStr.match(huRegex));

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log (result);

//match single chara with multiple possibilities - []flag

// let bgRegex = /b[aiu]g/;

// let quoteSample = "Beware of bugs in the the above code; I have only proved it correct.";
// let vowelRegex = /[aiueo]/ig;
// let result = quoteSample.match(vowelRegex);

// console.log(result);

// match letter of alphabet -flag
// let quoteSample = "The quick brown fox jump over the lazy dog.";
// let alphabetRegex = /[a-z]/ig;
// let result = quoteSample.match(alphabetRegex);

//console.log(result);

let quoteSample = "Blueberry 3.141592653s are delicius";
let myRegex = /[a-z0-9]/ig;
let result = quoteSample.match(myRegex);
console.log (result);
