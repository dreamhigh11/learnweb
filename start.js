






var c=1500
var t
var a=1






/*var txt = '{ "acheive" : [' +
'{ "name":"学习一小时" , "number":"0" },'  +
 ']}';

var obj = eval ("(" + txt + ")");

var message=obj.acheive[0].number;



*/


function timedCount()
{
	
	
	
	
	
	if(c!=0){
		document.getElementById('txt').value=c;
		c=c-1;
		t=setTimeout("timedCount()",1000);//计时
	}
	else
	{
		endCount();
		alert("");
		
		$.get("./php/plusonecoin.php",function(data,status){//计时完成后执行php文件增加金币数
    
		$("#gain").html(data);//金币数显示出来
		
	});	
		
		$.get("./php/plusonepoint.php",function(data1,status){//计时完成后执行php文件增加积分数
    
		$("#result1").html(data1);//积分数显示出来
		
  });
		
	}
}

function endCount()
{
c=1500;
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
var node=document.createTextNode("学习25分钟");
para.appendChild(node);

var element=document.getElementById("list1");
element.appendChild(para);
	
	
	

}//增加列表项
function wipeout()
{


document.getElementById("nowtask").style.textDecoration="line-through";//划掉一个任务

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
 
if (rand>990){
	$("img.img1").html("").attr("src","images/500.png");
    $.post("./php/collection.php",{name:"500.png"});//复制已抽到的图片到collection文件夹
	}

else if(rand<=990&&rand>700){
	
	if(rand<990&&rand>980){
	$("img.img1").html("").attr("src","images/tamako/tamako.png");
	$.post("./php/collection.php",{name:"tamako/tamako.png"});//复制已抽到的图片到collection文件夹	
		
		
	}
	else if(rand<980&&rand>900){
		$("img.img1").html("").attr("src","images/tamako/anko.png");
	$.post("./php/collection.php",{name:"tamako/anko.png"});//复制已抽到的图片到collection文件夹	
		
	}
	
	else if(rand<900&&rand>850){
		$("img.img1").html("").attr("src","images/tamako/choi.png");
	$.post("./php/collection.php",{name:"tamako/choi.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else if(rand<850&&rand>800){
		$("img.img1").html("").attr("src","images/tamako/kanna.png");
	$.post("./php/collection.php",{name:"tamako/kanna.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else if(rand<800&&rand>750){
		$("img.img1").html("").attr("src","images/tamako/midori.png");
	$.post("./php/collection.php",{name:"tamako/midori.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else{
		$("img.img1").html("").attr("src","images/tamako/shiori.png");
	$.post("./php/collection.php",{name:"tamako/shiori.png"});//复制已抽到的图片到collection文件夹	
		
	}
}
else if(rand<=700&&rand>500){
	if(rand<700&&rand>690){
	$("img.img1").html("").attr("src","images/kon/mio.png");
	$.post("./php/collection.php",{name:"kon/mio.png"});//复制已抽到的图片到collection文件夹	
		
		
	}
	else if(rand<690&&rand>640){
		$("img.img1").html("").attr("src","images/kon/sawako.png");
	$.post("./php/collection.php",{name:"kon/sawako.png"});//复制已抽到的图片到collection文件夹	
		
	}
	
	else if(rand<640&&rand>600){
		$("img.img1").html("").attr("src","images/kon/mugi.png");
	$.post("./php/collection.php",{name:"kon/mugi.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else if(rand<600&&rand>570){
		$("img.img1").html("").attr("src","images/kon/jun.png");
	$.post("./php/collection.php",{name:"kon/jun.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else if(rand<570&&rand>540){
		$("img.img1").html("").attr("src","images/kon/ui.png");
	$.post("./php/collection.php",{name:"kon/ui.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else if(rand<540&&rand>510){
		$("img.img1").html("").attr("src","images/kon/ritsu.png");
	$.post("./php/collection.php",{name:"kon/ritsu.png"});//复制已抽到的图片到collection文件夹	
		
	}
	else{
		$("img.img1").html("").attr("src","images/kon/yui.png");
	$.post("./php/collection.php",{name:"kon/yui.png"});//复制已抽到的图片到collection文件夹	
		
	}
}


/*
else if(rand<=970&&rand>960){
	$("img.img1").html("").attr("src","images/morisama.png");
	$.post("./php/collection.php",{name:"morisama.png"});//复制已抽到的图片到collection文件夹
}
else if(rand<=960&&rand>900){
	$("img.img1").html("").attr("src","images/konata.png");
	$.post("./php/collection.php",{name:"konata.png"});//复制已抽到的图片到collection文件夹
}	
else if(rand<=900&&rand>700){
	$("img.img1").html("").attr("src","images/frenda.jpg");
	$.post("./php/collection.php",{name:"frenda.jpg"});//复制已抽到的图片到collection文件夹
}	
else if(rand<=700&&rand>500){
	$("img.img1").html("").attr("src","images/onodera.jpg");
	$.post("./php/collection.php",{name:"onodera.jpg"});//复制已抽到的图片到collection文件夹
}
else if(rand<=500&&rand>300){
	$("img.img1").html("").attr("src","images/menma.png");
	$.post("./php/collection.php",{name:"menma.png"});//复制已抽到的图片到collection文件夹
}*/
else{
	$("img.img1").html("").attr("src","images/marika.jpg");
	$.post("./php/collection.php",{name:"marika.jpg"});//复制已抽到的图片到collection文件夹
	
}

    $("#card").toggleClass("flipped");//卡片翻面
document.getElementById("flip").style.display="none";//隐藏抽卡按钮，不能在正门状况下接着抽



$.get("./php/minusone.php",function(data,status){//执行php文件减少一个金币
    
	$("#gain").html(data);//金币数显示出来
  });
  //htmlobj=$.ajax({url:"1.txt",async:false});
  //$("#gain").html(htmlobj.responseText);
 





 });
 
$("#reset").click(function(){
	

    $("#card").toggleClass("flipped");//卡牌css属性换成翻面，引发翻牌
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




$("div.father a,a.down").bind('click',function(event){   //bind函数（事件，反应行为)
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
	
	
	$.get("./php/read.php",function(data,status){//执行php文件读取金币数
    
	$("#gain").html(data);//金币数显示出来
	
  });
	$.get("./php/readpoint.php",function(data,status){//执行php文件读取金币数
    
	$("#result1").html(data);//金币数显示出来
	
  });
	
	
	
});
          


$(".time").hide();
  $(".task").click(function()
  {
  $(".time").show();
  $(".task").animate({left:'+=150px'});
  $(".task").fadeOut("slow");//弹出计时框，消去任务提示
  
  
  
  
  });

$(".down").click(function(){//点击收集显示所有已抽到的卡牌
	
$("#tamako").empty();
	 $.ajax({
		url:"./php/scantamako.php",  //遍历tamako文件夹下的图片地址
		async:false,
		success: function(data){  
		
			
			var strs= new Array(); //定义一数组 
			strs=data.split("<br/>"); //字符分割 
			for (i=2;i<strs.length-1 ;i++ ) 
			{ 
		
						var bigImg = document.createElement("img"); //创建一个img元素 
						var address=strs[i];
						 bigImg.src=address; //给img元素的src属性赋值 
							document.getElementById("tamako").appendChild(bigImg); //为dom添加子元素img 
		
		
		
		
		
			} 
		
		for(j=1;j<10-strs.length;j++)
		{
			var bigImg = document.createElement("img"); //创建一个img元素 
			bigImg.src="./none.png";//未获得的卡牌显示未获得
			document.getElementById("tamako").appendChild(bigImg); //为dom添加子元素img 
			
		}
			
          
		}
		});
		
		
		
		
$("#kon").empty();
	 $.ajax({
		url:"./php/scankon.php",  //遍历kon文件夹下的图片地址
		async:false,
		success: function(data){  
		
			
			var strs= new Array(); //定义一数组 
			strs=data.split("<br/>"); //字符分割 
			for (i=2;i<strs.length-1 ;i++ ) 
			{ 
		
						var bigImg = document.createElement("img"); //创建一个img元素 
						var address=strs[i];
						 bigImg.src=address; //给img元素的src属性赋值 
							document.getElementById("kon").appendChild(bigImg); //为dom添加子元素img 
		
		
		
		
		
			} 
		
		for(j=1;j<12-strs.length;j++)
		{
			var bigImg = document.createElement("img"); //创建一个img元素 
			bigImg.src="./none.png";//未获得的卡牌显示未获得
			document.getElementById("kon").appendChild(bigImg); //为dom添加子元素img 
			
		}
			
          
		}
		});		
 
  


  
 }); 
 
 


});