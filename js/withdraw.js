
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const inputField = document.getElementById('withdraw-input');
    const inputAmount = parseFloat(inputField.value);

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawBalance = parseFloat(withdrawField.innerText);

    const totalBalanceField = document.getElementById('balance-field');
    const totalBalance = parseFloat(totalBalanceField.innerText);

    const newWithdrawBalance = inputAmount + withdrawBalance;
    const newTotalBalance = totalBalance - inputAmount;

    if (isNaN(inputAmount)) {
        alert('please enter your with amount');
        inputField.value = '';
    } else if (inputAmount > totalBalance) {
        alert('tor baper bank e eto taka nai');
        inputField.value = '';
    } else {
        withdrawField.innerText = newWithdrawBalance;
        totalBalanceField.innerText = newTotalBalance;

        inputField.value = '';
    }
})