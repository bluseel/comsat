var coll = document.querySelectorAll(".heading-of-sub-section");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const p = this.parentNode;
        p.classList.toggle("active");
    });
}
