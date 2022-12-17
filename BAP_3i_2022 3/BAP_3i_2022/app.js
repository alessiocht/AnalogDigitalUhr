const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours()-6 + min) / 12;

	secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
	minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
	hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();


const secDiv2 = document.getElementById('sec2');
const minDiv2 = document.getElementById('min2');
const hourDiv2 = document.getElementById('hour2');

setInterval(updateClock2, 1000);

function updateClock2(){
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours() + min) / 12;

	secDiv2.style.transform = "rotate(" + (sec * 360) + "deg)";
	minDiv2.style.transform = "rotate(" + (min * 360) + "deg)";
	hourDiv2.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock2();


function showTime(){
    let date = new Date();
    let h = date.getHours() -6; // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


function showTime2(){
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay2").innerText = time;
  document.getElementById("MyClockDisplay2").textContent = time;
  
  setTimeout(showTime2, 1000);
  
}

showTime2();

function HideShowDigClock() {
    var x = document.getElementById("MyClockDisplay");
    var x2 = document.getElementById("MyClockDisplay2")
    var y = document.getElementById("clock");
    var y2 = document.getElementById("clock2")
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "block";
      y.style.display = "none";
      y2.style.display = "none";
    } else {
      x.style.display = "none";
      x2.style.display = "none";
      y.style.display = "block";
      y2.style.display = "block";
    }
  }