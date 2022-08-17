
document.getElementById('deposite-btn').addEventListener('click', () => {
    const inputField = document.getElementById('deposite-input');
    const inputAmount = parseFloat(inputField.value);

    const depositeField = document.getElementById('deposite-field');
    const depositeBalance = parseFloat(depositeField.innerText);

    const totalBalanceField = document.getElementById('balance-field');
    const totalBalance = parseFloat(totalBalanceField.innerText);

    if (isNaN(inputAmount)) {
        alert('please enter your deposite amount');
        return inputField.value = '';
    }

    const totalDeposite = inputAmount + depositeBalance;
    const newTotalBalance = inputAmount + totalBalance;

    depositeField.innerText = totalDeposite;
    totalBalanceField.innerText = newTotalBalance;

    inputField.value = '';
});