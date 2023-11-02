function getReceipt() {
    let nameofproduct = prompt ("Enter product name:");
    const unitprice = Number(prompt ("Enter price of unit:"));
    const quantity = Number(prompt ("Enter quantity of unit:"));
    const promotion = prompt ("Did you participate in promotion? (Yes or No) ").toLowerCase();
    let cost;
    if (quantity>=5 && promotion === "yes") {
        cost = (unitprice * quantity)-((unitprice * quantity * 25)/100);
    } else if (promotion === "yes") {
        cost = (unitprice * quantity)-((unitprice * quantity * 15)/100);
    }
    else if (quantity>=5) {
        cost = (unitprice * quantity)-((unitprice * quantity * 10)/100);
    }
    else {
        cost = (unitprice *quantity);
    }
    return "receipt's amount:" + cost;
}

console.log(getReceipt());
