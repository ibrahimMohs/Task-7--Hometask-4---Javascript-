function getDiscount (name, age, theNumberOfOrders, amountsOfOrders) {

    if (theNumberOfOrders>=4 && amountsOfOrders>=100){
        return `you'll get a discount`;
    }

    if (age>60){
        return `you'll get a discount`;
    }
    return `you won't get a discount`;
}

const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));
const theNumberOfOrders = Number(prompt("Enter the number of your orders: "));
const amountsOfOrders = Number (prompt("Enter amounts of orders: ")); 

console.log(getDiscount(name, age, theNumberOfOrders, amountsOfOrders));
