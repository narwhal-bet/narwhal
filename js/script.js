const images = [
    { src: 'سیگنال/IMG_20241221_171316_928.jpg', name: '1' },
    { src: 'سیگنال/IMG_20241221_171318_287.jpg', name: 'نام تصویر 2' },
    { src: 'سیگنال/IMG_20241221_171316_928.jpg', name: 'نام تصویر 3' },
    { src: 'سیگنال/IMG_20241217_174802_429.jpg', name: 'نام تصویر 4' }
];

let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const imageName = document.getElementById('imageName');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    galleryImage.src = images[currentIndex].src;
    imageName.textContent = images[currentIndex].name;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// به‌روزرسانی تصویر اولیه


updateImage();
