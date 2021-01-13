// Connection confirmation

console.log("App connected")

// Input Selectors

const inputName = document.getElementById('input-name');
const inputImage = document.getElementById('input-image');
const inputtype = document.getElementById('input-type');
const inputcost = document.getElementById('input-cost');
const inputAttack = document.getElementById('input-attack');
const inputDefence = document.getElementById('input-defence');
const inputPower = document.getElementById('input-power');
const inputToughness = document.getElementById('input-toughness');
const inputMorale = document.getElementById('input-morale');
const inputSize = document.getElementById('input-size');
const inputTraits = document.getElementById('input-traits');

// Output Selectors


const cardName = document.getElementById('card-name');

// Button Selectors

const updateBtn = document.getElementById('update');

// Update Card Function

updateBtn.addEventListener('click',()=>{
    cardName.innerHTML = inputName.value
})