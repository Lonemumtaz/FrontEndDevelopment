// Welcome alert and name prompt
window.onload = function() {
    alert("Welcome to my Profile!");
    let userName = getCookie("userName");
    
    if (!userName) {
        userName = prompt("Please enter your name:", "");
        if (userName) {
            setCookie("userName", userName, 7);
        }
    }
    
    if (userName) {
        document.getElementById("welcomeMessage").innerHTML = "Hello, " + userName + "!";
    }
};

// Profile object
const profile = {
    name: "MUMTAZ LONE",
    age: 19,
    course: "Web Development"
};

// Functions for interactivity
function showProfile() {
    alert(`Name: ${profile.name}\nAge: ${profile.age}\nCourse: ${profile.course}`);
}

function changeParagraph() {
    const para = document.querySelector('.about-text');
    para.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    para.style.fontSize = '20px';
    para.innerHTML = "Thanks for visiting my profile! I love creating web applications.";
}

function validateForm(event) {
    const nameInput = document.getElementById("username");
    if (nameInput.value.trim() === "") {
        alert("Username cannot be empty!");
        event.preventDefault();
        return false;
    }
    return true;
}

function changeBackground() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Cookie utilities
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}