






var c=5
var t
var a=1






var txt = '{ "acheive" : [' +
'{ "name":"学习一小时" , "number":"0" },'  +
 ']}';

var obj = eval ("(" + txt + ")");

var message=obj.acheive[0].number;






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
		alert(message);
	}
}//计时

function endCount()
{
c=5;
//a=1;
setTimeout("document.getElementById('txt').value=0",0);
clearTimeout(t);
wipeout();

 $(".task").fadeIn("slow");
$(".task").animate({left:'-=150px'});
// $(".task").css("text-align","center");//无效

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


/*$(".img1").hide();
$("#try").click(function()
  {
  $(".img1").show();
 
  });

*/


$("#flip").click(function(){//随机数绝对抽哪张卡
	  var x = 1000;     
    var y = 0;     
 var rand = parseInt(Math.random() * (x - y ));     
  if (rand>500){
$("img.img1").html("").attr("src","500.png");
}
else{
	$("img.img1").html("").attr("src","1.png");
	
}

    $("#card").toggleClass("flipped");
document.getElementById("flip").style.display="none";
 });
 
$("#reset").click(function(){
	

    $("#card").toggleClass("flipped");
document.getElementById("flip").style.display="inline";
 }); 
 
 
 


$(".first").hover(
function(){
	$(".firstimg").css("display","inline");
},
function(){
	$(".firstimg").css("display","none");
});



$(".design").hover(
function(){
	$(".designimg").css("display","inline");
},
function(){
	$(".designimg").css("display","none");
});


$(".acheived").hover(
function(){
	$(".acheivedimg").css("display","inline");
},
function(){
	$(".acheivedimg").css("display","none");
});




$('div.father a').bind('click',function(event){   //bind函数（事件，反应行为)
    var $anchor = $(this);  //把a元素的内容整体传给变量$anchor ，$(this)的$有意义，Sanchor的$没有意义，jquery的标记习惯
                    
    $('html, body').stop().animate({ //animate动画函数（运动元素属性，运动时间，运功方式（easing里的函数））
        scrollTop: $($anchor.attr('href')).offset().top //href地址的位置的top坐标（垂直偏移坐标）
        }, 1500,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
    event.preventDefault();//把本身点击链接转到位置的默认事件要消除
});
          


	$(".time").hide();
  $(".task").click(function()
  {
  $(".time").show();
  $(".task").animate({left:'+=150px'});
  $(".task").fadeOut("slow");
  });




});