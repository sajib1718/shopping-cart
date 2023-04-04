function priceTotal(element) {

    const priceTotalElement = document.getElementById(element);
    const priceTotalString = priceTotalElement.innerText;
    const priceTotal = parseInt(priceTotalString);
    return priceTotal;
}

function setTextElement(elementId, value) {

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubtotal() {

    const phoneTotal = priceTotal('phone-total');
    const caseTotal = priceTotal('case-total');
    const currentTotal = phoneTotal + caseTotal;

    setTextElement('sub-total', currentTotal);

    // calculate tax 

    const taxAmountString = (currentTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElement('tax-amount', taxAmount);

    const finalAmount = currentTotal + taxAmount;
    setTextElement('final-total', finalAmount);







}