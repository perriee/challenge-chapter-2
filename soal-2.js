// arrow function checkTypeNumber dengan satu parameter (givenNumber)
checkTypeNumber = (givenNumber) => {
  // jika parameter kosong (undefined) maka kondisi ini akan dijalankan.
  if (givenNumber === undefined) return 'error: Please input the parameter';

  // jika parameter bertipe selain number maka kondisi ini akan dijalankan.
  if (typeof givenNumber !== 'number') return 'error: Invalid data type';

  // membuat variabel result untuk menyimpan hasil apakah 'givenNumber' GENAP atau GANJIL.
  // menggunakan ternary operator untuk mengecek kondisi.
  // operator % (modulus) digunakan untuk memberikan sisa hasil dari pembagian.
  // jika hasil 'givenNumber' % 2 === 0, maka 'givenNumber' adalah bilangan GENAP.
  // jika kondisi terpenuhi ('givenNumber' adalah GENAP), maka variabel result akan diisi dengan string 'GENAP'.
  // jika kondisi tidak terpenuhi ('givenNumber' adalah GANJIL), maka variabel result akan diisi dengan string 'GANJIL'.
  const result = givenNumber % 2 === 0 ? 'GENAP' : 'GANJIL';

  return result;
};

console.log(checkTypeNumber(17));
console.log(checkTypeNumber(28));
console.log(checkTypeNumber('2'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber(true));
console.log(checkTypeNumber());
