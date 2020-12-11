// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("calculate");

var save = document.getElementById("save");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

save.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//get buttons
var dayButton = document.getElementById("day");
var monthButton = document.getElementById("month");
var yearButton = document.getElementById("year");
var lifeButton = document.getElementById("life");

//get modals
var dayModal = document.getElementById("day-modal");
var monthModal = document.getElementById("month-modal");
var yearModal = document.getElementById("year-modal");
var lifeModal = document.getElementById("life-modal");

//event listener - modal and active off, modal and active on for click
dayButton.addEventListener("click", () => {
    offActive();
    isActive(dayButton);
    modalOn(dayModal);
    // addDisplay();
}, false);
monthButton.addEventListener("click", () => {
    offActive();
    isActive(monthButton);
    modalOn(monthModal);
    // addDisplay();
}, false);
yearButton.addEventListener("click", () => {
    offActive();
    isActive(yearButton);
    modalOn(yearModal);
    // addDisplay();
}, false);
lifeButton.addEventListener("click", () => {
    offActive();
    isActive(lifeButton);
    modalOn(lifeModal);
    // addDisplay();
}, false);

// modal and active off
function offActive() {
    dayButton.classList.remove("active");
    monthButton.classList.remove("active");
    yearButton.classList.remove("active");
    lifeButton.classList.remove("active");

    dayModal.style.display = "none";
    monthModal.style.display = "none";
    yearModal.style.display = "none";
    lifeModal.style.display = "none";
}

//event listener - modal and active off, modal and active on for click
dayButton.addEventListener("click", () => {
    offActive();
    isActive(dayButton);
    modalOn(dayModal);
    // addDisplay();
}, false);
monthButton.addEventListener("click", () => {
    offActive();
    isActive(monthButton);
    modalOn(monthModal);
    // addDisplay();
}, false);
yearButton.addEventListener("click", () => {
    offActive();
    isActive(yearButton);
    modalOn(yearModal);
    // addDisplay();
}, false);
lifeButton.addEventListener("click", () => {
    offActive();
    isActive(lifeButton);
    modalOn(lifeModal);
    // addDisplay();
}, false);

// modal and active off
function offActive() {
    dayButton.classList.remove("active");
    monthButton.classList.remove("active");
    yearButton.classList.remove("active");
    lifeButton.classList.remove("active");

    dayModal.style.display = "none";
    monthModal.style.display = "none";
    yearModal.style.display = "none";
    lifeModal.style.display = "none";
}

// active on for click
function isActive(button) {
    button.classList.add("active");
}

// modal on for click
function modalOn(modal) {
    modal.style.display = "inline-block";
}

// add modal on, add button off {
function addDisplay() {
    if (addButton.classList.contains("active")) {
        addButton.style.display = "none";
    } else {
        addButton.style.display = "inline-block";
    }
}

// CALCULATING AGE FROM DOB

function myAgeValidation() {

    var lre = /^\s*/;
    var datemsg = "";

    var inputDate = document.dobcode.myDate.value;
    inputDate = inputDate.replace(lre, "");
    document.dobcode.myDate.value = inputDate;
    datemsg = isValidDate(inputDate);
    if (datemsg != "") {
        alert(datemsg);
        return;
    } else {
        //Now find the Age based on the Birth Date
        getAge(new Date(inputDate));
    }

}

function getAge(birth) {

    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;

    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
        age = parseInt(age) - 1;
    }
    alert(age);

}

