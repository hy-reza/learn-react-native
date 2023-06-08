//soal 1
function cetakFunction() {
  let nama_saya = "Handy Reza Alfanda";
  return "Hallo, nama saya " + nama_saya;
}

console.log(cetakFunction());

//soal 2
function myFunction(angka1, angka2) {
  return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);

console.log(output);

//soal 3
// const Hello = () => "Hello";
const Hello = () => {
  return "Hello";
}

//soal 4
let obj = {
  nama : "john",
  umur : 22,
  bahasa : "indonesia"
};

console.log(obj.bahasa);

//soal 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenis_kelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahun_lahir: arrayDaftarPeserta[3]
};

console.log(objDaftarPeserta);

//soal 6
let arrayBuah = [
  { nama: "Nanas", warna: "Kuning", ada_bijinya: "tidak", harga: 9000 },
  { nama: "Jeruk", warna: "Oranye", ada_bijinya: "ada", harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", ada_bijinya: "ada", harga: 10000 },
  { nama: "Pisang", warna: "Kuning", ada_bijinya: "tidak", harga: 5000 }
];

let buahTanpaBiji = arrayBuah.filter(buah => buah.ada_bijinya === "tidak");

console.log(buahTanpaBiji);

//soal 7
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020
};


let {name, brand, year} = phone;


console.log(name, brand, year);

//soal 8

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020 
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172
};

let objOutput = {
  ...dataBukuTambahan,
  ...buku
};

console.log(objOutput);

//soal 9
let mobil = {
  merk : "bmw",
  color: "red",
  year : 2002
};

const functionObject = (param) => {
  return param;
};

console.log(functionObject(mobil));
