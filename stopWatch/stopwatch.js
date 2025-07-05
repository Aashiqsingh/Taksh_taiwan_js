var hours = 0;
var mins = 0;
var secs = 0;

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



const start2 = ()=>{

    secs++;
    // console.log(secs);
    if(secs == 60){
        secs = 0;
        mins++;
    }
    else if(mins == 60){
        mins = 0;
        hours++;
    }

    hour.innerHTML = hours < 10 ? "0"+hours : hours;
    min.innerHTML = mins < 10 ? "0"+mins : mins;
    sec.innerHTML = secs < 10 ? "0"+secs : secs;
    
}


const start = ()=>{

    x = setInterval(()=>{
        start2()
    },1000)
}


const stop = ()=>{
    clearInterval(x);
}

const reset = ()=>{
    secs = 0;
    mins = 0;
    hours = 0;

    hour.innerHTML = hours < 10 ? "0"+hours : hours;
    min.innerHTML = mins < 10 ? "0"+mins : mins;
    sec.innerHTML = secs < 10 ? "0"+secs : secs;

    clearInterval(x)
}