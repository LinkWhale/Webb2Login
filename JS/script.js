
var randArray = [];


for(let i = 0; i < 10; i++) {
    
    let randInt = Math.floor(Math.random() * 101); //get a random number 0 - 100

    if (randArray.includes(randInt)) { //check if its already in the array, true = repeat the step
        i--;
    }   
    else {
        randArray.push(randInt); //if not add it 
    }
}

//.sort() doesnt work like i want it to so i made my own
function normalSort(array, maxNumber) {
    let newArray = []
    let c = 0;
    for(let i = 0; i < maxNumber + 1; i++) {
        if (array.includes(i)) { //check the if the current number is in the array, put it as the next element in the array
            newArray[c] = i;
            c++;
        }
    }
    return newArray; //returns the new array
}


function Validate() {

    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("password2");
    var termsChecked = document.getElementById("terms").checked

    var userIsCorrect = checkUsername(username);
    var emailIsCorrect = checkEmail(email);
    var passIsCorrect = checkPassword(password, repeatPassword);

    if(termsChecked != true) {
        alert("Accept Terms of Service & Conditions before continuing")
    }
    else if( userIsCorrect == true && emailIsCorrect == true && passIsCorrect == true && termsChecked == true) {
        window.location.href = "./html/registration.html"
    }
}


function checkUsername(id){
    if(id.value == "") {
        alert("That username is not available.");
        id.style.borderColor = "red";
        return false;
    }
    else {
        id.style.borderColor = "black";
        return true;
    }
}


function checkEmail(id){
    if(id.value.includes("@") && id.value[0] != "@" && id.value[id.value.length - 1] != "@") {
        id.style.borderColor = "black";
        return true;
    }
    else {
        id.style.borderColor = "red";
        id.style.borderBlockColor = "red";
        alert("E-mail must include an \"@\" sign and must start and end with a letter");
        return false;
    }
}


function checkPassword(id1, id2) {
    if(id1.value.length < 6 || id1.value != id2.value) {
        id1.style.borderColor = "red";
        id2.style.borderColor = "red";
        alert("Password denied. Make sure its at least 6 characters long and that both passwords are the same.");
        return false;
        }
        else {
            id1.style.borderColor = "black";
            id2.style.borderColor = "black";
            return true;
        }
}


document.getElementById("RandomArrays").innerHTML = `${randArray} <br> ${normalSort(randArray, 100)}`;
