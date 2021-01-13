// Connection confirmation

console.log("App connected")

// Input Selectors

const inputName = document.getElementById('input-name');
const inputImage = document.getElementById('input-image');
const inputType = document.getElementById('input-type');
const inputCost = document.getElementById('input-cost');
const inputAttack = document.getElementById('input-attack');
const inputDefence = document.getElementById('input-defence');
const inputPower = document.getElementById('input-power');
const inputToughness = document.getElementById('input-toughness');
const inputMorale = document.getElementById('input-morale');
const inputSize = document.getElementById('input-size');
const inputTraits = document.getElementById('input-traits');

// Output Selectors


const cardName = document.getElementById('card-name');
const cardImage = document.getElementById('card-image');
const cardType = document.getElementById('card-type');
const cardCost = document.getElementById('card-cost');
const cardAttack = document.getElementById('card-attack');
const cardDefence = document.getElementById('card-defence');
const cardPower = document.getElementById('card-power');
const cardToughness = document.getElementById('card-toughness');
const cardMorale = document.getElementById('card-morale');
const cardSize = document.getElementById('card-size');
const cardTraits = document.getElementById('card-traits');


// Button Selectors

const updateBtn = document.getElementById('update');

// Update Card Function

updateBtn.addEventListener('click',()=>{
    cardName.innerHTML = inputName.value
    cardType.innerHTML = inputType.value
    cardCost.innerHTML = inputCost.value
    cardAttack.innerHTML = `+ ${inputAttack.value}`
    cardDefence.innerHTML = `+ ${inputDefence.value}`
    cardPower.innerHTML = `+ ${inputPower.value}`
    cardToughness.innerHTML = `+ ${inputToughness.value}`
    cardSize.innerHTML = `+ ${inputSize.value}`
    cardMorale.innerHTML = `+ ${inputMorale.value}`

})