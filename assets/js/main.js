let charArray = ["qwertyuiopasdfghjklzxcvbnm", //0
                 "QWERTYUIOPASDFGHJKLZXCVBNM", //1
                 "1234567890",                 //2
                 "-=~!@#$%^&*()_+[]{}|?"]   //3

let paswLength = 8;
let howCapsInPasw = 1;
let howNumbInPasw = 1;
let howSymbInPasw = 1;

function $(id) {
   return document.getElementById(id);
}

function readValues() {
    paswLength = $("forPaswLength").value;
    // console.log(paswLength);
    howCapsInPasw = $("forPaswCap").value;
    howNumbInPasw = $("forPaswNum").value;
    howSymbInPasw = $("forPaswSym").value;
}

//        Advantage meniu Show / Hide

$("showAdvance").addEventListener("change", updateVisibility);

function updateVisibility() {
    if (this.checked) {
        $("advance").style.display = "block";
    } else {
        $("advance").style.display = "none";
        $("paswGen").disabled = false; 
        paswLength = $("forPaswLength").value = 8;
        howCapsInPasw = $("forPaswCap").value = 1;
        howNumbInPasw = $("forPaswNum").value = 1;
        howSymbInPasw = $("forPaswSym").value = 1;
        $("advanceLen").style.color = "black";  
        $("errorMsgL").innerHTML = ""; 
        $("errorMsg").innerHTML = "";
        $("advanceChar").style.color = "black";
    }
}

//        Selecting and testng values "Advantage options"

$("forPaswLength").addEventListener("change", updateTextLen);
$("forPaswCap").addEventListener("change", updateText);
$("forPaswNum").addEventListener("change", updateText);
$("forPaswSym").addEventListener("change", updateText);


 function updateTextLen() {
    readValues();
    console.log(typeof paswLength, paswLength)
    if (paswLength < 8 || paswLength > 128) {
        console.log("dfafasfasfsafasfas")
        // $("paswGen").style.backgroundColor = "#aaaaaa";
        $("advanceLen").style.color = "red";
        $("errorMsgL").innerHTML = "Wrong Length";
        $("paswGen").disabled = true;
    }
    else {
        // $("paswGen").style.backgroundColor = "#80000";
        $("advanceLen").style.color = "black";  
        $("errorMsgL").innerHTML = ""; 
        $("paswGen").disabled = false;    
    }
    updateText()
 }
 
function updateText() {
    readValues();
    
    let allow = paswLength - howCapsInPasw - howNumbInPasw - howSymbInPasw -1;
    console.log(allow, howCapsInPasw);
        if (allow < 0 || paswLength < 8 || paswLength > 128) {
        $("errorMsg").innerHTML = "Too many characters";
        // $("paswGen").style.backgroundColor = "#aaaaaa";
        $("advanceChar").style.color = "red";
        $("paswGen").disabled = true;
        }
        else {
            $("errorMsg").innerHTML = "";
            $("advanceChar").style.color = "black";
            // $("paswGen").style.backgroundColor = "#80000";
            $("paswGen").disabled = false;
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
    $("showPasw").innerHTML = shuffledPasw;
    // console.log(shuffledPasw);
    $("len").innerHTML = "Your Password Length Is: " + shuffledPasw.length;
}
