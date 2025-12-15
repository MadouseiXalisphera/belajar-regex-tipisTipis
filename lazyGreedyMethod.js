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
// let numString = "Your sandwich will be $5.00";
// let numRegex = /./g;
// let result = numString.match(numRegex).length;
// console.log(result);

// restrict posible username
// let username ="JackOfAllTrades";
// let userCheck = /^[A-Za-z]{2,}\d*$/;
// let result = userCheck.test(username);
// console.log(result);

//match whitespace
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\S/g;
// let result = sample.match(countWhiteSpace);
// console.log (result);   

//specify upper and lowwer number of match
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,} no/;
// let result = ohRegex.test(ohStr);
// console.log(result);

//specify only the lower number of matches
// let haStr = "Hazzzzah";
// let haRegex = /z{4,}/;
// let result = haRegex.test(haStr);
// console.log(result);

//specify exact number of the matches 
// let timStr ="Timmmmber";
// let timRegex = /Tim{4}ber/;
// let result = timRegex.test(timStr);
// console.log(result);

//check all for all or none 
// let favWord = "favourite";
// let favRegex = /favou?rite/;
// let result = favRegex.test(favWord);
// console.log(result);

//+ and - lookahed
// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex)); console.log(noquit.match(qRegex));    

// let sampleWord = "astro22naut";
// let pwRegex = /(?=\w{5})(?=\d{2})/;
// let result = pwRegex.test(sampleWord);
// console.log (result);

//reuse pattern using capture group 
// let repeatStr ="regex regex regex nya";
// let repeatRegex = /(\w+)\s\1/;
// //console.log(repeatRegex.test(repeatStr)); console.log (repeatStr.match(repeatRegex));

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);
// console.log(result)

//use capture group to search and replace 
// let wrongText = "The sky is silver";
// let silverRegex = /silver/;
// //console.log(wrongText.replace(silverRegex,"blue"));

// //console.log("Code Camp".replace(/(\w+)\s(\w+)/,"$2 $1"));

// let huhText = "This sandwich is good";
// let fixRegex = /good/;
// let replaceText = "okey-dockey";
// let result = huhText.replace(fixRegex,replaceText);
// console.log(result);

//remove whitspace from start and end
// let str = "     Hello Wordl!  ";
// let wsRegex = /^\s+|\s+$/;
// let result = str.replace(wsRegex,"");
// console.log(result);

let kata = "asu";
let regexnya = `/${kata}/`
let para = "asukabeh";
console.log(regexnya.test(para));