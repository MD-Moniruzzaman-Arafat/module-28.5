function getPin() {
    const randomPin = Math.round(Math.random() * 10000);
    const randomPinText = randomPin + '';

    if (randomPinText.length == 4) {
        return randomPin;
    } else {
        return getPin();
    }

}

function generatePin() {
    const pin = getPin()
    document.getElementById('pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumber = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            typeNumber.value = ''
        }
    } else {

        const previousNumber = typeNumber.value;
        const newNumber = previousNumber + number;
        typeNumber.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('pin').value;
    const typePint = document.getElementById('type-number').value;
    const errorMessage = document.getElementById('notify-error');
    const successMessage = document.getElementById('notify-success');
    if (pin == typePint) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})