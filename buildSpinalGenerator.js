function spinalCase (strnya) {
  let regex1 = /([a-z])([A-Z])/g;
  let strKasihspasi = strnya.replace(regex1,"$1 $2")
  let regexnya = /\s|_/g;
  return strKasihspasi.replace(regexnya,"-").toLowerCase();
}
console.log(spinalCase("ThisIsSpinalTap"))