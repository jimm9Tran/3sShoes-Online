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


const priceRange = document.getElementById('priceRange');
        const minPrice = document.getElementById('minPrice');
        const maxPrice = document.getElementById('maxPrice');

        priceRange.addEventListener('input', function(){
        let value = priceRange.value;
        minPrice.textContent = (value / 1000000).toFixed(1);
    });



    window.onscroll = function() {
        var btn = document.getElementById("back-to-top");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
        } else {
            btn.style.display = "none";
    }
    };
    
    // Back-to-top function
    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

