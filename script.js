const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var timer = [];
var i = 0;
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		 hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	document.getElementById("clock_circle")
			.innerHTML = currentTime;
}
// showTime();
setInterval(showTime, 1000);




let setalarm = ()=> {
    let alarm1 = document.getElementById("alarm_input");
    let alarm = alarm1.value;
    alarm1.value = "";
    if(alarm == ""){
let current_time = new Date();
let current_set_time = new Date(alarm);
let duration = current_set_time - current_time;
if(duration <= 0){
    alert("time has already passed");
}
else{
    displayalarm(current_set_alarm);

}
    }
}