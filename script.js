document.getElementById('ubahTeks').addEventListener('click', function() {
    // Hapus teks sebelumnya
    const textElement = document.getElementById('text');
    textElement.innerHTML = ''; // Kosongkan teks sebelumnya
    animateTyping('Teks telah diubah!');

    // Tambahkan animasi balon
    createBalloons(10); // Membuat 10 balon
});

function animateTyping(text) {
    const textElement = document.getElementById('text');
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 80);
}

// Memulai dengan teks awal
animateTyping('Halowww sayangggkuuuu');

// Fungsi untuk membuat beberapa balon
function createBalloons(count) {
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        // Atur posisi acak untuk setiap balon
        const startPosition = Math.random();
        if (startPosition < 0.5) {
            balloon.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
            balloon.style.bottom = '0px'; // Mulai dari bawah layar
        } else {
            balloon.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
            balloon.style.bottom = '-100px'; // Mulai dari di atas layar
        }

        // Atur ukuran acak untuk balon
        const size = Math.random() * 30 + 40; // Ukuran antara 40px hingga 70px
        balloon.style.width = size + 'px';
        balloon.style.height = size * 1.4 + 'px'; // Tinggi lebih besar dari lebar

        document.getElementById('balloonContainer').appendChild(balloon);
        
        // Set durasi animasi menjadi 5 detik
        balloon.style.animation = `rise 5s forwards, disappear 1s forwards`;

        // Hapus balon setelah animasi selesai
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}
