"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentlyViewedCards = recentlyViewedCards;
function recentlyViewedCards(element) {
    var slideIndex = 1;
    var slides = element.getElementsByClassName("slides");
    var dots = element.getElementsByClassName("dot");
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    var prev = element.querySelector(".prev");
    var next = element.querySelector(".next");
    prev === null || prev === void 0 ? void 0 : prev.addEventListener("click", function () { return plusSlides(-1); });
    next === null || next === void 0 ? void 0 : next.addEventListener("click", function () { return plusSlides(1); });
    Array.from(dots).forEach(function (dot, index) {
        dot.addEventListener("click", function () { return currentSlide(index + 1); });
    });
}
