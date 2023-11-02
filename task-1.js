function registerCustomer() {
    let lastName = prompt("Please enter your last name:");
    let firstName = prompt("Please enter your first name:");
    let email = prompt("Please enter your email address:");

    return `Last Name: ${lastName}, First Name: ${firstName}, Email: ${email}`;
}

let customerInfo = registerCustomer();
console.log(customerInfo);
