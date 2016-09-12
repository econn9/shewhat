let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;

let monthNames = ["0", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

document.getElementById("monthBar").innerHtml = "Today: " + monthNames[month];
builDays(day);

function builDays(today){
    for(var i = -2; i < 2; i++){
        document.getElementById("dayBar").innerHtml += (today + i);
    }
}
