const priceRange = document.getElementById('priceRange');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');

priceRange.addEventListener('input', function(){
    let value = priceRange.value;
    minPrice.textContent = (value / 1000000).toFixed(1);
});

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