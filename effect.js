// Simple 3D tilt effect for elements with class "tilt"
document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    });
});
// ...existing code...
// Scroll Up Button functionality
const scrollUpBtn = document.getElementById('scrollUpBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};
scrollUpBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
// ...existing code...