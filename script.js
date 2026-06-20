// Menunggu hingga seluruh isi HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // ==================================================
    // 1. Animasi Angka Statistik (Khusus halaman index)
    // ==================================================

    // Mengambil semua elemen yang memiliki class "stat-number"
    const counters = document.querySelectorAll('.stat-number');

    // Menjalankan kode hanya jika elemen ditemukan
    if (counters.length > 0) {

        // Melakukan perulangan pada setiap elemen statistik
        counters.forEach(counter => {

            // Fungsi untuk memperbarui angka secara bertahap
            const updateCount = () => {

                // Mengambil nilai target dari atribut data-target
                const target = +counter.getAttribute('data-target');

                // Mengambil nilai angka yang sedang tampil
                const count = +counter.innerText;

                // Menentukan kecepatan pertambahan angka
                const speed = target / 100; 

                // Jika angka saat ini masih lebih kecil dari target
                if (count < target) {

                    // Jika target berupa desimal
                    if(target % 1 !== 0) {
                        counter.innerText = target;
                    } else {

                        // Menambah angka sedikit demi sedikit
                        counter.innerText = Math.ceil(count + speed);

                        // Mengulang fungsi setiap 20 milidetik
                        setTimeout(updateCount, 20);
                    }

                } else {

                    // Menampilkan angka akhir
                    counter.innerText = target + (target > 100 ? '+' : '');
                }
            };

            // Memulai animasi angka
            updateCount();
        });
    }

    // ============================================
    // 2. Event Tombol Beli pada Halaman Produk
    // ============================================

    // Mengambil semua tombol dengan class "btn-beli"
    const tombolBeli = document.querySelectorAll('.btn-beli');

    // Menambahkan event klik pada setiap tombol
    tombolBeli.forEach(button => {

        button.addEventListener('click', (e) => {

            // Mengambil nama produk dari card yang diklik
            const namaProduk = e.target.parentElement
                                .querySelector('.card-title')
                                .innerText;

            // Menampilkan notifikasi produk berhasil ditambahkan
            alert(`Produk "${namaProduk}" berhasil ditambahkan ke keranjang belanja!`);
        });
    });

    // ============================================
    // 3. Event Submit Form pada Halaman Kontak
    // ============================================

    // Mengambil form kontak berdasarkan ID
    const contactForm = document.getElementById('contactForm');

    // Menjalankan kode jika form ditemukan
    if (contactForm) {

        // Menambahkan event saat form dikirim
        contactForm.addEventListener('submit', (e) => {

            // Mencegah halaman melakukan reload
            e.preventDefault();

            // Mengambil nilai input nama
            const nama = document.getElementById('name').value;

            // Menampilkan pesan sukses
            alert(`Halo ${nama}, pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.`);

            // Mengosongkan kembali seluruh input form
            contactForm.reset();
        });
    }
});