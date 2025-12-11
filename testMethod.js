/*
let setence = "The dog chased the cat";
let regex = /the/;

let mystring = "Hello, World!";
let myregex = /Hello/;

let result = myregex.test(mystring);

console.log(result);


// case sensitive

/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text";
let waldoUpperCase = /Waldo/
let waldoLowwerCase = /waldo/

let resultTrue = waldoUpperCase.test(waldoIsHiding);
let resulFalse = waldoLowwerCase.test(waldoIsHiding);
console.log(resultTrue); console.log(resulFalse);
*/

// operator or 

/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log (result);
*/

// ignore case - flag


let mystring = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(mystring);
console.log(result);