function isValidDate(dateStr) {


    var msg = "";
    // Checks for the following valid date formats:
    // MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY
    // Also separates date into month, day, and year variables

    // To require a 2 & 4 digit year entry, use this line instead:
    //var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
    // To require a 4 digit year entry, use this line instead:
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;

    var matchArray = dateStr.match(datePat); // is the format ok?
    if (matchArray == null) {
        msg = "Date is not in a valid format.";
        return msg;
    }

    month = matchArray[1]; // parse date into variables
    day = matchArray[3];
    year = matchArray[4];


    if (month < 1 || month > 12) { // check month range
        msg = "Month must be between 1 and 12.";
        return msg;
    }

    if (day < 1 || day > 31) {
        msg = "Day must be between 1 and 31.";
        return msg;
    }

    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        msg = "Month " + month + " doesn't have 31 days!";
        return msg;
    }

    if (month == 2) { // check for february 29th
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            msg = "February " + year + " doesn't have " + day + " days!";
            return msg;
        }
    }

    if (day.charAt(0) == '0') day = day.charAt(1);

    //Incase you need the value in CCYYMMDD format in your server program
    //msg = (parseInt(year,10) * 10000) + (parseInt(month,10) * 100) + parseInt(day,10);

    return msg; // date is valid
}

// CALCULATE PERCENTAGES

var yearPercentage = document.getElementById('year-percentage');
var progressBar = document.getElementById('year-progress-bar');
var dayPercentage = document.getElementById('day-percentage');
var dayProgressBar = document.getElementById('day-progress-bar');
var lifePercentage = document.getElementById('life-percentage');
var lifeProgressBar = document.getElementById('life-progress-bar');
var ageInput = document.getElementById('age');
var monthPercentage = document.getElementById('month-percentage');
var lifeExpectancy = document.getElementById('quantity');

function getDayOfTheYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

function getDaysOfAYear() {
    var today = new Date();
    var year = today.getFullYear();
    var isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 366 : 365;
}

function getYearPercentage() {
    return (getDayOfTheYear() / getDaysOfAYear()) * 100;
}

function getSecondsOfCurrentDay() {
    var date = new Date();
    var secs = date.getSeconds() + (60 * (date.getMinutes() + (60 * date.getHours())));
    return secs;
}

function getSecondsInADay() {
    return 60 * 60 * 24;
}

function getDayPercentage() {
    return (getSecondsOfCurrentDay() / getSecondsInADay()) * 100;
}

function getMonthPercentage() {
    console.log("month percentage called");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dayOfMonth = date.getDate();
    var numberOfDaysInMonth = getDaysInMonth(month, year);
    var percentageOfMonth = (dayOfMonth / numberOfDaysInMonth) * 100;
    return (percentageOfMonth);
}

function getLifePercentage() {
    console.log("life percentage called");
    var secondsInAYear = 60 * 60 * 24 * getDaysOfAYear();
    var secondsInAverageLife = secondsInAYear * lifeExpectancy.value;
    var secondsInYourLife = secondsInAYear * ageInput.value;
    console.log(secondsInYourLife);
    return (secondsInYourLife / secondsInAverageLife) * 100;
}


function render() {
    yearPercentage.innerHTML = '' + getYearPercentage().toFixed(0) + '%';
    //  */ // progressBar.value = Math.floor(getYearPercentage());

    dayPercentage.innerHTML = '' + getDayPercentage().toFixed(0) + '%';
    // dayProgressBar.value = Math.floor(getDayPercentage());
    monthPercentage.innerHTML = '' + getMonthPercentage().toFixed(0) + '%';

    lifePercentage.innerHTML = '' + getLifePercentage().toFixed(0) + '%';
    //  */ // lifeProgressBar.value = Math.floor(getLifePercentage());
    yearPercentageLandscape.innerHTML = '' + getYearPercentageLandscape().toFixed(0) + '%';
    var lifePercentageNum = getLifePercentage().toFixed(0);
    console.log("life percentage is equal to " + lifePercentageNum);
    var percentageRemainNum = (100 - lifePercentageNum);
    console.log("percentage remaining is equal to " + percentageRemainNum);
    if (lifePercentageNum > 0 && percentageRemainNum > 0) {
        buildChart(lifePercentageNum, percentageRemainNum);
    }

    //  */ // progressBar.value = Math.floor(getYearPercentage());

    dayPercentageLandscape.innerHTML = '' + getDayPercentageLandscape().toFixed(0) + '%';
    // dayProgressBar.value = Math.floor(getDayPercentage());
    monthPercentageLandscape.innerHTML = '' + getMonthPercentageLandscape().toFixed(0) + '%';

    lifePercentageLandscape.innerHTML = '' + getLifePercentageLandscape().toFixed(0) + '%';
    //  */ // lifeProgressBar.value = Math.floor(getLifePercentage());
}




