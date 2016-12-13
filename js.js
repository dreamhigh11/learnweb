
var c=5
var t
var a=1
function timedCount()
{
	if(c!=0){
		document.getElementById('txt').value=c;
		c=c-1;
		t=setTimeout("timedCount()",1000);
	}
	else
	{
		endCount();
		alert("任务完成！")
	}
}//计时

function endCount()
{
c=3600;
//a=1;
setTimeout("document.getElementById('txt').value=0",0);
clearTimeout(t);
wipeout();
 $(".task").fadeIn("slow");
 $(".task").css("text-align","center");//无效

}//结束计时



/*function changestartbutton()
{
if (a=1)
{
document.getElementById('starttime').value="暂停任务!";
timedCount();
a=2;
}
else
{
stopCount();
document.getElementById('starttime').value="继续任务!";

a=1;
}
}

*/

function stopCount()
{
clearTimeout(t);//暂停计时
}


function add()
{
	var para=document.createElement("p");
	para.id="nowtask"; 
var node=document.createTextNode("学习一小时");
para.appendChild(node);

var element=document.getElementById("list1");
element.appendChild(para);
	
	
	

}//增加列表项
function wipeout()
{


document.getElementById("nowtask").style.textDecoration="line-through";

}


$(document).ready(function()
{
	$(".time").hide();
  $(".task").click(function()
  {
  $(".time").show();
  $(".task").animate({left:'250px'});
  $(".task").fadeOut("slow");
  });
});