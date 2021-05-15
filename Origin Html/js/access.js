var rest = 600;
function timedCount(){
aa = window.setTimeout(submit_,1000 * 60 * 10);
setInterval("countdown()",1000)
}
function submit_(){
   form0.submit();
}
function countdown(){
rest = rest - 1;
document.getElementById("restoftime").innerHTML = rest;
}
