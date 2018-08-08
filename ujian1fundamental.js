// Nomor 1
// var posneg = [5, -6, -8, 4, -3, 6];

// var positif = posneg.filter
// (function (a) 
// {
//     return a >= 0; 
// });

// var negatif = posneg.filter
// (function (a) 
// {
//     return a < 0; 
// });

// var hasilnegatif = negatif.reduce
// (function (a, b) 
// { 
//     return a + b; 
// });

// var hasilpositif = positif.reduce
// (function (a, b) 
// {
//     return a + b; 
// });

// console.log(hasilpositif);
// console.log(hasilnegatif);

// if (hasilpositif>hasilnegatif)
// {
//     console.log('Positif wins');
// }
// if (hasilpositif<hasilnegatif)
// {
//     console.log('Negatif wins');
// }
// if (hasilpositif==hasilnegatif)
// {
//     console.log('Draw');
// }



// Nomor 2
// function myFunction() 
// {
//     var string = 'A%6&Z#7C';
//     var char1 = /[0-9]/g;
//     var char2 = /[a-zA-Z]/g; 
//     var char3 = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g;
//     var angka = string.match(char1); 
//     var huruf = string.match(char2);
//     var spesial = string.match(char3);

//     console.log('Angka = ' + angka);
//     console.log('Huruf = ' + huruf);
//     console.log('Spesial = ' + spesial);
// }
// myFunction('A%6&Z#7C')