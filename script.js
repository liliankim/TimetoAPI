var day = moment().format('dddd, MMMM Do YYYY');

var hoursNow = moment().hour();
ar userInput;
$('#currentDay').html(day);

function background(){
TimeBlocks.each(function()
{
    var hour = pareseInt($(this).attr("data-hour").split ('_')[0]);
    console.log(hour)

    if (hour<hoursNow){
        $(this).addClass("past");
    }
    else if(hour === hoursNow){
        $(this).addClass("present")
    }
    else{
        $(this).addlass("future")
    }
});}

