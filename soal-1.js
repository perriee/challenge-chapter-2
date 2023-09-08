// arrow function changeWord dengan tiga parameter (selectedText, changedText, text).
changeWord = (selectedText, changedText, text) => {
  // cek apakah kata yang ingin diganti 'selectedText' terdapat didalam 'text',
  // jika tidak ditemukan maka kondisi ini akan terpenuhi.
  // includes() digunakan untuk mengetahui apakah 'selectedText' terdapat didalam 'text',
  // akan mereturn true jika ditemukan dan mereturn false jika tidak ditemukan.
  if (!text.includes(selectedText)) {
    return `error: Kata '${selectedText}' tidak ditemukan!`;
  }

  // membuat variabel 'newText' untuk menyimpan isi kalimat baru.
  // replaceAll() digunakan untuk mengganti semua 'selectedText' dengan 'changedText' yang terdapat pada 'text'.
  const newText = text.replaceAll(selectedText, changedText);

  return newText;
};

const kalimatAwal = 'Hobi saya adalah rebahan';
const kalimatBaru = changeWord('rebahan', 'belajar', kalimatAwal);

console.log(kalimatAwal, '-> kalimat awal');
console.log(kalimatBaru, '-> kalimat baru');
