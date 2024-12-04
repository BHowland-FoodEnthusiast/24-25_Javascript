//Setup access tp HTML elements to use the data from them
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

//add listener to the buttons
buttons.forEach(
    function(button){
        button.addEventListener('click', calculate)
    }
);

function calculate(event){
    //What was clicked
    const clickedValue = event.target.value;
    if(clickedValue === "="){
        if(display.value !== ""){
            //calculate and display
            display.value = eval(display.value);
        }
    }else if(clickedValue === "C"){
        display.value = "";
    }else{
        display.value += clickedValue;
    }

}