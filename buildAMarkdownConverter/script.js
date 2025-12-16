const objConvert = [
  {
    regex : /^### (.*$)/gim,
    replace: "<h3>$1</h3>"
  },{
    regex : /^## (.*$)/gim ,
    replace: "<h2>$1</h2>"
  },{
    regex : /^# (.*$)/gim ,
    replace: "<h1>$1</h1>"
  },{
    regex : /\*\*(.*?)\*\*/gim,
    replace: "<strong>$1</strong>"
  },{
    regex : /\*(.*?)\*/gim,
    replace: "<em>$1</em>"
  },{
    regex : /__(.*?)__/gim,
    replace: "<strong>$1</strong>"
  },{
    regex : /_(.*?)_/gim,
    replace: "<em>$1</em>"
  },{
    regex : /!\[(.*?)\]\((.*?)\)/gim,
    replace: "<img alt=\"$1\" src=\"$2\">"
  },{
    regex : /\[(.*?)\]\((.*?)\)/gim,
    replace: "<a href=\"$2\">$1</a>"
  },{
    regex : /^> (.*$)/gim,
    replace: "<blockquote>$1</blockquote>"
  }
];
const markdownInput = document.querySelector("#markdown-input");
const preview = document.querySelector("#preview");
const htmlOutput = document.querySelector("#html-output");

function convertMarkdown (){
  let text = markdownInput.value
  objConvert.forEach((object)=>{
   text = text.replace(object["regex"],object["replace"]);
  })
  htmlOutput.textContent = text;
  preview.innerHTML = text;
  return text;
  
}
markdownInput.addEventListener("input",convertMarkdown);

