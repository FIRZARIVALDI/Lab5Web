# Laporan Praktikum 5 - JavaScript Dasar dan Manipulasi HTML

**Mata Kuliah:** Pemrograman Web  
**Nama:** [M.FIRZA RIVALDI]  
**NIM:** [312510082]  

---

## A. Tujuan Praktikum
Berdasarkan modul, tujuan dari praktikum ini adalah:
1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

---


## B. Langkah Kerja dan Hasil Latihan (Screenshot)

### 1. Latihan 1 & 2: Output, Alert, dan Prompt
**Langkah Kerja:** Menampilkan pesan awal di halaman HTML dan Console, lalu menggunakan `prompt` untuk meminta input nama pengguna, dan menyapanya dengan `alert` serta mengubah teks elemen HTML.

**Hasil Screenshot:**
*(Halaman Web dan Alert)*
![Latihan 1 dan 2]
<img width="1236" height="244" alt="Screenshot 2026-10-21 182831" src="https://github.com/user-attachments/assets/33efb4d0-12ad-4e92-94a4-821471c43112" />
<img width="1246" height="184" alt="Screenshot 2026-10-21 183104" src="https://github.com/user-attachments/assets/4f7b60a3-0db4-41ea-90c3-9089f350a824" />




*(Output tab Console "Hello World")*
![Console Latihan 1]
<img width="527" height="167" alt="Screenshot 2026-10-21 183114" src="https://github.com/user-attachments/assets/3be9be98-1b49-4fd8-8e91-3a3bacdaa316" />


### 2. Latihan 3 & Eksperimen Mandiri 1, 7: Kalkulator & Perulangan
**Langkah Kerja:** Membuat kalkulator aritmetika sederhana yang mengambil dua nilai dari pengguna menggunakan `prompt` (diubah menjadi tipe number), serta menggunakan perulangan `for` untuk mencetak tabel perkalian 7. Keduanya dicetak ke Console.

**Hasil Screenshot (Console):**
![Latihan 3 dan Tabel 7]
<img width="651" height="619" alt="Screenshot 2026-10-21 175714" src="https://github.com/user-attachments/assets/c8f141cb-675b-481a-8fb2-7384f64ac9f3" />


### 3. Latihan 4 & 5: Seleksi Kondisi (if-else & switch)
**Langkah Kerja:** Menggunakan `if-else` untuk mengecek kelulusan (>= 60 lulus) dan menggunakan `switch` untuk menampilkan teks bilangan 1-5 berdasarkan input dari prompt.

**Hasil Screenshot (Pop-up Alert):**
![Latihan 4 dan 5]
<img width="1268" height="397" alt="Screenshot 2026-10-21 112343" src="https://github.com/user-attachments/assets/d168a06d-f257-47f3-ba70-9daa30eac9d4" />
<img width="1283" height="421" alt="Screenshot 2026-10-21 112352" src="https://github.com/user-attachments/assets/8a168f8b-2f1d-4a57-8cc9-5e5d00868725" />
<img width="1310" height="427" alt="Screenshot 2026-10-21 112407" src="https://github.com/user-attachments/assets/4ec3bb88-2c80-44e1-aa9c-5c18cdbc17f6" />
<img width="1249" height="423" alt="Screenshot 2026-10-21 112416" src="https://github.com/user-attachments/assets/7869834c-f78c-4274-9202-2266349ef117" />


### 4. Latihan 6 & Eksperimen Mandiri 8: Cek Bilangan Genap/Ganjil
**Langkah Kerja:** Membuat form input angka. Saat tombol diklik, program memanggil fungsi terpisah `cekGenap()` untuk memeriksa sisa bagi angka (modulus) dan menampilkan hasilnya (genap/ganjil) di bawah tombol.

**Hasil Screenshot:**
![Latihan 6]
<img width="643" height="215" alt="Screenshot 2026-10-21 112442" src="https://github.com/user-attachments/assets/d151cca6-b95a-4a2d-a819-6f636214a0f1" />


