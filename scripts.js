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

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Form Validation with Ajax
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData();
        fetch("submit_form.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Gửi thành công!");
                    form.reset();
                } else {
                    alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
                }
            })
            .catch(error => {
                console.error("Lỗi:", error);
                alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
            })
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

// Blog Pagination
function paginate(pageNum){

}

// Comment Functionality
function postComment(){
    
}