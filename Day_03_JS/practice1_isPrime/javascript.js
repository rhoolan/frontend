function checkPrime() {
    var value = getValue();
    var result = isPrime(value);
    displayAnswer(value, result);
}

function isPrime(number) {
    if (number == 0 || number == 1) {
        return false;
    } else if (number == 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
        return true;
    }
}

function getValue() {
    var input = document.getElementById("value").value;
    return input;
}

function displayAnswer(value, answer){
    if (answer) {
        document.getElementById("answer").innerHTML = value + " is prime";
    } else {
        document.getElementById("answer").innerHTML = value + " is not prime";
    }
}
