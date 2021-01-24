function convertToRoman(num) {

// Decimal numbers
const dNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// Roman numeral matches
const rNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// Empty array for final roman numeral
var romanNumeral = "";
// For loop through dNumbers
for(let i = 0; i < dNumbers.length; i++) {
// While loop until Dnumbers is less or equel too num
    while(dNumbers[i] <= num) {
        // Assign rNumber index too romanNumeral string
        romanNumeral += rNumbers[i];
        // Subtract dNumbers indexvalue from num value
        num -= dNumbers[i];

    }

}

 return romanNumeral;
}

convertToRoman(36);