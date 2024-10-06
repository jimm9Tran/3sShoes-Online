// Array of image sources
const images = ['./Product-details-img/Sb-dunk-image1.jpeg', './Product-details-img/Sb-dunk-image2.jpeg', './Product-details-img/Sb-dunk-image3.jpeg', './Product-details-img/Sb-dunk-image4.jpeg', './Product-details-img/Sb-dunk-image5.jpeg', './Product-details-img/Sb-dunk-image6.jpeg', './Product-details-img/Sb-dunk-image7.jpeg', './Product-details-img/Sb-dunk-image8.jpeg'];
let currentIndex = 0;

// Function to show an image based on index
function showImage(index) {
    currentIndex = index;
    document.getElementById('current-image').src = images[index];
    updateThumbnails();
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('current-image').src = images[currentIndex];
    updateThumbnails();
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('current-image').src = images[currentIndex];
    updateThumbnails();
}

// Function to update thumbnail border for the active image
function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.remove('active');
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }
    });
}

// Initialize the first image and active thumbnail
showImage(currentIndex);


const carousel = document.getElementById('thumbnails');

function leftclick(){
    carousel.scrollBy({left: -700, behavior: "smooth"});
}

function rightclick(){
    carousel.scrollBy({left: 700, behavior: "smooth"});
}