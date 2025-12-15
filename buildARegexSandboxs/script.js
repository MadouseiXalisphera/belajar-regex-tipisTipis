// 1. Seleksi Elemen (Sesuai User Stories)
const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
    let flags = "";
    

    if (caseInsensitiveFlag.checked) {
        flags += "i";
    }
    
    if (globalFlag.checked) {
        flags += "g";
    }
    
    return flags;
}


testButton.addEventListener("click", () => {
   
    let textUser = stringToTest.textContent;
    
    let pattern = regexPattern.value;
    let flags = getFlags(); 
    
    if (pattern === "") {
        testResult.textContent = "Please enter a regex pattern";
        return;
    }

    let nihRegexnya = new RegExp(pattern, flags);
    
    let hasilMatch = textUser.match(nihRegexnya);

    if (hasilMatch == null) {
        testResult.textContent = "no match";
    } else {
        testResult.textContent = hasilMatch.join(', ');

        let highlightedText = textUser.replace(nihRegexnya, '<span class="highlight">$&</span>');

        stringToTest.innerHTML = highlightedText;
    }
});