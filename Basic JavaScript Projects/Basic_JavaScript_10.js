function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
    
}

var trees = ["Pine", "Maple", "Spruce"];
function array_Function() {
document.getElementById("array").innerHTML = trees;
}

function let_Function() {
    var X = 50;
    document.write(X);
    {
        let X = 30;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}