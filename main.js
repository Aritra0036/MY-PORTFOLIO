let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            })
        }
        
    });
}

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navber.classList.toggle('active');
// }
menuIcon.onclick = (e) => {
    e.stopPropagation(); 
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if (!navber.contains(e.target) && e.target !== menuIcon) {
        navber.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

window.addEventListener('scroll', () => {
    navber.classList.remove('active');
    menuIcon.classList.remove('bx-x');
});


function sendEmail() {
    const recipient = "aritra0036@gmail.com";
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !subject || !message) {
        alert("Please fill in all fields before Submit.");
        return false;
    }
    const emailBody = `From: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    return false;
}

  