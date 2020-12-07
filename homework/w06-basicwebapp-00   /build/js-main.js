// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("calculate");

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
    addDisplay();
}, false);
monthButton.addEventListener("click", () => {
    offActive();
    isActive(monthButton);
    modalOn(monthModal);
    addDisplay();
}, false);
yearButton.addEventListener("click", () => {
    offActive();
    isActive(yearButton);
    modalOn(yearModal);
    addDisplay();
}, false);
lifeButton.addEventListener("click", () => {
    offActive();
    isActive(lifeButton);
    modalOn(lifeModal);
    addDisplay();
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
    addDisplay();
}, false);
monthButton.addEventListener("click", () => {
    offActive();
    isActive(monthButton);
    modalOn(monthModal);
    addDisplay();
}, false);
yearButton.addEventListener("click", () => {
    offActive();
    isActive(yearButton);
    modalOn(yearModal);
    addDisplay();
}, false);
lifeButton.addEventListener("click", () => {
    offActive();
    isActive(lifeButton);
    modalOn(lifeModal);
    addDisplay();
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

//modal on for click
function modalOn(modal) {
    modal.style.display = "inline-block";
}

//add modal on, add button off {
function addDisplay() {
    if (addButton.classList.contains("active")) {
        addButton.style.display = "none";
    } else {
        addButton.style.display = "inline-block";
    }
}