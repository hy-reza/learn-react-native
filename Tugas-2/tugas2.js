console.log("\n========= Soal 1 =========");

//soal 1 ( Latihan Membuat variable dan valuenya )
let namaLengkap = "Handy Reza Alfanda";
console.log(namaLengkap);

console.log("\n========= Soal 2 =========");
// soal 2 ( Latihan Penggabungan variable )
let word = "JavaScript";
let second = "is";
let third = "awesome";

let outputGabunganVariable;
outputGabunganVariable = word + " " + second + " " + third;
console.log(outputGabunganVariable);

console.log("\n========= Soal 3 =========");
//soal 3 ( Latihan Menggunakan Template Literals)
let hello = "Hello ";
let world = "World!!";

let output = `${hello} ${world}`;
console.log(output);

console.log("\n========= Soal 4 =========");
// soal 4 ( Latihan Mengubah tipe data )
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang =
  2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));

console.log(kelilingPersegiPanjang);

console.log("\n========= Soal 5 =========");
// soal 5 ( Latihan Mengurai Kalimat )
let sentences = "wah javascript itu keren sekali";

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords= sentences.substring(19, 24);
let fifthWords= sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWords);
console.log("Kata Kedua: " + secondWords);
console.log("Kata Ketiga: " + thirdWords);
console.log("Kata Keempat: " + fourthWords);
console.log("Kata Kelima: " + fifthWords);

console.log("\n========= Soal 6 =========");
// soal 6 (Akses karakter dalam string)
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence.slice(4, 10);
var fourthWord = sentence.slice(11, 13);
var fifthWord = sentence.slice(14, 16);
var sixthWord = sentence.slice(17, 22);
var seventhWord = sentence.slice(23, 25);
var eighthWord = sentence.slice(26);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord);

console.log("\n========= Soal 7 =========");
// soal 7 ( Latihan Mengambil sebuah Kalimat )

let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

console.log("\n========= Soal 8 =========");
// soal 8 ( membuat kondisi sederhana )
var nilaiDoe = 50;
var indeks;

if (nilaiDoe >= 80) {
  indeks = "A";
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  indeks = "B";
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  indeks = "C";
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  indeks = "D";
} else {
  indeks = "E";
}

console.log("Indeks Nilai: " + indeks);
console.log("\n========= Soal 9 =========");
// soal 9 ( conditional tipe tenary operator )
let angka = 2;

let result = angka === 2 ? "angka nya 2" : "bukan angka 2";

console.log(result);

console.log("\n========= Soal 10 =========");
// soal 10 ( conditional tipe Switch Case )
var traffic_lights = "red";

switch (traffic_lights) {
  case "red":
    console.log("berhenti");
    break;
  case "yellow":
    console.log("hati-hati");
    break;
  case "green":
    console.log("berjalan");
    break;
  default:
    console.log("status lampu lalu lintas tidak valid");
    break;
}

