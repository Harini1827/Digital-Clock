function showcurrentTime(){
    let day=new Date()
    let hr=day.getHours()
    let min=day.getMinutes()
    let sec = day.getSeconds()

    let ampm = "AM";
    if (hr >= 12) {
        ampm = "PM";
    }
    if (hr > 12) {
        hr = hr - 12;
    }
    if (hr == 0) {
        hr = 12;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;
    // console.log(`${hr}:${min}:${sec}  ${ampm}`)
    // document.getElementById("time").innerHTML=`${hr}:${min}:${sec}${ampm}`
}
setInterval(()=>{
    showcurrentTime()
},1000)
