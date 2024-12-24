function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
const correctPassword = "a30d70";

function checkPassword() {
const passwordInput = document.getElementById('password').value;
const errorMessage = document.getElementById('error-message');
const secretSection = document.getElementById('secretSection');


if (passwordInput === correctPassword) {
    // نمایش بخش ویژه
    secretSection.style.display = "block";
    errorMessage.textContent = ""; // پاک کردن پیام خطا
} else {
    // نمایش پیام خطا
    errorMessage.textContent = "رمز عبور نادرست است. لطفاً دوباره تلاش کنید.";
    secretSection.style.display = "none"; // مخفی کردن بخش ویژه
}
}