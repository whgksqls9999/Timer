const start = document.getElementById('start');
const stopp = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');



let time = 0;

let timeGo;

start.addEventListener('click',function(){
    timeGo = setInterval(function(){
        time ++;
    },1000);
    setInterval(function(){
        timer.textContent = time;
    });
})

stopp.addEventListener('click',function(){
    clearInterval(timeGo);
});

reset.addEventListener('click',function(){
    time = 0;
})