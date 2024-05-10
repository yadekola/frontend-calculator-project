let displayValue = '';

const appendToDisplay = (value) => {
    const display = document.getElementById('display');
    displayValue += value;
    display.value += value;
}

const clearDisplay = () => {
    const display = document.getElementById('display');
    displayValue = '';
    display.value = '';
}

const calculate = () => {
    const display = document.getElementById('display');
    try 
    {
        display.value = eval(displayValue);
        displayValue = display.value;
    }
    catch (error)
    {
        display.value = 'Error';
    }
}