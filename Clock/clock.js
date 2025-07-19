

const getTime = ()=>{
    let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    hours.innerHTML = hour < 10 ? "0" + hour : hour
    minutes.innerHTML = minute < 10 ? "0" + minute : minute
    seconds.innerHTML = second < 10 ? "0" + second : second

    // console.log(hour , minute , second);
    
}

setInterval(()=>{
    getTime()
},1000)