const games = [

    { name: "Genshin Impact", url: "giid/Genshin_Impact.php" },

    { name: "Honkai Star Rail", url: "../honkstar/honSta.php" },

    { name: "Blue Archive", url: "bdaftar game/Blue_A.php" },

    { name: "Arknight", url: "daftar game/arkn.php" },

    { name: "Mobile Legend", url: "daftar game/Mob_lagd.php" },

    { name: "Honor Of King", url: "daftar game/haok.php" },

    { name: "Zenless Zone Zero", url: "daftar game/zen_zon.php" },

    { name: "Fate Grand Order", url: "daftar game/fgoid.php.php" },

    { name: "Wuthering Wave", url: "wuthe.php" },

    { name: "Toram Online", url: "daftar game/toron.php" },

    { name: "Snow Break", url: "daftar game/snwbrk.php" },

    { name: "PGR", url: "pgrid.php" }

];


const searchForm = document.getElementById('search-form');

const searchInput = document.getElementById('search-input');


searchForm.addEventListener('submit', (event) => {

    event.preventDefault(); // Mencegah form dari pengiriman

    const searchTerm = searchInput.value.toLowerCase();

    const foundGame = games.find(game => game.name.toLowerCase() === searchTerm);


    if (foundGame) {

        window.location.href = foundGame.url; // Arahkan ke halaman game yang ditemukan

    } else {

        alert('Tidak di temukan'); // Tampilkan pesan jika tidak ada hasil

    }

});