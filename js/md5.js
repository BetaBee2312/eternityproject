document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hash password menggunakan MD5
    const hashedPassword = CryptoJS.MD5(password).toString();

    // Tampilkan hasil (untuk demonstrasi, jangan lakukan ini di produksi)
    console.log('Username:', username);
    console.log('Hashed Password (MD5):', hashedPassword);

    // Di sini Anda dapat melanjutkan untuk mengirim data ke server
});