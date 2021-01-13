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

// Checkbox Selectors

const undeadCheckbox = document.getElementById("Undead")
const amphibiousCheckbox = document.getElementById("Amphibious")
const bredForWarCBX = document.getElementById("Bred for War")
const brutalCBX = document.getElementById("Brutal")
const courageousCBX = document.getElementById("Courageous")
const eternalCBX = document.getElementById("Eternal")
const frenzyCBX = document.getElementById("Frenzy")
const horrifyCBX = document.getElementById("Horrify")
const martialCBX = document.getElementById("Martial")
const mindlessCBX = document.getElementById("Mindless")
const regenerateCBX = document.getElementById("Regenerate")
const ravenousCBX = document.getElementById("Ravenous")
const hurlRocksCBX = document.getElementById("Hurl Rocks")
const savageCBX = document.getElementById("Savage")
const stalwartCBX = document.getElementById("Stalwart")
const twistingRootsCBX = document.getElementById("Twisting Roots")


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
const cardTraitsValues = cardTraits.value;


// Button Selectors

const updateBtn = document.getElementById('update');
const clearBtn = document.getElementById('clear')

// Update Card Function

updateBtn.addEventListener('click', () => {
    cardName.innerHTML = inputName.value
    cardType.innerHTML = inputType.value
    cardCost.innerHTML = inputCost.value
    cardAttack.innerHTML = `+ ${inputAttack.value}`
    cardDefence.innerHTML = `${inputDefence.value}`
    cardPower.innerHTML = `+ ${inputPower.value}`
    cardToughness.innerHTML = `${inputToughness.value}`
    cardSize.innerHTML = `${inputSize.value}`
    cardMorale.innerHTML = `+ ${inputMorale.value}`
    cardTraits.innerHTML = checkTraits();
    inputName.value = cardName.innerHTML

});

clearBtn.addEventListener('click', () => {
    cardName.innerHTML = ""
    cardType.innerHTML = ""
    cardCost.innerHTML = ""
    cardAttack.innerHTML = ""
    cardDefence.innerHTML = ""
    cardPower.innerHTML = ""
    cardToughness.innerHTML = ""
    cardSize.innerHTML = ""
    cardMorale.innerHTML = ""
    cardTraits.innerHTML = ""
})

const checkTraits = () => {


    output = []

    if (undeadCheckbox.checked) {
        output += "<b>Undead:</b> <br> Green and regular troops must pass a Morale check to attack this unit. Each enemy unit need only do this once. <br> <br>"
        }

    if(amphibiousCheckbox.checked){
                output += "<b>Amphibious:</b> <br> This unit does not suffer terrain penalties for fighting in water or on land"
            }

    if(bredForWarCBX.checked){
                output += "<b>Bred for War:</b> <br> This unit cannot be diminished, and cannot have disadvantage on Morale checks"
            }

    if(brutalCBX.checked){
                output += "<b>Brutal:</b> <br> This unit inflicts 2 casualties on a successful Power check"
            }

    if(courageousCBX.checked){
                output += "<b>Courageous:</b> <br> Once per battle, this unit can choose to succeed on a Morale check it just failed"
            }

    if(eternalCBX.checked){
                output += "<b>Eternal:</b> <br> This unit cannot be horrified, and it always succeeds on Morale checks to attack undead and fiends."
            }

    if(frenzyCBX.checked){
                output += "<b>Frenzy:</b> <br> If this unit diminishes an enemy unit, it immediately makes a free attack against that unit."
            }

    if(horrifyCBX.checked){
                output += "<b>Horrify:</b> <br> If this unit inflicts a casualty on an enemy unit, that unit must make a DC 15 Morale check. Failure exhausts the unit."
            }

    if(martialCBX.checked){
                output += "<b>Martial:</b> <br> If this unit succeeds on a Power check and its size is greater than the defending unit, it inflicts 2 casualties."
            }

    if(mindlessCBX.checked){
                output += "<b>Mindless:</b> <br> This unit cannot fail Morale checks."
            }

    if(regenerateCBX.checked){
                output += "<b>Regenerate:</b> <br> When this unit refreshes, increment its casualty die. This trait ceases to function if the unit suffers a casualty from battle magic."
            }

    if(ravenousCBX.checked){
                output += "<b>Ravenous:</b> <br> While any enemy unit is diminished, this unit can spend a round feeding on the corpses to increment their casualty die."
            }

    if(hurlRocksCBX.checked){
                output += "<b>Hurl Rocks:</b> <br> If this unit succeeds on an Attack check, it inflicts 2 casualties. against fortifications, it inflicts 1d6 casualties"
            }

    if(savageCBX.checked){
                output += "<b>Savage:</b> <br> This unit has advantage on the first Attack check it makes each battle"
            }

    if(stalwartCBX.checked){
                output += "<b>Stalwart:</b> <br> Enemy battle magic has disadvantage on Power checks against this unit."
            }

    if(twistingRootsCBX.checked){
                output += "<b>Twisting Roots:</b> <br> As an action, this unit can sap the walls of a fortification. Siege units have advantage on Power checks against sapped fortifications."
            }

    return output

};




    /**

    switch (trait) {
        case "Amphibious":
            output += "This unit does not suffer terrain penalties for fighting in water or on land"
            break
        case "Bred for War":
            output += "This unit cannot be diminished, and cannot have disadvantage on Morale checks"
            break
        case "Brutal":
            output += "This unit inflicts 2 casualties on a successful Power check"
            break
        case "Courageous":
            output += "Once per battle, this unit can choose to succeed on a Morale check it just failed."
            break
        case "Eternal":
            output = "This unit cannot be horrified, and it always succeeds on Morale checks to attack undead and fiends."
            break
        case "Frenzy":
            output = "If this unit diminishes an enemy unit, it immediately makes a free attack against that unit."
            break
        case "Horrify":
            output = "If this unit inflicts a casualty on an enemy unit, that unit must make a DC 15 Morale check. Failure exhausts the unit."
            break
        case "Martial":
            output = "If this unit succeeds on a Power check and its size is greater than the defending unit, it inflicts 2 casualties."
            break
        case "Mindless":
            output = "This unit cannot fail Morale checks"
            break
        case "Regenerate":
            output = "When this unit refreshes, increment its casualty die. This trait ceases to function if the unit suffers a casualty from battle magic"
            break
        case "Ravenous":
            output = "While any enemy unit is diminished, this unit can spend a round feeding on the corpses to increment their casualty die. "
            break
        case "Hurl Rocks":
            output = "If this unit succeeds on an Attack check, it inflicts 2 casualties. against fortifications, it inflicts 1d6 casualties."
            break
        case "Savage":
            output = "This unit has advantage on the first Attack check it makes each battle."
            break
        case "Stalwart":
            output = "Enemy battle magic has disadvantage on Power checks against this unit"
            break
        case "Twisting Roots":
            output = "As an action, this unit can sap the walls of a fortification. Siege units have advantage on Power checks against sapped fortifications."
            break
        case "Undead":
            output = "Green and regular troops must pass a Morale check to attack this unit. Each enemy unit need only do this once. "
            break
        default:
            output = "None"
             
    }
 */