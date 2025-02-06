window.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
        document.querySelector('header').classList.add('sticky', 'fadeInDown', 'animated');
    } else {
        document.querySelector('header').classList.remove('sticky', 'fadeInDown', 'animated');
    }
});
document.getElementById("toggle-btn").addEventListener("click", function() {
    document.querySelector(".page-detail").classList.toggle("active");
});