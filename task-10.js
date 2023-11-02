function calculateDeposit (initialAmount, durationInYears, percentagePerYear) {
    let deposit = initialAmount;
    for (let i=1; i<=durationInYears; i++) {
    deposit += (deposit * percentagePerYear) / 100;
} 
    return deposit;
}
const initialAmount = Number(prompt("Enter Initial Amount of your bank account:"));
const durationInYears= Number(prompt("how many year will you deposit your amount? "));
const percentagePerYear= Number(prompt("Enter deposit percent per year:"));
console.log(calculateDeposit(initialAmount, durationInYears, percentagePerYear));

