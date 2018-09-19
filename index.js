class Countdown{
    constructor(month, day, title, color1, color2, foregroundColor) {
        this.month = month;
        this.day = day;
        this.title = title;
        this.color1 = color1;
        this.color2 = color2;
        this.foregroundColor = foregroundColor;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.today = new Date();
        this.createCountdownDate();
    }

    createCountdownDate() {
        this.date = new Date(); 
        this.date.setMonth(this.month);
        this.date.setDate(this.day);
        this.date.setHours(this.hours);
        this.date.setMinutes(this.minutes);
        this.date.setSeconds(this.seconds);

        if (this.today > this.date) {
            this.date.setFullYear(this.date.getFullYear() + 1);
        }
    }

    calcCountdown() {
        today 
    }
}

var newYears = new Countdown(0, 1, "New Year's Day", "Dark Blue", "White", "Gray");
var valentines = new Countdown(1, 14, "Valentine's Day", "Red", "Pink", "White");
var stPattys = new Countdown(2, 17, "Saint Patrick's Day", "Green", "White", "Black");
var fourthOfJuly = new Countdown(6, 4, "Fourth of July", "Blue", "Red", "White");
var halloween = new Countdown(9, 31, "Halloween", "Orange", "Black", "White");
var christmas = new Countdown(11, 25, "Christmas", "Green", "Red", "White");

// console.log(newYears.date)
// console.log(valentines.date);
// console.log(stPattys.date);
// console.log(fourthOfJuly.date);
// console.log(halloween.date);
// console.log(christmas.date);

