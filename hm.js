// script.js
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item figure');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% dari elemen harus terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tambahkan kelas visible
                observer.unobserve(entry.target); // Hentikan pengamatan setelah terlihat
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item); // Mulai mengamati setiap item
    });
});