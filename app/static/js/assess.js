var total_time = localStorage.getItem("resttime") ? localStorage.getItem("resttime") :  600;
var rest = total_time;

function timedCount(){
aa = window.setTimeout(submit_,1000 * 60 *10);
setInterval("countdown()",1000)
}

function prompt(){
   alert('Your anwsers have been submitted!');
}

function submit_(){
   localStorage.clear();
   document.getElementById('submit').click();
}

function countdown(){
   total_time = total_time - 1;
   localStorage.setItem("resttime",total_time);
   if(total_time<=0){
      submit_();
   }
   document.getElementById("restoftime").innerHTML = localStorage.getItem("resttime");
}