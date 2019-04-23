// Ready code when loaded
$(document).ready(function () {

    //Number from clicking crystals
    var yourNumber = 0;

    //Starting variables needed for building

    var wins = 0;

    var losses = 0;

    var score = 0;

    var yellowVal = 0;

    var blueVal = 0;

    var greenVal = 0;

    var redVal = 0;

    var randomNum = '';

    var minNum = 3;

    var maxNum = 10;



    //Random Target Number we want to reach

    function randomTargetNumber() {
        return Math.floor(math.random() * 40) + 1)
}

//Giving our crystals a random number value

function crystalValue() {

    var min = 1;
    var max = 7;

    randomNum = randomNumberRange(minNum, maxNum);
    // Random yellow value
    yellowVal = randomNumberRange(min, max);
    // Random blue value
    blueVal = randomNumberRange(min, max);
    // Random green value
    greenVal = randomNumberRange(min, max);
    // Random red value
    redVal = randomNumberRange(min, max);

}
