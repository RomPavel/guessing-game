class GuessingGame {
    constructor() {this.max=0; this.min=0;}

    setRange(min1, max1) {
    this.min=min1;
	this.max=max1;
    }

    guess() {
	return Math.floor((this.max+this.min)/2);

    }

    lower() {

	this.max=Math.floor((this.max+this.min)/2)-1;
    }

    greater() {
    this.min=Math.floor((this.max+this.min)/2)+1;
    }
}

module.exports = GuessingGame;
