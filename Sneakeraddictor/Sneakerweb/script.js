// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel1 = document.querySelector('.carousel1');
    const carouselItems1 = document.querySelectorAll('.carousel-item1');
    const prevButton = document.querySelector('.prev1');
    const nextButton = document.querySelector('.next1');

    let currentIndex = 0;

    const updateCarousel1 = () => {
        const width = carouselItems1[0].clientWidth;
        carousel1.style.transform = `translateX(${-currentIndex * width}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems1.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel1();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems1.length - 1;
        }
        updateCarousel1();
    });

    window.addEventListener('resize', updateCarousel1);
});
/*================*/

document.addEventListener('DOMContentLoaded', () => {
    const carousel2 = document.querySelector('.carousel2');
    const carouselItems2 = document.querySelectorAll('.carousel-item2');
    const prevButton = document.querySelector('.prev2');
    const nextButton = document.querySelector('.button2');

    let currentIndex = 0;

    const updateCarousel2 = () => {
        const width = carouselItems2[0].clientWidth;
        carousel2.style.transform = `translateX(${-currentIndex * width}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems2.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel2();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems2.length - 1;
        }
        updateCarousel2();
    });

    window.addEventListener('resize', updateCarousel2);
});
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const phonedetails = document.querySelector('.phone-details');

let currentPage = 1;

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    phonedetails.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < 3) {
    currentPage++;
    phonedetails.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
  }
});

/*==========================*/

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if(currentIndex > 0){
        currentIndex--;
    }else{
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if(currentIndex < slides.length - 1){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    updateSlider();
});

function updateSlider(){
    const slideWidth = slides[currentIndex].clientWidth;
    slideWidth.style.transform = 'translateX(-${slideWidth * currentIndex}px)';
}

/*=====================================*/
var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then(function(response){
        return response.json();
        //JSON.parse: JSON -> Javascript type
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('product-list').innerHTML = html;

    })
    .catch(function(err){
        alert('Error!!!');

    });

/*========================================*/

const content = document.getElementById("para");
const seeMoreBtn = document.getElementById("see-more-btn");

seeMoreBtn.addEventListener("click", function() {
    content.classList.toggle("expanded");

    if (content.classList.contains("expanded")) {
        seeMoreBtn.textContent = "Thu gọn";
    } else {
        seeMoreBtn.textContent = "Xem thêm";
    }
});


/*========================News-menu=========================*/

const carousel = document.getElementById('carousel-menu-news');

function leftclick(){
    carousel.scrollBy({left: -200, behavior: "smooth"});
}

function rightclick(){
    carousel.scrollBy({left: 200, behavior: "smooth"});
}


/*=========================Searching-box=====================*/

var modal = document.getElementById("searchModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

function submitSearch() {
var keyword = document.getElementById("searchInput").value;
if (keyword) {
alert("Bạn đã tìm kiếm: " + keyword);
modal.style.display = "none";
} else {
alert("Vui lòng nhập từ khóa tìm kiếm.");
}
}