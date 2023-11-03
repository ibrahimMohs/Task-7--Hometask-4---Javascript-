function calculateLoyaltyPoints(orderNumber) {
    if (orderNumber <= 2) {
      return 1;
    }
    
    let previous = 1;
    let current = 1;
    let next = 0;
    
    for (let i = 3; i <= orderNumber; i++) {
      next = previous + current;
      previous = current;
      current = next;
    }
    
    return current;
  }
  

const orderNumber = Number(prompt("Enter number of the orders: "));
 console.log (calculateLoyaltyPoints(orderNumber));