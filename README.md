# Technical Test Development

Dokumen ini berisi solusi lengkap untuk Technical Test yang mencakup pengembangan Backend API, Skrip Otomatisasi Sistem, dan Pengelolaan Database SQL.

## Struktur Proyek

Proyek ini dibagi menjadi tiga bagian utama sesuai dengan instruksi soal:

- backend-dev/ : Solusi Untuk Soal No. 1 (Express.js API & Frontend).
- automation-testing/ : Solusi Untuk Soal No. 2 (System Monitoring & Cron).
- database-query/ : Solusi untuk Soal No. 3 (SQL Scripts berdasarkan data tabel).

## Persiapan dan Instalasi

Pastikan Node.js (versi 14+) sudah terinstal.

1. Instal Dependensi Backend:
   ```
   cd backend-dev
   npm install
   ```

2. Instal Dependensi Automation:
    ```
   cd ../automation-testing
   npm install
    ```

## Panduan Menjalankan Aplikasi

### 1. Backend Development (Soal No. 1)
Menyediakan API data karyawan dan halaman web statis.

- Cara Jalankan:
    ```
  npm run dev
    ```

- Akses:
  Buka browser dan kunjungi http://localhost:3000

### 2. Automation Testing (Soal No. 2)
Sistem otomatis untuk memantau RAM server dan membersihkan log lama.

- Resource yang diambil:
  Data RAM sistem (Total, Used, Free Memory) menggunakan modul OS bawaan.

- Jadwal Cron:
  - Collector (Pengumpul Data): Berjalan pukul 08:00, 12:00, dan 15:00 WIB.
  - Cleanser (Pembersih Data): Berjalan pukul 00:00 WIB (Menghapus file > 30 hari).

- Cara Jalankan:
    ```
  node src/main.js
    ```

- Catatan Pengujian:
  Saya membuat folder ```/output``` untuk mensimulasikan ```/home/cron``` di Linux

### 3. Database Query (Soal No. 3)
Kumpulan skrip SQL untuk manipulasi data karyawan.

- Urutan Eksekusi:
  1. Jalankan "1-migration.sql" untuk membuat tabel.
  2. Jalankan "2-seeding" untuk mengisi data.
  3. Jalankan "3-queries" untuk melihat solusi tugas 1 sampai 5.

## Catatan Teknis dan Asumsi

1. Logika Automation:
   - Skrip Cleanser menggunakan atribut "mtimeMs" (Modified Time) untuk menentukan umur file. File hanya akan dihapus jika tidak dimodifikasi dalam 30 hari terakhir.
   - Skrip menggunakan "path.join" untuk memastikan kompatibilitas path antara Windows dan Linux (/home/cron).

2. Logika SQL Task 3 (Total Salary 2021):
   - Perhitungan didasarkan pada karyawan yang aktif bekerja selama periode tahun 2021.
   - Kriteria aktif: Tanggal bergabung (Join Date) sebelum atau pada tahun 2021, DAN (belum keluar ATAU keluar setelah tahun 2021 dimulai).

3. Logika SQL Task 5 (Subquery):
   - Menggunakan subquery sebagai tabel turunan untuk memfilter karyawan dengan posisi 'Engineer' terlebih dahulu, baru kemudian memfilter berdasarkan pengalaman kerja.