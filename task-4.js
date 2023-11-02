function getAppropriateTable () {
    let guests = Number(prompt("Enter a number of the guests: "));
    
    if (guests <= 0) {
        return "Please enter a valid number of guests.";
    }
    else if (guests <= 2){
        return "small table";
    }
    else if (guests <= 4){
        return "medium table";
    }
    else if (guests <= 8){
        return "large table";
    }
    else {
        return "Sorry, the restaurant cannot accommodate more than 8 people within one table.";
    }

}

console.log(getAppropriateTable());
