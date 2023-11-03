function isSmallShipment(length, width, height, weight, distance) {
    const totalDimensions = length + width + height;

    if (totalDimensions <= 150 &&
        length <= 100 &&
        width <= 100 &&
        height <= 100 &&
        weight <= 10 &&
        distance >= 3 && distance <= 10) {
        return true;
    } else {
        return false;
    }
}

const length = Number(prompt("Enter the length of the item in cm: "));
const width = Number(prompt("Enter the width of the item in cm: "));
const height = Number(prompt("Enter the height of the item in cm: "));
const weight = Number(prompt("Enter the weight of the shipment in kg: "));
const distance = Number(prompt("Enter the delivery distance in km: "));

const result = isSmallShipment(length, width, height, weight, distance);
if (result) {
    console.log("The shipment is small.");
} else {
    console.log("The shipment is not small.");
}