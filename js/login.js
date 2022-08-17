
document.getElementById('submit-btn').addEventListener('click', (() => {
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    const userPasswordFeild = document.getElementById('user-password');
    const userPassword = userPasswordFeild.value;

    if (userEmail === 'baaper@sontan.com' && userPassword === '4554') {
        location.href = 'bank.html';
    } else {
        alert('please Enter valid user email and password');
        userPasswordFeild.value = '';
    }
}))