function getBankNote(amount) {
    const bankNotes = [100,50,20,10,5,1];
    const toDispense = {};
 
    for (const bankNote of bankNotes) {
        const count = Math.floor(amount/bankNote);
        if (count > 0 ){
            toDispense[bankNote] = count;
            amount -= count * bankNote;
        }
    }
    return toDispense;
}
const amount = Number(prompt("Enter amount that you want to dispense: "));

console.log(getBankNote(amount));