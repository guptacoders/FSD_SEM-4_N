function UpdateTime(){
    const timestring = new Date().toLocaleTimeString()
    console.log(timestring)
}

var a = setInterval(UpdateTime,1000)

setTimeout(()=>{clearInterval(a)},5000)