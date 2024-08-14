var typed = new Typed(".auto-types", {
    strings: ["Mæt Stack Web Developer", "Student", "Aconsultant", "blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
var typed = new Typed(".auto-type1", {
    strings: ["Hello...! ", "It's me"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme")
}

const icon1 = document.querySelector(".icon1")
const search = document.querySelector(".input")

icon1.onclick1 = function () {
    search.classList.toggle("active")
}

const ham = document.querySelector(".hamburger")
const nlists = document.querySelector(".ul1")

ham.onclick2 = function () {
    nlists.classList.toggle("ul")
}


// sign button popup
let popup1 = document.getElementById('Spopup')
function openPopup1() {
    popup1.classList.add('open-popup1')
}
function closePopup1() {
    popup1.classList.remove('open-popup1')
}

// hidden eye creation

function myHiddenEye() {
    var i = document.getElementById("SSI");
    var h1 = document.getElementById("Ehide1");
    var h2 = document.getElementById("Ehide2");

    if (i.type === 'password') {
        i.type = "text";
        h1.style.display = "block";
        h2.style.display = "none";
    }
    else {
        i.type = "password";
        h1.style.display = "none";
        h2.style.display = "block";
    }
}

// scrollTop Creation

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 70)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

//cross the signup page

var spage = document.querySelector('.first_button');
function funcross(){
    spage.style.opacity = '0'
}



function sendEmail() {
    Email.send({
        Host: "triptivishwakarma2004@gmail.com",
        Username: "tripti@gmail.com",
        Password: "tripti2004",
        To:'triptivishwakarma2004@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("textarea").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}


function validation() {
    var username = document.getElementById('name');
    var username = document.getElementById('email');
    var username = document.getElementById('Phone');
    var username = document.getElementById('textarea');
    if (username.value.trim() == "" || email.value.trim() == "") {
        alert("No blank values allowed");
        return false;
    }
    else {
        true;
    }
}
function validation() {
    var user = document.getElementById('name').value;
    var bemail = document.getElementById('email').value;
    var phoneno = document.getElementById('Phone').value;
    var phonenoc = document.getElementById('Phonec').value;
    var textareaA = document.getElementById('textarea').value;

    if (user == "") {
        document.getElementById('username').innerHTML = "**Please fill the username  field";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML = "**User length must be between 2 and 20";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('username').innerHTML = "**only characters are allowed";
        return false;
    }
    if (bemail == "") {
        document.getElementById('confirmemail').innerHTML = "**Please fill the email  field";
        return false;
    }
    if ((bemail.length <= 2) || (bemail.length > 20)) {
        document.getElementById('confirmemail').innerHTML = "**User length must be between 2 and 25";
        return false;
    }
    if (bemail.indexOf('@') <= 0) {
        document.getElementById('confirmemail').innerHTML = "**@ Invalid Position";
        return false;
    }
    if ((bemail.charAt(bemail.length - 4) != '.') && (bemail.charAt(bemail.length - 3) != '.')) {
        document.getElementById('confirmemail').innerHTML = "** . Invalid Position";
        return false;
    }


    if (phoneno == "") {
        document.getElementById('confirmnumber').innerHTML = "**Please fill the phoneno  field";
        return false;
    }
    if ((phoneno.length <= 2) || (user.length > 20)) {
        document.getElementById('confirmnumber').innerHTML = "**User length must be between 2 and 20";
        return false;
    }
    if (isNaN(phoneno)) {
        document.getElementById('confirmnumber').innerHTML = "**only numbers are allowed";
        return false;
    }
    if (phoneno.length != 10) {
        document.getElementById('confirmnumber').innerHTML = "**In phone number must have 10 digits";
        return false;
    }
    if (phonenoc == "") {
        document.getElementById('confirmnumberc').innerHTML = "**Please fill the phoneno  field";
        return false;
    }
    if ((phonenoc.length <= 2) || (user.length > 20)) {
        document.getElementById('confirmnumberc').innerHTML = "**User length must be between 2 and 20";
        return false;
    }
    if (phonenoc.length != 10) {
        document.getElementById('confirmnumberc').innerHTML = "**In phone number must have 10 digits";
        return false;
    }
    if (isNaN(phonenoc)) {
        document.getElementById('confirmnumberc').innerHTML = "**only numbers are allowed";
        return false;
    }
    if (phoneno != phonenoc) {
        document.getElementById('confirmnumber').innerHTML = "**Phone number are not matched";
        return false;
    }


    if (textareaA == "") {
        document.getElementById('confirmtextarea').innerHTML = "**Please fill the textarea field";
        return false;
    }
    if ((textareaA.length <= 2) || (user.length > 20)) {
        document.getElementById('confirmtextarea').innerHTML = "**User length must be between 2 and 20";
        return false;
    }

}