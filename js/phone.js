
function updatePhoneNumber(isIncrease) {

    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {

        newPhoneNumber = phoneNumber + 1;
    }
    else {
        newPhoneNumber = phoneNumber - 1;
    }


    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}
function updatePhonePrice(newPhoneNumber) {

    const costTotal = newPhoneNumber * 1219;
    const costTotalElement = document.getElementById('phone-total');
    costTotalElement.innerText = costTotal;
}




document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newNumber = updatePhoneNumber(true);
    updatePhonePrice(newNumber);

    // calculate total 
    calculateSubtotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newNumber = updatePhoneNumber(false);
    updatePhonePrice(newNumber);
    calculateSubtotal();

})