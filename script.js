
var display = document.querySelector(".result")

var result
    function todisplay(input){
        display.value +=input
    }

    function cleardisplay(){
        display.value = "";
        display.value = "";
    }

    function calculate(){
        result = eval(display.value)
        display.value = result
    }

    function back(){
        display.value = display.value.slice(0,-1)
    }