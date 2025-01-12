const games = [

    //genshin
    { name: "Genshin Impact", url: "daftar_game/giid/Gi.php" },
    { name: "Genshin", url: "daftar_game/giid/Gi.php" },
    { name: "GI", url: "daftar_game/giid/Gi.php" },

    //honkai star rail
    { name: "Honkai Star Rail", url: "daftar_game/honkstar/hsr.php" },
    { name: "Honkai Star", url: "daftar_game/honkstar/hsr.php" },
    { name: "Star Rail", url: "daftar_game/honkstar/hsr.php" },
    { name: "HSR", url: "daftar_game/honkstar/hsr.php" },

    //Blue Archive
    { name: "Blue Archive", url: "daftar_game/Blue_A.php" },
    { name: "BA", url: "daftar_game/Blue_A.php" },

    //Arknight
    { name: "Arknight", url: "daftar_game/ark.php" },
    { name: "Ark", url: "daftar_game/ark.php" },

    //Mobile Legend
    { name: "Mobile Legend", url: "daftar_game/mlbb.php" },
    { name: "ML", url: "daftar_game/mlbb.php" },

    //Honor of king
    { name: "Honor Of King", url: "daftar_game/hok.php" },
    { name: "HOK", url: "daftar_game/hok.php" },

    //Zenless zone zero
    { name: "Zenless Zone Zero", url: "daftar_game/zzz.php" },
    { name: "Zenless Zone", url: "daftar_game/zzz.php" },
    { name: "ZZZ", url: "daftar_game/zzz.php" },

    //Honkai impact
    { name: "Honkai Impact 3", url: "daftar_game/hi3rd.php" },
    { name: "Honkai Impact 3rd", url: "daftar_game/hi3rd.php" },
    { name: "Honkai Impact", url: "daftar_game/hi3rd.php" },
    { name: "HI3", url: "daftar_game/hi3rd.php" },

    //Wuthering Wave
    { name: "Wuthering Wave", url: "daftar_game/wuwa.php" },
    { name: "Wuthering", url: "daftar_game/wuwa.php" },
    { name: "Wuwa", url: "daftar_game/wuwa.php" },

    //Toram Online
    { name: "Toram Online", url: "daftar_game/toron.php" },
    { name: "Toram", url: "daftar_game/toron.php" },

    //Snow break
    { name: "Snow Break", url: "daftar_game/snwbrk.php" },

    //punishin gray raven
    { name: "PGR", url: "daftar_game/pgr.php" },
    { name: "Punishing", url: "daftar_game/pgr.php" },
    { name: "Punishin Gray Raven", url: "daftar_game/pgr.php" },

    

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