const games = [

    //genshin
    { name: "Genshin Impact", url: "../giid/Gi.php" },
    { name: "Genshin", url: "../giid/Gi.php" },
    { name: "GI", url: "..giid/Gi.php" },

    //honkai star rail
    { name: "Honkai Star Rail", url: "../honkstar/hsr.php" },
    { name: "Honkai Star", url: "..honkstar/hsr.php" },
    { name: "Star Rail", url: "..honkstar/hsr.php" },
    { name: "HSR", url: "../honkstar/hsr.php" },

    //Blue Archive
    { name: "Blue Archive", url: "../BAid/Blue_A.php" },
    { name: "BA", url: "../BAid/Blue_A.php" },

    //Arknight
    { name: "Arknight", url: "../arkngt/ark.php" },
    { name: "Ark", url: "../arkngt/ark.php" },

    //Mobile Legend
    { name: "Mobile Legend", url: "../moblgn/mlbb.php" },
    { name: "ML", url: "../moblgn/mlbb.php" },

    //Honor of king
    { name: "Honor Of King", url: "../hahok/hok.php" },
    { name: "HOK", url: "../hahok/hok.php" },

    //Zenless zone zero
    { name: "Zenless Zone Zero", url: "../zenzonzen/zzz.php" },
    { name: "Zenless Zone", url: "../zenzonzen/zzz.php" },
    { name: "ZZZ", url: "../zenzonzen/zzz.php" },

    //Honkai impact
    { name: "Honkai Impact 3", url: "../hai3rd/hi3rd.php" },
    { name: "Honkai Impact 3rd", url: "../hai3rd/hi3rd.php" },
    { name: "Honkai Impact", url: "../hai3rd/hi3rd.php" },
    { name: "HI3", url: "../hai3rd/hi3rd.php" },

    //Wuthering Wave
    { name: "Wuthering Wave", url: "../wuthr/wuwa.php" },
    { name: "Wuthering", url: "../wuthr/wuwa.php" },
    { name: "Wuwa", url: "../wuthr/wuwa.php" },

    //Toram Online
    { name: "Toram Online", url: "../toramonline/toron.php" },
    { name: "Toram", url: "../toramonline/toron.php" },

    //Snow break
    { name: "Snow Break", url: "../snwbrkk/snwbrk.php" },

    //punishin gray raven
    { name: "PGR", url: "../pgrr/pgr.php" },
    { name: "Punishing", url: "../pgrr/pgr.php" },
    { name: "Punishin Gray Raven", url: "../pgrr/pgr.php" },

    

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