function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours >= 12) {
        session = "PM";
    }

    hours = hours < 10 ? "0"+hours : hours;
    seconds =  seconds < 10 ? "0"+seconds : seconds;
    minutes =  minutes < 10 ? "0"+minutes : minutes;

    let t = hours + " : " + minutes + " : " + seconds + ' ' + session;
    document.getElementById('time').innerText = t;
    setTimeout(showTime, 1000);
}