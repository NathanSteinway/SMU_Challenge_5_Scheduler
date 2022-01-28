var rightNow = moment().format("MMMM Do, YYYY");
var currentDate = document.getElementById('currentDay');

function getDate() {

    const currentDateSpan = document.createElement("span");
    currentDateSpan.innerHTML = rightNow;
    document.getElementById("currentDay").appendChild(currentDateSpan);

}

getDate();