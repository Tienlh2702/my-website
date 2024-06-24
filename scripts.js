// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // change image every 2 seconds
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !subject || !message) {
            alert("Vui lòng điền đầy đủ thông tin.")
            event.preventDefault();
        } else {
            alert("Gửi thành công!");
        }
    })
})

// Blog Search
function searchBlog() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let articles = document.getElementsByTagName('article');
    for (let i = 0; i < articles.length; i++) {
        let title = articles[i].getElementsByTagName('h2')[0];
        if (title.innerHTML.toLowerCase().indexOf(input) > -1) {
            articles[i].style.display = "";
        } else {
            articles[i].style.display = "none";
        }
    }
}