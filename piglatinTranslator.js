function translatePigLatin (str) {
  let regex = /[aiueo]/;
  let hasilMatch = str.match(regex);
  if (hasilMatch == null) {
    return str + "ay";
  }
  if (hasilMatch["index"] == 0) {
    return str + "way";
  } else {
    let sliceStr = str.slice(0,hasilMatch["index"]);
    return str.replace(sliceStr,"") + sliceStr +  "ay";

  }
}
console.log(translatePigLatin("pig"));
