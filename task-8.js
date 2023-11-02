function numberToText(num) {
    if (num < 10 || num >= 100) {
        return "Please enter a two-digit number.";
    }

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const tensPart = Math.floor(num / 10);
    const onesPart = num % 10;

    if (tensPart === 1 && onesPart !== 0) {
        return teens[onesPart];
    }

    return `${tens[tensPart]} ${ones[onesPart]}`.trim();
}

const userInput = Number(prompt("Enter a two-digit number: "));
console.log(numberToText(userInput));
