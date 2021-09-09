let charArray = ["qwertyuiopasdfghjklzxcvbnm", //0
                 "QWERTYUIOPASDFGHJKLZXCVBNM", //1
                 "1234567890",                 //2
                 "-=~!@#gebi%^&*()_+[]{}|?"]   //3

let paswLength = 8;
let howCapsInPasw = 1;
let howNumbInPasw = 1;
let howSymbInPasw = 1;

function gebi(id) {
   return document.getElementById(id);
}

function readValues() {
    paswLength = gebi("forPaswLength").value;
    // console.log(paswLength);
    howCapsInPasw = gebi("forPaswCap").value;
    howNumbInPasw = gebi("forPaswNum").value;
    howSymbInPasw = gebi("forPaswSym").value;
}

//        Advantage meniu Show / Hide

gebi("showAdvance").addEventListener("change", updateVisibility);

function updateVisibility() {
    if (this.checked) {
        gebi("advance").style.display = "block";
    } else {
        gebi("advance").style.display = "none";
        gebi("paswGen").disabled = false; 
        paswLength = gebi("forPaswLength").value = 8;
        howCapsInPasw = gebi("forPaswCap").value = 1;
        howNumbInPasw = gebi("forPaswNum").value = 1;
        howSymbInPasw = gebi("forPaswSym").value = 1;
        gebi("advanceLen").style.color = "black";  
        gebi("errorMsgL").innerHTML = ""; 
        gebi("errorMsg").innerHTML = "";
        gebi("advanceChar").style.color = "black";
    }
}

//        Selecting and testng values "Advantage options"

gebi("forPaswLength").addEventListener("change", updateTextLen);
gebi("forPaswCap").addEventListener("change", updateText);
gebi("forPaswNum").addEventListener("change", updateText);
gebi("forPaswSym").addEventListener("change", updateText);


 function updateTextLen() {
    readValues();
    console.log(typeof paswLength, paswLength)
    if (paswLength < 8 || paswLength > 128) {
        console.log("dfafasfasfsafasfas")
        // gebi("paswGen").style.backgroundColor = "#aaaaaa";
        gebi("advanceLen").style.color = "red";
        gebi("errorMsgL").innerHTML = "Wrong Length";
        gebi("paswGen").disabled = true;
    }
    else {
        // gebi("paswGen").style.backgroundColor = "#80000";
        gebi("advanceLen").style.color = "black";  
        gebi("errorMsgL").innerHTML = ""; 
        gebi("paswGen").disabled = false;    
    }
    updateText()
 }
 
function updateText() {
    readValues();
    
    let allow = paswLength - howCapsInPasw - howNumbInPasw - howSymbInPasw -1;
    console.log(allow, howCapsInPasw);
        if (allow < 0 || paswLength < 8 || paswLength > 128) {
        gebi("errorMsg").innerHTML = "Too many characters";
        // gebi("paswGen").style.backgroundColor = "#aaaaaa";
        gebi("advanceChar").style.color = "red";
        gebi("paswGen").disabled = true;
        }
        else {
            gebi("errorMsg").innerHTML = "";
            gebi("advanceChar").style.color = "black";
            // gebi("paswGen").style.backgroundColor = "#80000";
            gebi("paswGen").disabled = false;
        }
}
 
//           Password Generator

function pickRandom(x,y) {
    let pasw = "";
     for (i = 0; i < x; i++) {
        let randomPlace = Math.floor((Math.random() * charArray[y].length));
        let charFromArray = charArray[y].charAt(randomPlace);
        pasw += charFromArray;        
    }
    return pasw;
}

function shuffle(){
    let z = newPassword.split("");
    for (i = 0; i < newPassword.length; i++) {
        let temp = z[i];
        let j = Math.floor((Math.random() * newPassword.length));
        z[i] = z[j];
        z[j] = temp;
    }
return z.join("");
}

let newPassword = "Your Secure Password";

function genAndShow() {
    readValues();
    let lowerLetters = pickRandom((paswLength = paswLength - howNumbInPasw - howCapsInPasw - howSymbInPasw),0);
    let capInPasw = pickRandom(howCapsInPasw,1);
    let numbersInPasw = pickRandom(howNumbInPasw,2);
    let symbolInPasw = pickRandom(howSymbInPasw,3);
    newPassword = lowerLetters + capInPasw + numbersInPasw + symbolInPasw;
    // console.log(newPassword);
    let shuffledPasw = shuffle();
    gebi("showPasw").innerHTML = shuffledPasw;
    // console.log(shuffledPasw);
    gebi("len").innerHTML = "Your Password Length Is: " + shuffledPasw.length;
}
