function greetUser(fName){
   document.getElementById('output').textContent="Hello,"+ 
    fName;
    
}

function changeText() {
    document.getElementById('message').innerText = "Hello, World!";
}

function showFullName() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    if (firstName === "" || lastName === "") {
        document.getElementById('result').innerText = "Enter both first and last name";
        return;
    }
    const fullName = `${firstName} ${lastName}`;
    document.getElementById('result').innerText = `Full Name: ${fullName}`;
}

function updateTitle() {
    const newTitle = document.getElementById('inputField').value;
    if (newTitle.trim() === "") {
        alert("Please enter a valid title.");
        return;
    }
    document.getElementById('title').innerText = newTitle;
}

function concatenateStrings() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    const combined = string1 + " " + string2;
    document.getElementById('combinedText').innerText = combined;
}

const button = document.getElementById('changeBackground');
        const colorBox = document.getElementById('colorBox');

        button.addEventListener('click', function () {
            colorBox.style.backgroundColor = 'blue';
        });

//greetUser("Harry")