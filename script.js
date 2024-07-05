let resultDisplay = document.getElementById('result');

function clearDisplay() {
    resultDisplay.textContent = '';
}

function deleteChar() {
    resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
}

function appendChar(char) {
    resultDisplay.textContent += char;
}

function calculateResult() {
    try {
        resultDisplay.textContent = eval(resultDisplay.textContent);
    } catch (e) {
        resultDisplay.textContent = 'Error';
    }
}
