
document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.getElementsByClassName('btn');
    const calcDisplay = document.getElementById('calc-display');
    let currentValue = "";

    function undo() {
        let trimValue = '';
        if (currentValue.length >= 1) {
            trimValue = currentValue.slice(0, -1);
            currentValue = trimValue;
            calcDisplay.value = trimValue;
        }
    }

    function evaluateResult() {
        const currentvalue = currentValue;
        console.log('CurrentValue: ', currentvalue);
        const ConvertedValue = currentvalue.replace('×', '*').replace('÷', '/');
        console.log('ConvertedValue: ', ConvertedValue);
        const result = eval(ConvertedValue);
        calcDisplay.value = result;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            if (value == 'AC') {
                currentValue = "";
                calcDisplay.value = currentValue;
            } else if (value == "=") {
                evaluateResult();
            } else if (value == "↻") {
                undo();
            }
            else {
                currentValue += value;
                calcDisplay.value = currentValue;
            }
        })
    }


})