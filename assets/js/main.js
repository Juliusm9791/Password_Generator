let charArray = ["qwertyuiopasdfghjklzxcvbnm", //0
                 "QWERTYUIOPASDFGHJKLZXCVBNM", //1
                 "1234567890",                 //2
                 "-=~!@#$%^&*()_+[]{}|?"]   //3

let paswLength = 8;
let howCapsInPasw = 1;
let howNumbInPasw = 1;
let howSymbInPasw = 1;

function readValues() {
    paswLength = document.getElementById("forPaswLength").value;
    // console.log(paswLength);
    howCapsInPasw = document.getElementById("forPaswCap").value;
    howNumbInPasw = document.getElementById("forPaswNum").value;
    howSymbInPasw = document.getElementById("forPaswSym").value;
}

//        Advantage meniu Show / Hide

document.getElementById("showAdvance").addEventListener("change", updateVisibility);

function updateVisibility() {
    if (this.checked) {
        document.getElementById("advance").style.display = "block";
    } else {
        document.getElementById("advance").style.display = "none";
        document.getElementById("paswGen").disabled = false; 
        paswLength = document.getElementById("forPaswLength").value = 8;
        howCapsInPasw = document.getElementById("forPaswCap").value = 1;
        howNumbInPasw = document.getElementById("forPaswNum").value = 1;
        howSymbInPasw = document.getElementById("forPaswSym").value = 1;
    }
}

//        Selecting and testng values "Advantage options"

document.getElementById("forPaswLength").addEventListener("change", updateTextLen);
document.getElementById("forPaswCap").addEventListener("change", updateText);
document.getElementById("forPaswNum").addEventListener("change", updateText);
document.getElementById("forPaswSym").addEventListener("change", updateText);


 function updateTextLen() {
    readValues();
    console.log(typeof paswLength, paswLength)
    if (paswLength < 8 || paswLength > 128) {
        console.log("dfafasfasfsafasfas")
        document.getElementById("paswGen").disabled = true;
        document.getElementById("advanceLen").style.color = "red";
        document.getElementById("errorMsgL").innerHTML = "Wrong Length";
    }
    else {
        document.getElementById("paswGen").disabled = false;    
        document.getElementById("advanceLen").style.color = "black";  
        document.getElementById("errorMsgL").innerHTML = ""; 
    }
    updateText()
 }
 
function updateText() {
    readValues();
    
    let allow = paswLength - howCapsInPasw - howNumbInPasw - howSymbInPasw -1;
    console.log(allow, howCapsInPasw);
        if (allow < 0 || paswLength < 8 || paswLength > 128) {
        document.getElementById("errorMsg").innerHTML = "Too much characters";
        document.getElementById("paswGen").disabled = true;
        document.getElementById("advanceChar").style.color = "red";
        }
        else {
            document.getElementById("errorMsg").innerHTML = "";
            document.getElementById("paswGen").disabled = false;
            document.getElementById("advanceChar").style.color = "black";
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
    document.getElementById("showPasw").innerHTML = shuffledPasw;
    // console.log(shuffledPasw);
    document.getElementById("len").innerHTML = "Your Password Length Is: " + shuffledPasw.length;
}
