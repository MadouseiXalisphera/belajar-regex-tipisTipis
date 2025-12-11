// let string = "titanic";
// let regex = /t[a-z]*i/;
// console.log(string.match(regex));

// let text = "<h1>Winter is coming<h1>";
// let myRegex = /<.*?>/;
// console.log(text.match(myRegex));

// find one or more criminals in a hunt
// let crowd = "P1P2P3P4P5P6CCCP7P8P9"
// let criminals = /C+/;
// let matchedCriminals = crowd.match(criminals);
// console.log (matchedCriminals);

//match beginning string pattrens
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
// console.log(result);

// match ending string pattrens
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);

//match all letter and number and negasion
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g;
// let notAlphabetRegex = /\W/g;
// let result = quoteSample.match(alphabetRegexV2);
// console.log(result);

//match all number
let numString = "Your sandwich will be $5.00";
let numRegex = /./g;
let result = numString.match(numRegex).length;
console.log(result);

