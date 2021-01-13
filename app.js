console.log("App connected")

const inputName = document.getElementById('input-name');
const cardName = document.getElementById('card-name');
const updateBtn = document.getElementById('update');

updateBtn.addEventListener('click',()=>{
    cardName.innerHTML = inputName.value
})