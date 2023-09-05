// image listener

var coll = document.querySelectorAll(".heading-of-sub-section");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const p = this.parentNode;
        p.classList.toggle("active");
    });

    
    // image listener
    const currentImage = coll[i].querySelector('.right-arrow');
    const originalSrc = currentImage.src;
    const hoverSrc = 'rs/white-arrow.svg';

    coll[i].addEventListener('mouseenter', function () {
        currentImage.src = hoverSrc;
    });
    coll[i].addEventListener('mouseleave', function () {
        currentImage.src = originalSrc;
    });
}

