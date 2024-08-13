/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


window.onload = function() {
    inputEl.focus()
};

inputEl.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      conversion()
    }
  });

function conversion() {
    let input = inputEl.value

    let feets = (input * 3.281).toFixed(3)
    let meters = (input / 3.281).toFixed(3)
    lengthEl.innerText = `${input} meters = ${feets} feet | ${input} feet = ${meters} meters`

    let gallons = (input * 0.264).toFixed(3)
    let liters = (input / 0.264).toFixed(3)
    volumeEl.innerText = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`

    let pounds = (input * 2.204).toFixed(3)
    let kilos = (input / 2.204).toFixed(3)
    massEl.innerText = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`

    inputEl.placeholder = inputEl.value
    inputEl.value = ""
    inputEl.focus()
    
}

convertBtn.addEventListener("click", conversion)


