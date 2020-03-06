let timer = document.getElementById("timer");
let timeout = document.getElementById("timeout");


setInterval( function(){
    let data = new Date();
    timer.innerText = data.getHours() + ":" +data.getMinutes()+ ":" +data.getSeconds();
},1000);



function timerFunc(){
    let data = new Date();
    timeout.innerHTML = data.getHours() + ":" + data.getMinutes()+ ":"+data.getSeconds();
    setTimeout(timerFunc,1000);
}

timerFunc();