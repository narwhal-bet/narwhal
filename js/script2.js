
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // پنهان کردن تمام اسلایدها
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // بازگشت به اولین اسلاید
    
    slides[slideIndex - 1].style.display = "block"; // نمایش اسلاید فعلی
    setTimeout(showSlides, 300); // تغییر اسلاید بعدی هر 3 ثانیه
}

// شروع نمایش اسلایدها
showSlides();