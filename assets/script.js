// var today = moment();
// $("#1a").text(today.format("MMM Do, YYYY"));
// Create a header/hero area that welcomes users to the application and displays 
// the current time and date using Moment.js with setInterval().

var displayTime1 = $("#time-display")

function timeCount(){
var timeDisplay = moment().format("hh:mm:ss");
displayTime1.text(timeDisplay);
}
setInterval(timeCount, 1000);