export function recentlyViewedCards(element) {
    let slideIndex = 1;
    const slides = element.getElementsByClassName("slides");
    const dots = element.getElementsByClassName("dot");
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    };

    function currentSlide(n) {
        showSlides(slideIndex = n);
    };

    function showSlides(n) {
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };
        for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        };
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex-1].className += " active";
    };

    const prev = element.querySelector(".prev");
    const next = element.querySelector(".next");

    prev?.addEventListener("click", () => plusSlides(-1));
    next?.addEventListener("click", () => plusSlides(1));

    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener("click", () => currentSlide(index + 1));
    });
};

