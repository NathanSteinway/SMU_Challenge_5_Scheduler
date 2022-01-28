var rightNow = moment().format("MMMM Do, YYYY");
var currentDate = document.getElementById('currentDay');

function getDate() {

    const currentDateSpan = document.createElement("span");
    currentDateSpan.innerHTML = rightNow;
    document.getElementById("currentDay").appendChild(currentDateSpan);

};

function colorCoding() {

    var hour = moment().hours();

    $(".time-block").each(function() {

        var irlHour = parseInt($(this).attr("id"));

        if (irlHour < hour) {

            $(this).addClass("past");

        } else if (irlHour === hour) {

            $(this).addClass("present");

        } else {

            $(this).addClass("future");

        }
    })
};

getDate();
colorCoding();