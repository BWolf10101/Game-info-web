// Fungsi untuk menampilkan konten informasi
function showInfo() {
    // Mengambil elemen konten informasi dan spesifikasi
    const infoContent = document.getElementById('info');
    const specsContent = document.getElementById('specs');

    // Menambahkan kelas 'active' ke konten informasi dan menghapusnya dari konten spesifikasi
    infoContent.classList.add('active');
    specsContent.classList.remove('active');
}

// Fungsi untuk menampilkan konten spesifikasi
function showSpecs() {
    // Mengambil elemen konten informasi dan spesifikasi
    const infoContent = document.getElementById('info');
    const specsContent = document.getElementById('specs');

    // Menambahkan kelas 'active' ke konten spesifikasi dan menghapusnya dari konten informasi
    specsContent.classList.add('active');
    infoContent.classList.remove('active');
}

// Menambahkan event listener untuk tombol
document.querySelector('.custom-button-info').addEventListener('click', showInfo);
document.querySelector('.custom-button-specs').addEventListener('click', showSpecs);