$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-xmark');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function () {
        $('.fa-bars').removeClass('fa-xmark');
        $('nav').removeClass('nav-toggle');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    })
})

function popup(message) {
    if (message == 'OK') {
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.popup .message').innerHTML = 'Email Sent Successfully! I will contact you soon';
        document.querySelector('.popup .message').style.color = '#2ecc71';
    } else {
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.popup .message').innerHTML = 'Email Not Sent | Try Again';
        document.querySelector('.popup .message').style.color = '#e74c3c';
    }
    setTimeout(() => {
        document.querySelector('.popup').classList.remove('active');
    }, 3000);
}
function sendEmail() {
    Email.send({
        SecureToken: "e99a9743-4cfc-4924-9947-4efe6b865e5cf",
        To: 'pratikgupta040819@gmail.com',
        From: document.getElementById('email').value,
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value + "<br>Email: " + document.getElementById('email').value + "<br>Message: " + document.getElementById("message").value,

    }).then(
        (message) => {
            popup(message);
        }
       
       );
}
