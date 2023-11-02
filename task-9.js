function checkDivisibility(num){
    let divisibleNumbers = [];

    for (let index = 1; index <=1000; index++) {
        const reminder = index % num;
        if (reminder===0) {
            divisibleNumbers.push(index);
        }
    }

    return divisibleNumbers;

}
const num = Number(prompt("Enter a number: "));
console.log(checkDivisibility(num));
