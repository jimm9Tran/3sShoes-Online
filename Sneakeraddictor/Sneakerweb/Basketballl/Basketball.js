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


/*====================See-more=========================*/

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