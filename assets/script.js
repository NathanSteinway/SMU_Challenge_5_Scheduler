var rightNow = moment().format("MMMM Do, YYYY");
var currentDate = document.getElementById('currentDay');
var saveBtn = $('.saveBtn');

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

saveBtn.on("click", function() {

    var time = $(this).siblings(".blockTime").text();
    var blockText = $(this).siblings(".textEntry").val();

    localStorage.setItem(time, blockText);

});

getDate();
colorCoding();