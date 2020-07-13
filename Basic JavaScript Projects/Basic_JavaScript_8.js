function full_Sentence() {
    var part_1 = "I am ";
    var part_2 = "20 years old, ";
    var part_3 = "and I live in ";
    var part_4 = "Canada.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "My favourite food is pizza with cheese.";
    var Section = Sentence.slice(21, 27);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 500;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 7384.574839475;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}