// --- OUTPUT AWAL (LATIHAN 1 & 2) ---
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

setTimeout(() => {
    const namaPengguna = prompt("Masukkan nama Anda (Latihan 2):", "");
    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
    }
}, 300);

// --- LATIHAN 4 ---
function latihan4() {
    const inputNilai = prompt("Masukkan nilai (0-100):");
    const nilai = Number(inputNilai);
    if (!inputNilai || isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert("Input nilai tidak valid.");
    } else if (nilai >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// --- LATIHAN 5 ---
function latihan5() {
    const pilihan = prompt("Masukkan angka 1-5:");
    switch (pilihan) {
        case "1": alert("Bilangan satu"); break;
        case "2": alert("Bilangan dua"); break;
        case "3": alert("Bilangan tiga"); break;
        case "4": alert("Bilangan empat"); break;
        case "5": alert("Bilangan lima"); break;
        default: alert("Pilihan tidak tersedia");
    }
}

// --- LATIHAN 6 (Menggunakan Eksperimen 8: cekGenap) ---
// Eksperimen Mandiri 8
function cekGenap(angka) {
    return angka % 2 === 0;
}

function prosesCekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");
    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (cekGenap(angka)) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// --- LATIHAN 7 ---
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// --- LATIHAN 8 (Termasuk Eksperimen 10 di HTML) ---
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}


// ==========================================
// F. MINI PROJECT KALKULATOR NILAI
// ==========================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C"; 
    if (nilai >= 50) return "D";
    return "E";
}

// Uji skenario default Mini Project (Muncul di Console saat halaman dimuat)
const tugas_def = 85;
const uts_def = 78;
const uas_def = 88;
const akhir_def = hitungNilaiAkhir(tugas_def, uts_def, uas_def);

console.log("=== Hasil Uji Default Mini Project ===");
console.log("Nilai akhir:", akhir_def.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir_def));
console.log("Status:", akhir_def >= 60 ? "Lulus" : "Belum lulus");

function prosesNilaiForm() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;
    
    // Eksperimen Mandiri 9: Validasi form kolom tidak boleh kosong
    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        alert("Kolom nilai tidak boleh kosong!");
        return;
    }

    const valTugas = Number(inputTugas);
    const valUts = Number(inputUts);
    const valUas = Number(inputUas);

    // Validasi rentang 0-100
    if (valTugas < 0 || valTugas > 100 || valUts < 0 || valUts > 100 || valUas < 0 || valUas > 100) {
        alert("Nilai harus berada pada rentang 0-100.");
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(valTugas, valUts, valUas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum Lulus";

    document.getElementById("hasilNilaiAkhir").innerHTML = 
        `<h3>Hasil Kelulusan:</h3>
         <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p>
         <p>Predikat: ${predikat}</p>
         <p>Status: <b>${status}</b></p>`;
}


// ==========================================
// G. EKSPERIMEN MANDIRI (Tombol Ekstra)
// ==========================================

// Eksperimen Mandiri 1
function eksperimen1() {
    const inputA = prompt("Masukkan angka pertama:");
    const inputB = prompt("Masukkan angka kedua:");
    const a = Number(inputA);
    const b = Number(inputB);
    
    if (isNaN(a) || isNaN(b) || inputA === "" || inputB === "") {
        alert("Harap masukkan angka yang valid.");
        return;
    }
    
    console.log("--- Eksperimen 1: Kalkulator ---");
    console.log("Angka A:", a, "| Angka B:", b);
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
    alert("Cek tab Console (Klik kanan -> Inspect -> Console) untuk melihat hasil.");
}

// Eksperimen Mandiri 7
function eksperimen7() {
    console.log("--- Eksperimen 7: Tabel Perkalian 7 ---");
    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }
    alert("Tabel perkalian 7 telah dicetak di Console.");
}

// Eksperimen Mandiri 11
function eksperimen11() {
    const h1 = document.getElementById('judul-h1');
    if (h1.style.display === "none") {
        h1.style.display = "block";
    } else {
        h1.style.display = "none";
    }
}