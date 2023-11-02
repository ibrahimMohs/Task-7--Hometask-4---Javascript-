
function getTemperatures() {
    let temp1 = parseFloat(prompt("Enter the average annual temperature for country 1:"));
    let temp2 = parseFloat(prompt("Enter the average annual temperature for country 2:"));
    let temp3 = parseFloat(prompt("Enter the average annual temperature for country 3:"));

    if (isNaN(temp1) || isNaN(temp2) || isNaN(temp3)) {
      console.error("Please enter valid numbers.");
      return;
    }
  
    let temperatures = [temp1, temp2, temp3];
  
    temperatures.sort(function(a, b) {
      return b - a;
    });

    console.log("Temperatures in descending order:", temperatures.join(", "));
}

getTemperatures();
  