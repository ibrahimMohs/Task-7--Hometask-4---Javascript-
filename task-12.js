function sumOfDigits(individualCode) {
    const digits = individualCode.toString();
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i], 10);
    }

    return sum;
}

const userCode = (Math.round(Math.random()*100000));
console.log(userCode);
console.log(sumOfDigits(userCode)); 
