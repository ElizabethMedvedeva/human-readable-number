module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];
    let result = "";
    let hundredPart = Math.floor(number / 100);
    let tenPart = Math.floor((number % 100) / 10);
    let onePart = number % 10;
    if (hundredPart > 0) {
        result += hundreds[hundredPart] + " ";
    }
    if (tenPart === 1) {
        result += teens[(number % 100) - 10];
    } else {
        if (tenPart > 1) {
            result += tens[tenPart] + " ";
        }
        if (onePart > 0 || number === 0) {
            result += ones[onePart];
        }
    }
    return result.trim();
};