var yearPercentageLandscape = document.getElementById('year-percentage-landscape');
var progressBarLandscape = document.getElementById('year-progress-bar-landscape');
var dayPercentageLandscape = document.getElementById('day-percentage-landscape');
var dayProgressBarLandscape = document.getElementById('day-progress-bar-landscape');
var lifePercentageLandscape = document.getElementById('life-percentage-landscape');
var lifeProgressBarLandscape = document.getElementById('life-progress-bar-landscape');
var ageInputLandscape = document.getElementById('age-landscape');
var monthPercentageLandscape = document.getElementById('month-percentage-landscape');
var lifeExpectancyLandscape = document.getElementById('quantity-landscape');

function getDayOfTheYearLandscape() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

function getDaysOfAYearLandscape() {
    var today = new Date();
    var year = today.getFullYear();
    var isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 366 : 365;
}

function getYearPercentageLandscape() {
    return (getDayOfTheYearLandscape() / getDaysOfAYearLandscape()) * 100;
}

function getSecondsOfCurrentDayLandscape() {
    var date = new Date();
    var secs = date.getSeconds() + (60 * (date.getMinutes() + (60 * date.getHours())));
    return secs;
}

function getSecondsInADayLandscape() {
    return 60 * 60 * 24;
}

function getDayPercentageLandscape() {
    return (getSecondsOfCurrentDay() / getSecondsInADay()) * 100;
}

function getMonthPercentageLandscape() {
    console.log("month percentage called");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dayOfMonth = date.getDate();
    var numberOfDaysInMonth = getDaysInMonth(month, year);
    var percentageOfMonth = (dayOfMonth / numberOfDaysInMonth) * 100;
    return (percentageOfMonth);
}

function getLifePercentageLandscape() {
    console.log("life percentage called");
    var secondsInAYear = 60 * 60 * 24 * getDaysOfAYear();
    var secondsInAverageLife = secondsInAYear * lifeExpectancy.value;
    var secondsInYourLife = secondsInAYear * ageInput.value;
    console.log(secondsInYourLife);
    return (secondsInYourLife / secondsInAverageLife) * 100;
}

/* 
function render() {
    yearPercentageLandscape.innerHTML = '' + getYearPercentageLandscape().toFixed(0) + '%';
    //  */ // progressBar.value = Math.floor(getYearPercentage());

dayPercentageLandscape.innerHTML = '' + getDayPercentageLandscape().toFixed(0) + '%';
// dayProgressBar.value = Math.floor(getDayPercentage());
monthPercentageLandscape.innerHTML = '' + getMonthPercentageLandscape().toFixed(0) + '%';

lifePercentageLandscape.innerHTML = '' + getLifePercentageLandscape().toFixed(0) + '%';
//  */ // lifeProgressBar.value = Math.floor(getLifePercentage());


function getDaysInMonth(month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
};



function start() {
    setInterval(function() { render(); }, );
}

start();

// buildChart(40, 60);

function buildChart(userSlice, leftoverSlice) {
    // set the dimensions and margins of the graph
    var width = 320
    height = 320
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create dummy data
    var data = { a: userSlice, b: leftoverSlice }

    // set the color scale
    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function(d) { return d.value; })
    var data_ready = pie(d3.entries(data))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(0)
            .outerRadius(radius)
        )
        .attr('fill', function(d) { return (color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

}