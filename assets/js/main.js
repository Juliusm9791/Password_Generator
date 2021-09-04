let charArray = ["qwertyuiopasdfghjklzxcvbnm", //0
                 "QWERTYUIOPASDFGHJKLZXCVBNM", //1
                 "1234567890",                 //2
                 "-=~!@#$%^&*()_+[]{}|?"]   //3

let paswLength;
let howCapsInPasw;
let howNumbInPasw;
let howSymbInPasw;

function readValues() {
    paswLength = document.getElementById("forPaswLength").value;
    // console.log(paswLength);
    howCapsInPasw = document.getElementById("forPaswCap").value;
    howNumbInPasw = document.getElementById("forPaswNum").value;
    howSymbInPasw = document.getElementById("forPaswSym").value;
}

document.getElementById("advance").addEventListener("change", updateText);

document.getElementById("showAdvance").addEventListener("change", updateVisibility);

function updateVisibility() {
    if (this.checked) {
        document.getElementById("advance").style.display = "block";
    } else {
        document.getElementById("advance").style.display = "none";
    }

}

function updateText() {
    readValues();
    document.getElementById("changePaswLabel").textContent = "Password Length (8-128): " + paswLength;
    document.getElementById("changeCapLabel").textContent = "Cap Lettes in Password: " + howCapsInPasw;
    document.getElementById("changeNumLabel").textContent = "Numbers in Password: " + howNumbInPasw;
    document.getElementById("changeSymLabel").textContent = "Symbols in Password: " + howSymbInPasw;
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
    console.log(newPassword);
    let shuffledPasw = shuffle();
    document.getElementById("showPasw").innerHTML = shuffledPasw;
    console.log(shuffledPasw);
    document.getElementById("len").innerHTML = shuffledPasw.length;
}
