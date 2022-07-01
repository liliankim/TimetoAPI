var day = moment().format('dddd, MMMM Do YYYY');
var nineAM = $("#9am")
var tenAM = $("#10am")
var elevenAM = $("#11am")
var twelvePM = $("#12am")
var onePM = $("#1pm")
var twoPM = $("#2pm")
var threePM = $("#3pm")
var fourPM = $("#4pm")
var fivePM =$("#5pm")

var userInput;
$('#currentDay').html(day);
 
var hoursNow = moment().hour();

function background(){
TimeBlocks.each(function() 
{
    var hour = parseInt($(this).attr("data-hour").split('-')[0]);
    console.log(hour)

    if(hour < hoursNow) {
        $(this).addClass("past");
    }
    else if(hour === hoursNow){
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }

});}

    var TimeBlocks = $(".container").children();
    background()

$(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hours = $(this).siblings().text().trim();
    console.log(hours)
    localStorage.setItem(userInput, hours);
})
initPage()
function initPage() {
console.log("hours" + " " + hoursNow);
    var init9 = JSON.parse(localStorage.getItem("9 AM"));
    nineAM.val(init9);
    console.log("hours" + hoursNow)

    var init10 = JSON.parse(localStorage.getItem("10 AM"));
    tenAM.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11 AM"));
    elevenAM.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12 AM"));
    twelvePM.val(init12);

    var init1 = JSON.parse(localStorage.getItem("1 PM"));
    onePM.val(init1);

    var init2 = JSON.parse(localStorage.getItem("2 PM"));
    twoPM.val(init2);

    var init3 = JSON.parse(localStorage.getItem("3 PM"));
    threePM.val(init3);

    var init4 = JSON.parse(localStorage.getItem("4 PM"));
    fourPM.val(init4);

    var init5 = JSON.parse(localStorage.getItem("5 PM"));
    fivePM.val(init5);
}