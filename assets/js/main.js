let charArray = ["qwertyuiopasdfghjklzxcvbnm", //0
                 "QWERTYUIOPASDFGHJKLZXCVBNM", //1
                 "1234567890",                 //2
                 "!@#$%&-"]                    //3

let paswLength = 8;
let capsInPasw = 1;
let numbInPasw = 1;
let charInPasw = 1;

// paswLength = prompt("Choose password length");
// capsInPasw = prompt("How many capsletters in password");
// numbInPasw = prompt("How many numbers in password");
// charInPasw = prompt("How many characters in password");

console.log(paswLength);

function pickRandom(x,y) {
    let pasw = "";
    // console.log(x);
     for (i = 0; i < x; i++) {
        let random = Math.floor((Math.random() * charArray[y].length));
        let charFromArray = charArray[y].charAt(random);
        // console.log(charFromArray)
        pasw += charFromArray;        
    }
    return pasw;
}

let lowerLetters = pickRandom((paswLength = paswLength - numbInPasw - capsInPasw - charInPasw),0);
let capInPasw = pickRandom(capsInPasw,1);
let numbersInPasw = pickRandom(numbInPasw,2);
let symbolInPasw = pickRandom(charInPasw,3);

let newPassword = lowerLetters + capInPasw + numbersInPasw + symbolInPasw;
console.log(newPassword);

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

let shuffledPasw = shuffle();
console.log(shuffledPasw);


