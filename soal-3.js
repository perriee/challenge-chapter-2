// arrow function 'getAngkaTerbesarKedua' dengan satu parameter (dataNumbers)
getAngkaTerbesarKedua = (dataNumbers) => {
  // jika parameter kosong maka kondisi ini akan di jalankan
  if (dataNumbers === undefined) return 'error: Parameter tidak boleh kosong';

  // jika parameter bertipe selain array maka kondisi ini akan dijalankan
  if (!Array.isArray(dataNumbers)) return 'error: Parameter harus berupa Array';

  // membuat variabel arraySorted untuk menampung salinan 'dataNumbers' agar 'dataNumbers' tidak terpengaruh jika 'arraySorted' dimanipulasi.
  // menyalin array menggunakan spread operator.
  const arraySorted = [...dataNumbers];

  // mengurutkan array menggunakan metode sort() dan mengurutkannya secara descending
  arraySorted.sort((a, b) => b - a);

  // membuat variabel angkaTerbesarKeuda yang isinya adalah arraySorted[1], karena sebelumnya array sudah diurutkan,
  // maka untuk mendapatkan angka terbesar kedua bisa mengakses index ke - 1 pada array tersebut.
  const angkaTerbesarKedua = arraySorted[1];

  return angkaTerbesarKedua;
};

const dataArray = [5, 4, 8, 2, 1, 4, 6, 7, 10, 2, 3];

console.log(getAngkaTerbesarKedua(dataArray));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
