
const screen=document.getElementById('display')

function appendToDisplay(input){
    screen.value +=input;
}
function calculate(){
    screen.value=eval(screen.value)
}

function clearDisplay(){
    screen.value=""
}