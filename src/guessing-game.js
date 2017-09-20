class GuessingGame {
    var max;
	var min;
    constructor() {max=0; min=0;}

    setRange(min1, max1) {
    min=min1;
	max=max1;
    }

    guess() {
	return Math.floor((max+min)/2);

    }

    lower() {

	max=Math.floor((max+min)/2);
    }

    greater() {
    min=Math.floor((max+min)/2);
    }
}

module.exports = GuessingGame;
