document.write("count the number of days in month"+"<br>")
document.write("---------------------------------"+"<br>")

function getDaysInMonth(year, month) {
    var lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
}


var year = parseInt((prompt("enter the year")))
var month = parseInt((prompt("enter the month")))

var daysInMonth = getDaysInMonth(year, month);
document.write(`There are ${daysInMonth} days in the month of  ${month} ${year}.`);