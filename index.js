class Countdown{
    constructor(id, month, day, title, color1, color2, foregroundColor) {
        this.id = id
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
        var yearDiff = this.date.getFullYear() - this.today.getFullYear();
        var monthDiff = this.date.getMonth() - this.today.getMonth();
        var dayDiff = this.date.getDate() - this.today.getDate();
        if (monthDiff < 0) {
            monthDiff += 12;
        }
        if (dayDiff < 0) {
            dayDiff += lastDay(this.date.getMonth(),this.date.getFullYear());
        }
        var hourDiff = 23 - this.today.getHours();
        var minDiff = 59 - this.today.getMinutes();
        var secDiff = 59 - this.today.getSeconds();
        return [yearDiff, monthDiff, dayDiff, hourDiff, minDiff, secDiff]
    }
}

function changeText(id, month, day, title, color1, color2, foregroundColor) {
    var holiday = new Countdown(id, month, day, title, color1, color2, foregroundColor);
    var countdown = holiday.calcCountdown();
    document.getElementById("DateDisplay").innerHTML = countdown[1] + " months " + countdown[2] + " days " + countdown[3] + " hours " + countdown[4] + " minutes " + countdown[5] + " seconds "
}

function lastDay(month,year) {
    return new Date(month,year,0);
}


// var newYears = new Countdown("NY-button", 0, 1, "New Year's Day", "Dark Blue", "White", "Gray");
// var valentines = new Countdown("VDay-button", 1, 14, "Valentine's Day", "Red", "Pink", "White");
// var stPattys = new Countdown("SPDay-button", 2, 17, "Saint Patrick's Day", "Green", "White", "Black");
// var fourthOfJuly = new Countdown("4th-button", 6, 4, "Fourth of July", "Blue", "Red", "White");
// // var halloween = new Countdown("H-button", 9, 31, "Halloween", "Orange", "Black", "White");
// var christmas = new Countdown("Xmas-button", 11, 25, "Christmas", "Green", "Red", "White");
// var presetHolidays = [newYears, valentines, stPattys, fourthOfJuly, christmas]


// function setButton() {
//     for (var holiday in presetHolidays.length) {
//         var elementId = document.getElementById("\"" + holiday[0] + "\"").innerHTML = holiday.createCount
//         // elementID.

//     }
//     document.getElementById()
// }

// console.log(newYears.date)
// console.log(valentines.date);
// console.log(stPattys.date);
// console.log(fourthOfJuly.date);
// console.log(halloween.date);
// console.log(christmas.date);

