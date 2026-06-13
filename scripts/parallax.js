const backgroundElement = document.getElementById('parallax');

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const backgroundY = scrollPosition * 0.5;
    backgroundElement.style.transform = `translateY(calc(-50% + ${backgroundY}px))`;
})