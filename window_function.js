function conf() {
    var r=confirm("Hello");
    if (r) {
        alert("Yes");
    } else {
        alert("No");
    }
}

function inpu() {
    var a=prompt("Test");
    alert("你输入的是"+a);
}
var sec=0;
function timer(){ 
    sec++;
    alert(sec);
    if (sec>=10) 
        clearInterval(ttimer);
}
// setTimeout(inpu,5000);
// setInterval(timer,10000);
// var new_timer=timer();
// console.log(typeof(new_timer));
var ttimer=setInterval(timer, 1000);
