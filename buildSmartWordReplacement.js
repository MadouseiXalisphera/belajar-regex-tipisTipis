function myReplace(str, word, change) {
  if (word[0] === word[0].toUpperCase()) {
    change = change[0].toUpperCase() + change.slice(1);
  } else {
    change = change[0].toLowerCase() + change.slice(1);
  }

  return str.replace(word, change);
}

console.log(myReplace("He is Sleeping", "Sleeping", "sitting")); 