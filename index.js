// pseudo code here : 

// prendre un nombre, et le retourner en chaine de caractères (chiffres romains)
// modulo ? en fonction du multiple 
// stocker les valeurs des chiffres romains et leur équivalence en chiffres arabes. 

const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

// faire correspondre les tableaux avec une boucle for while et incrementer autant de fois que le nombre entré en paramètre est >= l'index du tableau des chiffres arabes (en partant de 0) 

arabicToRoman = (number) => {
    let result = "";
    for(let i = 0; i < romanNumbers.length; i++) {
        while (number >= arabicNumbers[i]) {
            result += romanNumbers[i];
            number -= arabicNumbers[i]
        }
    }
    return result
};

console.log(arabicToRoman(952));
console.log(arabicToRoman(12));
console.log(arabicToRoman(1450));
console.log(arabicToRoman(1387));
console.log(arabicToRoman(75));
console.log(arabicToRoman(83));
console.log(arabicToRoman(96));
console.log(arabicToRoman(102));
console.log(arabicToRoman(40));
console.log(arabicToRoman(69));


// Tentative en boucle for in dans un objet

// const numAndRoman = {
    //     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
// };

// const arabicToRoman = (number) => {
//     convertString = "";
//     for (const key in numAndRoman) {
//         while(number >= numAndRoman[key]) {
//             convertString += numAndRoman[key];
//             number -= numAndRoman[key];
//         }
//     }
//     return convertString
// }

//console.log(arabicToRoman(3));




