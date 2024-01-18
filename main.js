(function () {
        var scroll = new LocomotiveScroll();
    })();

var typed = new Typed(".text", {
    strings: ["DevOps Engineer", "Cloud Engineer", "Full Stack Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
 });

var cursorDot = document.querySelector(".cursor-dot");
var cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    var posX = e.clientX;
    var posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});
