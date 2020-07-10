function value_Function() {
    var X=5;
    X++;
    document.getElementById("increment").innerHTML= X++;

}

function decrement_Function() {
    var Y=5;
    Y--;
    document.getElementById("decrement").innerHTML= Y--;
}

function addition_Function() {
    var addition = 9 + 9;
    document.getElementById("addition").innerHTML = "9 + 9 = " + addition;
}

function subtraction_Function() {
    var subtraction = 6 - 3;
    document.getElementById("subtraction").innerHTML = "6 - 3 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 8 * 8;
    document.getElementById("multiplication").innerHTML = "8 * 8 = " + multiplication;
}

function division_Function() {
    var division = 16/4;
    document.getElementById("division").innerHTML = "16/4=" + division;
}

function more_Math() {
    var simple_Math = (5*5) - 10 + (30-3);
    document.getElementById("simple_Math").innerHTML = "(5*5)-10+(30-3)=" + simple_Math
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("percent").innerHTML = "When you divide 25 by 6, you have a remainder of: " + simple_Math;
}

window.alert(Math.random()*100);