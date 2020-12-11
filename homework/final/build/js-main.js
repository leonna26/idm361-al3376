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
    render();
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
    dayPercentageLandscape.innerHTML = '' + getDayPercentageLandscape().toFixed(0) + '%';
    monthPercentageLandscape.innerHTML = '' + getMonthPercentageLandscape().toFixed(0) + '%';
    yearPercentageLandscape.innerHTML = '' + getYearPercentageLandscape().toFixed(0) + '%';
    lifePercentageLandscape.innerHTML = '' + getLifePercentageLandscape().toFixed(0) + '%';


    var dayPercentageNum = getDayPercentage().toFixed(0);
    if (dayPercentageNum > 0 && (100 - dayPercentageNum) > 0) {

        let portraitPieChart = document.querySelector("#day-modal .piechart>*");
        portraitPieChart ? portraitPieChart.remove() : false
        buildChart(dayPercentageNum, 100 - dayPercentageNum, "#day-modal .piechart");


        let landscapePieChart = document.querySelector("#day-percentage-landscape>*")
        landscapePieChart ? landscapePieChart.remove() : false
        buildLandscapeChart(dayPercentageNum, 100 - dayPercentageNum, "#day-percentage-landscape");
    }

    var monthPercentageNum = getMonthPercentage().toFixed(0);
    if (monthPercentageNum > 0 && (100 - monthPercentageNum) > 0) {

        let portraitPieChart = document.querySelector("#month-modal .piechart>*");
        portraitPieChart ? portraitPieChart.remove() : false
        buildChart(monthPercentageNum, 100 - monthPercentageNum, "#month-modal .piechart");


        let landscapePieChart = document.querySelector("#month-percentage-landscape>*")
        landscapePieChart ? landscapePieChart.remove() : false
        buildLandscapeChart(monthPercentageNum, 100 - monthPercentageNum, "#month-percentage-landscape");
    }

    var yearPercentageNum = getYearPercentage().toFixed(0);
    if (yearPercentageNum > 0 && (100 - yearPercentageNum) > 0) {

        let portraitPieChart = document.querySelector("#year-modal .piechart>*");
        portraitPieChart ? portraitPieChart.remove() : false
        buildChart(yearPercentageNum, 100 - yearPercentageNum, "#year-modal .piechart");


        let landscapePieChart = document.querySelector("#year-percentage-landscape>*")
        landscapePieChart ? landscapePieChart.remove() : false
        buildLandscapeChart(yearPercentageNum, 100 - yearPercentageNum, "#year-percentage-landscape");
    }

    var lifePercentageNum = getLifePercentage().toFixed(0);
    if (lifePercentageNum > 0 && (100 - lifePercentageNum) > 0) {


        let portraitPieChart = document.querySelector("#life-modal .piechart>*");
        portraitPieChart ? portraitPieChart.remove() : false
        buildChart(lifePercentageNum, 100 - lifePercentageNum, "#life-modal .piechart");


        let landscapePieChart = document.querySelector("#life-percentage-landscape>*")
        landscapePieChart ? landscapePieChart.remove() : false
        buildLandscapeChart(lifePercentageNum, 100 - lifePercentageNum, "#life-percentage-landscape");
    }

    yearPercentage.innerHTML = '' + getYearPercentage().toFixed(0) + '%';
    var yearPercentageNum = getYearPercentage().toFixed(0);
    var yearPercentageRemain = (100 - yearPercentageNum);
    if (yearPercentageNum > 0 && yearPercentageRemain > 0) {
        buildChart(yearPercentageNum, yearPercentageRemain);
    }
    dayPercentage.innerHTML = '' + getDayPercentage().toFixed(0) + '%';
    monthPercentage.innerHTML = '' + getMonthPercentage().toFixed(0) + '%';
    lifePercentage.innerHTML = '' + getLifePercentage().toFixed(0) + '%';
    var lifePercentageNum = getLifePercentage().toFixed(0);
    console.log("life percentage is equal to " + lifePercentageNum);
    var percentageRemainNum = (100 - lifePercentageNum);
    console.log("percentage remaining is equal to " + percentageRemainNum);
    if (lifePercentageNum > 0 && percentageRemainNum > 0) {
        buildChart(lifePercentageNum, percentageRemainNum);
    }


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



/* function start() {
    setInterval(function() { render(); }, );
}

start(); */

// buildChart(40, 60);

function buildChart(userSlice, leftoverSlice, pieChartSelector) {
    // set the dimensions and margins of the graph
    var width = 250
    height = 250
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select(pieChartSelector)
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
        .range(["#FCCFCF", "#FFF9E4", "#7b6888", "#6b486b", "#a05d56"])

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
        .style("stroke-width", "4px")
        .style("opacity", 0.7)

}

function buildLandscapeChart(userSlice, leftoverSlice, pieChartSelector) {
    // set the dimensions and margins of the graph
    var width = 50
    height = 50
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select(pieChartSelector)
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
        .range(["#FCCFCF", "#FFF9E4", "#7b6888", "#6b486b", "#a05d56"])

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
        .style("stroke-width", "4px")
        .style("opacity", 0.7)

}




// local storage
var ageArray = new Array();
var quantityArray = new Array();
var mainNdx = 0;

function readData() {
    console.log("data called");
    if (typeof(Storage) !== "undefined") {
        ageStr = localStorage.your_Age;
        quantityStr = localStorage.your_LifeExpectancy;
        ndxStr = localStorage.your_Ndx;

        console.log("ageStr is " + ageStr);
        console.log("quantityStr is " + quantityStr);
        console.log("ndxStr is " + ndxStr);

        if (typeof(ageStr) !== "undefined") {
            ageArray = ageStr.split(",");
            quantityArray = quantityStr.split(",");
            mainNdx = parseInt(ndxStr);
            age.value = ageArray[mainNdx];
            quantity.value = quantityArray[mainNdx];
            ndx_result.value = mainNdx;
        } else {
            age.value = 0;
            quantity.value = 0;
            mainNdx.value = 0;
        }
    } else {
        alert('Sorry, this browser does not support local storage');
    }
}

function writeData() {
    console.log("write data called");
    if (typeof(Storage) !== "undefined") {
        ageArray.push(age.value);
        quantityArray.push(quantity.value);
        ageStr = ageArray.join();
        quantityStr = quantityArray.join();

        localStorage.your_Age = ageStr;
        localStorage.your_LifeExpectancy;
        localStorage.your_Ndx;

        ndx_result.value = mainNdx;
    } else {
        alert('Sorry, this browser does not support local storage')
    }
}