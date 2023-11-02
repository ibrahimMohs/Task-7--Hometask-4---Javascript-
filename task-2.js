function getCostOfDelivery() {
    let km = parseFloat(prompt("Please enter km:"));
    let costofdelivery = (5 + (0.25 * km));
    return `Cost of delivery: ${costofdelivery}`;
}

let cost = getCostOfDelivery();
console.log(cost);