const dataPenjualanPakAldi = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High ',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90,
  },
];

// arrow function getTotalPenjualan dengan satu parameter (dataPenjualan)
getTotalPenjualan = (dataPenjualan) => {
  // jika parameter kosong (undefined) maka kondisi ini akan dijalankan.
  if (dataPenjualan === undefined) return 'error: Parameter tidak boleh kosong';

  // jika parameter bertipe selain array maka kondisi ini akan dijalankan
  if (!Array.isArray(dataPenjualan)) return 'error: Parameter harus berupa Array';

  // deklarasi variabel totalTerjual yang diisi dengan array baru hasil dari map dataPenjualan yang hanya mengembalikan properti totalTerjual.
  let totalTerjual = dataPenjualan.map((values) => values.totalTerjual);

  // deklarasi variabel result yang diisi dengan hasil penjumlahan seluruh elemen array totalTerjual menggunakan metode reduce().
  let result = totalTerjual.reduce((a, b) => a + b, 0);

  return result;
};

console.log(getTotalPenjualan(dataPenjualanPakAldi));
console.log(getTotalPenjualan('data'));
console.log(getTotalPenjualan(true));
console.log(getTotalPenjualan(0));
