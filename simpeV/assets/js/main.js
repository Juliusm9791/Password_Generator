let charArray = ["qwertyuiopasdfghjklzxcvbnm", //0
                 "QWERTYUIOPASDFGHJKLZXCVBNM", //1
                 "1234567890",                 //2
                 "-=~!@#gebi%^&*()_+[]{}|?"]   //3
                 
let paswLength = 8;
let howLowInPasw = 5;
let howCapsInPasw = 1;
let howNumbInPasw = 1;
let howSymbInPasw = 1;
let validation = true;

// Read user input values 

function readValues() {
    paswLength = prompt("Enter Password length (8 - 128) characters",8);
    while (paswLength < 8 || paswLength >128) {
        paswLength = prompt("Enter Password length (8 - 128) characters",8);
    }

    howCapsInPasw = prompt("How many uppercase letters in password min: 1 and max: " + (paswLength - 3),1);
    while (howCapsInPasw < 1 || howCapsInPasw > (paswLength - 3)){
        howCapsInPasw = prompt("How many uppercase letters in password min: 1 and max: " + (paswLength - 3),1);
    }

    howNumbInPasw = prompt("How many numbers in password min: 1 and max: " + (paswLength - howCapsInPasw - 2),1);
    while (howNumbInPasw < 1 || howNumbInPasw > (paswLength - howCapsInPasw - 2)){
        howNumbInPasw = prompt("How many numbers in password min: 1 and max: " + (paswLength - howCapsInPasw - 2),1);
    }

    howSymbInPasw = prompt("How many symbols in password  min: 1 and max: " + (paswLength - howCapsInPasw - howNumbInPasw - 1),1);  
    while (howSymbInPasw < 1 || howSymbInPasw > (paswLength - howCapsInPasw - howNumbInPasw - 1)){
        howSymbInPasw = prompt("How many symbols in password  min: 1 and max: " + (paswLength - howCapsInPasw - howNumbInPasw - 1),1);  
    }

    howLowInPasw = paswLength - howCapsInPasw - howNumbInPasw -howSymbInPasw;
    alert("It will be " + howLowInPasw + " lowercase letter(s) in your password");
    
    validation = confirm("Your password length will be " + paswLength + " characters\nIt will include:\n" + 
    howLowInPasw + " lowercase letter,\n" + howCapsInPasw + " uppercase letters,\n" + howNumbInPasw + " numbers,\n"
    + howSymbInPasw + " symbols.");
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

let newPassword = "";

function genAndShow() {
    readValues();
    if (validation) {
    console.log(howLowInPasw, howCapsInPasw, howNumbInPasw, howSymbInPasw);
    let lowerLetters = pickRandom(howLowInPasw,0);
    let capInPasw = pickRandom(howCapsInPasw,1);
    let numbersInPasw = pickRandom(howNumbInPasw,2);
    let symbolInPasw = pickRandom(howSymbInPasw,3);
    newPassword = lowerLetters + capInPasw + numbersInPasw + symbolInPasw;
    let shuffledPasw = shuffle();
    document.getElementById("showPasw").innerHTML = shuffledPasw;
    document.getElementById("len").innerHTML = "Your Password Length Is: " + shuffledPasw.length;
    }
    else {
        alert("Try again")
    }
}