### 5. Latihan 7: Ubah Warna Latar
**Langkah Kerja:** Membuat fungsi `ubahWarnaLatar()` yang menerima parameter nama warna. Fungsi dipanggil oleh tiga tombol berbeda untuk memanipulasi DOM `document.body.style.backgroundColor`.

**Hasil Screenshot:**
![Latihan 7]
<img width="437" height="159" alt="Screenshot 2026-10-21 112449" src="https://github.com/user-attachments/assets/8abc670d-5c12-4ea4-94b1-58f17327ac71" />
<img width="435" height="164" alt="Screenshot 2026-10-21 112454" src="https://github.com/user-attachments/assets/715db090-8f20-4c6d-875e-7bbb55c45f8e" />
<img width="404" height="148" alt="Screenshot 2026-10-21 112500" src="https://github.com/user-attachments/assets/d3ed8d60-1dd9-42aa-a5f2-b20c4ccd72d2" />


### 6. Latihan 8 & Eksperimen Mandiri 10: Daftar Menu Makanan
**Langkah Kerja:** Membuat form checkbox berisi daftar menu (dengan tambahan menu Es Teh Manis dan Nasi Goreng). Menggunakan event listener `change` dan looping `forEach` untuk menjumlahkan `value` (harga) otomatis saat dicentang.

**Hasil Screenshot:**
![Latihan 8]
<img width="476" height="276" alt="Screenshot 2026-10-21 112619" src="https://github.com/user-attachments/assets/54fbdfbe-1638-45fb-88cb-0dfbb6e4463e" />


### 7. Mini Project & Eksperimen Mandiri 9: Kalkulator Nilai Mahasiswa
**Langkah Kerja:** Membangun kalkulator dengan input form untuk Nilai Tugas, UTS, dan UAS. 
- Menerapkan validasi agar input tidak boleh kosong dan harus berada di rentang 0-100.
- Memisahkan proses perhitungan `hitungNilaiAkhir()` dan `tentukanPredikat()` dari tampilan UI.
- Hasil Nilai Akhir, Predikat, dan Status ditampilkan menggunakan manipulasi DOM.

**Hasil Screenshot (Halaman HTML & Console Default):**
![Mini Project HTML]<img width="1056" height="440" alt="image" src="https://github.com/user-attachments/assets/9bc3afd6-f9ee-4802-b01a-dba4fd7005d2" />

![Mini Project Console]<img width="720" height="617" alt="Screenshot 2026-10-21 112637" src="https://github.com/user-attachments/assets/32b96d0c-d8ad-429b-b719-281b827217dd" />


### 8. Eksperimen Mandiri 11: Menyembunyikan Elemen
**Langkah Kerja:** Menambahkan tombol yang menggunakan style `display: none` atau `display: block` untuk menyembunyikan dan menampilkan kembali judul H1 pada halaman.

**Hasil Screenshot:**
![Eksperimen 11]
<img width="1260" height="490" alt="Screenshot 2026-10-21 175437" src="https://github.com/user-attachments/assets/4ebb8832-36f5-4547-8c77-b0f82f1ec83f" />
<img width="1250" height="480" alt="Screenshot 2026-10-21 175501" src="https://github.com/user-attachments/assets/d1708bdd-5a19-4e09-9d8e-994ee1f0d3d3" />
<img width="1229" height="371" alt="Screenshot 2026-10-21 175515" src="https://github.com/user-attachments/assets/e3a1d1b7-d6b9-4a72-9e11-46a4e2ad1d1c" />
<img width="692" height="275" alt="Screenshot 2026-10-21 175626" src="https://github.com/user-attachments/assets/f6b63a26-e9ce-49aa-bdc6-3624bdcec990" />
<img width="651" height="619" alt="Screenshot 2026-10-21 175714" src="https://github.com/user-attachments/assets/b92dfd2b-d370-44be-84d8-19ab94440fc0" />
<img width="653" height="401" alt="Screenshot 2026-10-21 175817" src="https://github.com/user-attachments/assets/804fcb41-a4ee-414b-b207-0991f0fb7a77" />
