// function convertTemperature(){
//    const optionbtn = document.getElementById('option-button1');
//    const result = document.getElementById('result');
//    const inputArea = document.getElementById('input-area');
//    const temperature = parseFloat(inputArea.value);
//    const selectedOption = optionbtn.value;
//    let convertedTemperature = '';



//    if(selectedOption == "celsius"){
//     convertTemperature = (temperature * 9/5) + 32;
//     inputArea.textContent = `${temperature} degrees Celsius is equal to ${convertedTemperature} degrees Fahrenheit.`;

//    }
// }

function convertTemperature() {
    const inputArea = document.getElementById("input-area");
    const optionButton1 = document.getElementById("option-button1");
    const outputContainer = document.getElementById("result");
    const temperature = parseFloat(inputArea.value);
    const selectedOption = optionButton1.value;
    let convertedTemperature = '';

    if (isNaN(temperature)) {
        outputContainer.textContent = "Please enter a valid temperature.";
        return;
    }

    if (selectedOption === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        outputContainer.textContent = `${temperature} degrees Celsius is equal to ${convertedTemperature} degrees Fahrenheit.`;
    } else if (selectedOption === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        outputContainer.textContent = `${temperature} degrees Fahrenheit is equal to ${convertedTemperature} degrees Celsius.`;
    } else if (selectedOption === "kelvin") {
        convertedTemperature = temperature + 273.15;
        outputContainer.textContent = `${temperature} Kelvin is equal to ${convertedTemperature} degrees Celsius.`;
    }
}
