// No1. Membuat Kalimat
// Menampilkan Output
// JavaScript is Awesome and I Love it!

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

var gabung = word.concat(second," ", third," ",fourth," ",fifth," ",sixth," ", seventh);


console.log(gabung);
// -------------------------------------------------
// No.2 Mengurangi Kalimat
// Output:
// First word: I
// Second word : am
// Third word : going
// Fourth word : to
// Fifth word : be
// Sixth word : React
// Seventh word : Developer

var sentence = "I am going to be React Developer"
var exampleFirstWord = sentence[0] ;
var exampleSecondWord = sentence[2] + sentence[3]  ;
var thirdWord = sentence[5]+sentence[6]+sentence[7] +sentence[8]+sentence[9]+sentence[10]; // lakukan sendiri
var fourthWord = sentence[11]+sentence[12]; // lakukan sendiri
var fiftWord = sentence[14]+sentence[15]; // lakukan sendiri
var sixthWord = sentence[17]+sentence[18]+sentence[19]+sentence[20]+sentence[21]; // lakukan sendiri
 var seventhWord = sentence[23]+sentence[24]+sentence[25]+sentence[26]+sentence[27]+sentence[28]+sentence[29]+sentence[30]+sentence[31]; // lakukan sendiri

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fiftWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);

// -------------------------------------------------
// No.3 Mengurai Kalimat (Substring)
// Output: 
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

var sentence2 = 'wow JavaScript is so cool';
var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4,14); // do your own!
var thirdWord2 = sentence2.substring(15,17); // do your own!
var fourthWord2 = sentence2.substring(18,20); // do your own!
var fifthWord2 = sentence2.substring(21,25); // do your own!

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

// -------------------------------------------------
// No.4 Mengurai Kalimat dan tentukan panjang string

// Output: 
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4

var sentence3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14); // do your own!
var thirdWord3 = sentence3.substring(15, 17);  // do your own!
var fourthWord3 = sentence3.substring(18, 20); // do your own!
var fifthWord3 = sentence3.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord3.length 
var dua = secondWord3.length
var tiga = thirdWord3.length
var empat = fourthWord3.length
var lima = fifthWord3.length

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + dua);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + tiga);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + empat);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + lima);

// -------------------------------------------------