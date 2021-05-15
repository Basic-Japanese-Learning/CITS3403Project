
   var datas=[{
    Username:"abc001",
    Email:"abc001@qq.com",
    score:100
},{
    Username:"abc002",
    Email:"abc002@qq.com",
    score:99
},{
    Username:"abc003",
    Email:"abc003@qq.com",
    score:98
}];

var tbody=document.querySelector("tbody");
for(var i=0;i<datas.length;i++)  
{
    var tr=document.createElement("tr");
    tbody.appendChild(tr);
    //Create cells (3 cells related to data) in each row of tr. the number of TD cells depends on the number of attributes of each object. For loop traversing object data [i]
    for(var k in datas[i])  
    {
        var td=document.createElement("td");  //Creating Cells
        tr.appendChild(td);
        td.innerHTML=datas[i][k]; //Give TD the attribute value data [i] [k] in the object
    }
    //Create deleted cells
    var td=document.createElement("td");
    tr.appendChild(td);
    td.innerHTML="<a href='javascript:;'>Delete</a>";
}

//Delete operation
var as=document.querySelectorAll("a");
for(var i=0;i<as.length;i++)
{
    as[i].onclick=function () {  
        tbody.removeChild(this.parentNode.parentNode);
    }
}