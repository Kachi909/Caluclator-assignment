function appendToOutput(value) {
    document.getElementById('output'). value += value;
}

function calculate() {
    try {
        document.getElementById('output').value = eval(document.getElementById('output').value);
    } catch(error) {
        document.getElementById('output').value = 'Error';
    }
}