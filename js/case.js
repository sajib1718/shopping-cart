
function plus_minus(isIncrease) {

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;

    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;


}

function updateCasePrice(newCaseNumber) {

    const costTotal = newCaseNumber * 59;
    const costTotalElement = document.getElementById('case-total');
    costTotalElement.innerText = costTotal;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = plus_minus(true);
    updateCasePrice(newCaseNumber);
    calculateSubtotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseNumber = plus_minus(false);
    updateCasePrice(newCaseNumber);

    calculateSubtotal();


})