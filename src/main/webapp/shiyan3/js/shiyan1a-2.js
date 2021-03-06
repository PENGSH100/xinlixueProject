			let choose;//按键选择,1为上键,2为下键
			let responseData;
			let times=0;	//页面刷新次数
			let sub=0;//被试编号
			let age=23;//被试年龄
			let sex=2;//被试性别,男1,女2
			const con = {};
			
			window.onload=function(){
				sub=getUrlParam("sub");
				console.log("用户编号:"+sub)

				if(times==0){
					ajax("xinlixue/count",{"name":sub,"count":times});
				}
	
			};
			function getUrlParam(name) {
				//构造一个含有目标参数的正则表达式对象
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg); //匹配目标参数
				if (r != null) {
					return unescape(r[2]);
				} else {
					return null; //返回参数值
				}
			};
			

			
			function ajax(url,dataBody){
				var settings = {
					"url": "http://localhost:8080/"+url,
					"method": "POST",
					"timeout": 0,
					"headers": {
						"Content-Type": "application/json"
					},
					"data": JSON.stringify(dataBody),
				};
				$.ajax(settings).done( function (response) {
					if(times%2==0 && times!=0) {
						getTimesResult(sub,times);
					}
					var data=response.result;
					console.log("data2:"+data);
					$("#cover").show();
					$("#a").rotate({center:["658px","154px"],animateTo: 0});
					$("#b").rotate({center:["658px","402px"],animateTo: 0});
					$("#cover").delay(800).hide(0);


					//情境=1时开一个门,情境=2时开两个门,men=1时,开上门,men=2是开下门
					if(data.qingjing==1 && data.peoples==1 && data.fangxiang==1){
						console.log("无选择性情境,1个小人向上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						OneUp();
					}
					if(data.qingjing==1 && data.peoples==1 && data.fangxiang==2){
						console.log("无选择性情境,1个小人向下");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						OneDown()
					}
					if(data.qingjing==1 && data.peoples==2 && data.fangxiang==1){
						console.log("无选择性情境,2个小人向上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						TowUp();
					}
					if(data.qingjing==1 && data.peoples==2 && data.fangxiang==2){
						console.log("无选择性情境,2个小人向下");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TowDown()
					}
					if(data.qingjing==1 && data.peoples==3 && data.fangxiang==1){
						console.log("无选择性情境,3个小人向上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						ThreeUp();
					}
					if(data.qingjing==1 && data.peoples==3 && data.fangxiang==2){
						console.log("无选择性情境,3个小人向下");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						ThreeDown()
					}
					if(data.qingjing==1 && data.peoples==4 && data.fangxiang==1){
						console.log("无选择性情境,4个小人向上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						FourUp();
					}
					if(data.qingjing==1 && data.peoples==4 && data.fangxiang==2){
						console.log("无选择性情境,4个小人向下");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						FourDown()
					}
					if(data.qingjing==2 && data.peoples==1 && data.fangxiang==1){
						console.log("有选择性情境,1个小人向上");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						OneUp();
					}
					if(data.qingjing==2 && data.peoples==1 && data.fangxiang==2){
						console.log("有选择性情境,1个小人向下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						OneDown()
					}
					if(data.qingjing==2 && data.peoples==2 && data.fangxiang==1){
						console.log("有选择性情境,2个小人向上");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						TowUp()
					}
					if(data.qingjing==2 && data.peoples==2 && data.fangxiang==2){
						console.log("有选择性情境,2个小人向下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TowDown()
					}
					if(data.qingjing==2 && data.peoples==3 && data.fangxiang==1){
						console.log("有选择性情境,3个小人向上");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						ThreeUp()
					}
					if(data.qingjing==2 && data.peoples==3 && data.fangxiang==2){
						console.log("有选择性情境,3个小人向下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						ThreeDown()
					}
					if(data.qingjing==2 && data.peoples==4 && data.fangxiang==1){
						console.log("有选择性情境,4个小人向上");
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						FourUp()
					}
					if(data.qingjing==2 && data.peoples==4 && data.fangxiang==2){
						console.log("有选择性情境,4个小人向下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						FourDown()
					}
					if(data.qingjing==3){
						console.log("基线条件");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						Zero()
					}
					if(data.qingjing==4 && data.peoples==2 && data.fangxiang==1){
						console.log("填充试次,2个卡通人物,1上1下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC1()
					}
					if(data.qingjing==4 && data.peoples==2 && data.fangxiang==2){
						console.log("填充试次,2个卡通人物,1下1上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC2()
					}
					if(data.qingjing==5 && data.peoples==3 && data.fangxiang==1){
						console.log("填充试次,3个卡通人物,1上2下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC3()
					}
					if(data.qingjing==5 && data.peoples==3 && data.fangxiang==2){
						console.log("填充试次,3个卡通人物,2上1下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC4()
					}
					if(data.qingjing==5 && data.peoples==3 && data.fangxiang==3){
						console.log("填充试次,3个卡通人物,1下2上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC5()
					}
					if(data.qingjing==5 && data.peoples==3 && data.fangxiang==4){
						console.log("填充试次,3个卡通人物,2下1上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC6()
					}
					if(data.qingjing==6 && data.peoples==4 && data.fangxiang==1){
						console.log("填充试次,4个卡通人物,1上3下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC7()
					}
					if(data.qingjing==6 && data.peoples==4 && data.fangxiang==2){
						console.log("填充试次,4个卡通人物,2上2下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC8()
					}
					if(data.qingjing==6 && data.peoples==4 && data.fangxiang==3){
						console.log("填充试次,4个卡通人物,3上1下");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC9()
					}
					if(data.qingjing==6 && data.peoples==4 && data.fangxiang==4){
						console.log("填充试次,4个卡通人物,1下3上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC10()
					}
					if(data.qingjing==6 && data.peoples==4 && data.fangxiang==5){
						console.log("填充试次,4个卡通人物,2下2上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC11()
					}
					if(data.qingjing==6 && data.peoples==4 && data.fangxiang==6){
						console.log("填充试次,4个卡通人物,3下1上");
						$("#a").rotate({center:["658px","154px"],animateTo: -150});
						$("#b").rotate({center:["658px","402px"],animateTo: 150});
						TC12()
					}
					console.log('times'+times);
					times=times+1;
				});
			}


			

//_____________________________1个小人向上移动
function OneUp () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	//开门
	$("#b").rotate({ center: ["658px", "402px"], animateTo: 150 });
	        //如果按键向上
	        document.onkeydown = function (event) {
	          var e = event || window.event || arguments.callee.caller.arguments[0];
	          if (e && e.keyCode == 70) { // 按F键 
	            //要做的事情
	            $(".p2").animate({ left: "445px", top: "-180px" }, 1000, function () {
	              $(".p2").animate({ left: "545px" }, 1000, function () {
                      //后台要记录的按键反应数据
					  choose = 1;
					  saveResult(changeChoose(choose));
					  console.log("按键" + choose);
					  //每次按键后,向后台传递参数
					  ajax("xinlixue/count",{"name":sub,"count":times});
					  //刷新页面重置位置
					  //location.reload();
	              })
	            })
	          }
	          if (e && e.keyCode == 74) { // 按J键
	            //要做的事情
	            $(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
	              $(".p2").animate({ left: "545px" }, 1000, function () {
                      //后台要记录的按键反应数据
					  choose = 2;
					  saveResult(changeChoose(choose));
					  console.log("按键" + choose);
					  //每次按键后,向后台传递参数
					  ajax("xinlixue/count",{"name":sub,"count":times});
					  //刷新页面重置位置
					  //location.reload();
	              })
	            })
	          }
	        };
});
}

//_____________________________1个小人向上移动完
				
//_____________________________1个小人向下移动
function OneDown(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({left:"145px"},500);
		//开门
		$("#a").rotate({ center: ["658px", "154px"], animateTo: -150 });
		//按键
		document.onkeydown = function (event) {
		  var e = event || window.event || arguments.callee.caller.arguments[0];
		  if (e && e.keyCode == 70) { // 按F键 
		    //要做的事情
		    $(".p2").animate({ left: "445px", top: "-180px" }, 1000, function () {
		      $(".p2").animate({ left: "545px" }, 1000, function () {
				  //后台要记录的按键反应数据
				  choose = 1;
				  saveResult(changeChoose(choose));
				  console.log("按键" + choose);
				  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
				  //刷新页面重置位置
				  //location.reload();
		      })
		    })
		  }
		  if (e && e.keyCode == 74) { // 按J键
		    //要做的事情
		    $(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
		      $(".p2").animate({ left: "545px" }, 1000, function () {
				  //后台要记录的按键反应数据
				  choose = 2;
				  saveResult(changeChoose(choose));
				  console.log("按键" + choose);
				  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
		      })
		    })
		  }
		};
	})
}

//_____________________________1个小人向下移动完
		
//_____________________________2个小人向上移动
function TowUp () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
document.getElementById("p3").style.left = 0 + 'px';
document.getElementById("p3").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
	$(".p2").animate({ left: "545px" }, 500,function(){
		$(".p3").animate({ left: "190px"}, 500);
		//开门
		$("#b").rotate({ center: ["658px", "402px"], animateTo: 150 });
		//按键
		document.onkeydown = function (event) {
		  var e = event || window.event || arguments.callee.caller.arguments[0];
		  if (e && e.keyCode == 70) { // 按F键 
		    //要做的事情
		    $(".p3").animate({ left: "490px", top: "-180px" }, 1000, function () {
		      $(".p3").animate({ left: "590px" }, 500, function () {
				  //后台要记录的按键反应数据
				  choose = 1;
				  saveResult(changeChoose(choose));
				  console.log("按键" + choose);
				  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
		      })
		    })
		  }
		  if (e && e.keyCode == 74) { // 按J键
		    //要做的事情
		    $(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
		      $(".p3").animate({ left: "590px" }, 500, function () {
				  //后台要记录的按键反应数据
				  choose = 2;
				  saveResult(changeChoose(choose));
				  console.log("按键" + choose);
				  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
		      })
		    })
		  }
		};
	});  
});
}
//_____________________________2个小人向上移动完


//_____________________________2个小人向下移动
function TowDown () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
document.getElementById("p3").style.left = 0 + 'px';
document.getElementById("p3").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "190px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	$(".p2").animate({ left: "445px", top: "190px" }, 1000);
	$(".p2").animate({ left: "545px" }, 500,function(){
		$(".p3").animate({ left: "190px"}, 500);
		//开门
		$("#a").rotate({ center: ["658px", "154px"], animateTo: -150 });
		//按键
		document.onkeydown = function (event) {
		  var e = event || window.event || arguments.callee.caller.arguments[0];
		  if (e && e.keyCode == 70) { // 按F键 
		    //要做的事情
		    $(".p3").animate({ left: "490px", top: "-180px" }, 1000, function () {
		      $(".p3").animate({ left: "590px" }, 500, function () {
				  //后台要记录的按键反应数据
				  choose = 1;
				  saveResult(changeChoose(choose));
				  console.log("按键" + choose);
				  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
		      })
		    })
		  }
		  if (e && e.keyCode == 74) { // 按J键
		    //要做的事情
		    $(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
		      $(".p3").animate({ left: "590px" }, 500, function () {
				  //后台要记录的按键反应数据
				  choose = 2;
				  saveResult(changeChoose(choose));
				  console.log("按键" + choose);
				  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
		      })
		    })
		  }
		};
	});  
});
}
//_____________________________2个小人向下移动完


//_____________________________3个小人向上移动
function ThreeUp () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
document.getElementById("p3").style.left = 0 + 'px';
document.getElementById("p3").style.top = 0 + 'px';
document.getElementById("p4").style.left = 0 + 'px';
document.getElementById("p4").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
	$(".p2").animate({ left: "545px" }, 500,function(){
		$(".p3").animate({ left: "190px"}, 500);
		$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
		$(".p3").animate({ left: "590px" }, 500,function(){
			$(".p4").animate({ left: "235px"}, 500);
			//开门
			$("#b").rotate({ center: ["658px", "402px"], animateTo: 150 });
			//按键
			document.onkeydown = function (event) {
			  var e = event || window.event || arguments.callee.caller.arguments[0];
			  if (e && e.keyCode == 70) { // 按F键 
			    //要做的事情
			    $(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
			      $(".p4").animate({ left: "635px" }, 500, function () {
					  //后台要记录的按键反应数据
					  choose = 1;
					  saveResult(changeChoose(choose));
					  console.log("按键" + choose);
					  //每次按键后,向后台传递参数
					  ajax("xinlixue/count",{"name":sub,"count":times});
			      })
			    })
			  }
			  if (e && e.keyCode == 74) { // 按J键
			    //要做的事情
			    $(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
			      $(".p4").animate({ left: "635px" }, 500, function () {
					  //后台要记录的按键反应数据
					  choose = 2;
					  saveResult(changeChoose(choose));
					  console.log("按键" + choose);
					  //每次按键后,向后台传递参数
					  ajax("xinlixue/count",{"name":sub,"count":times});
			      })
			    })
			  }
			};
		});
	});  
});
}
//_____________________________3个小人向上移动完



//_____________________________3个小人向下移动
function ThreeDown () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
document.getElementById("p3").style.left = 0 + 'px';
document.getElementById("p3").style.top = 0 + 'px';
document.getElementById("p4").style.left = 0 + 'px';
document.getElementById("p4").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "190px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	$(".p2").animate({ left: "445px", top: "190px" }, 1000);
	$(".p2").animate({ left: "545px" }, 500,function(){
		$(".p3").animate({ left: "190px"}, 500);
		$(".p3").animate({ left: "490px", top: "190px" }, 1000);
		$(".p3").animate({ left: "590px" }, 500,function(){
			$(".p4").animate({ left: "235px"}, 500);
			//开门
			$("#a").rotate({ center: ["658px", "154px"], animateTo: -150 });
			//按键
			document.onkeydown = function (event) {
			  var e = event || window.event || arguments.callee.caller.arguments[0];
			  if (e && e.keyCode == 70) { // 按F键 
			    //要做的事情
			    $(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
			      $(".p4").animate({ left: "635px" }, 500, function () {
					  //后台要记录的按键反应数据
					  choose = 1;
					  saveResult(changeChoose(choose));
					  console.log("按键" + choose);
					  //每次按键后,向后台传递参数
					  ajax("xinlixue/count",{"name":sub,"count":times});
			      })
			    })
			  }
			  if (e && e.keyCode == 74) { // 按J键
			    //要做的事情
			    $(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
			      $(".p4").animate({ left: "635px" }, 500, function () {
					  //后台要记录的按键反应数据
					  choose = 2;
					  saveResult(changeChoose(choose));
					  console.log("按键" + choose);
					  //每次按键后,向后台传递参数
					  ajax("xinlixue/count",{"name":sub,"count":times});
			      })
			    })
			  }
			};
		});
	});  
});
}
//_____________________________3个小人向下移动完

//_____________________________4个小人向上移动
function FourUp () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
document.getElementById("p3").style.left = 0 + 'px';
document.getElementById("p3").style.top = 0 + 'px';
document.getElementById("p4").style.left = 0 + 'px';
document.getElementById("p4").style.top = 0 + 'px';
document.getElementById("p5").style.left = 0 + 'px';
document.getElementById("p5").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
	$(".p2").animate({ left: "545px" }, 500,function(){
		$(".p3").animate({ left: "190px"}, 500);
		$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
		$(".p3").animate({ left: "590px" }, 500,function(){
			$(".p4").animate({ left: "235px"}, 500);
			$(".p4").animate({ left: "535px", top: "-180px" }, 1000);
			$(".p4").animate({ left: "635px" }, 500,function(){
				$(".p5").animate({ left: "280px"}, 500);
				//开门
				$("#b").rotate({ center: ["658px", "402px"], animateTo: 150 });
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
				      $(".p5").animate({ left: "680px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
				      $(".p5").animate({ left: "680px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});  
});
}
//_____________________________4个小人向上移动完


//_____________________________4个小人向下移动
function FourDown () {
document.getElementById("p1").style.left = 0 + 'px';
document.getElementById("p1").style.top = 0 + 'px';
document.getElementById("p2").style.left = 0 + 'px';
document.getElementById("p2").style.top = 0 + 'px';
document.getElementById("p3").style.left = 0 + 'px';
document.getElementById("p3").style.top = 0 + 'px';
document.getElementById("p4").style.left = 0 + 'px';
document.getElementById("p4").style.top = 0 + 'px';
document.getElementById("p5").style.left = 0 + 'px';
document.getElementById("p5").style.top = 0 + 'px';
$(".p1").animate({ left: "100px" }, 500);
$(".p1").animate({ left: "400px", top: "190px" }, 1000);
$(".p1").animate({ left: "500px" }, 500,function(){
	$(".p2").animate({left:"145px"},500);
	$(".p2").animate({ left: "445px", top: "190px" }, 1000);
	$(".p2").animate({ left: "545px" }, 500,function(){
		$(".p3").animate({ left: "190px"}, 500);
		$(".p3").animate({ left: "490px", top: "190px" }, 1000);
		$(".p3").animate({ left: "590px" }, 500,function(){
			$(".p4").animate({ left: "235px"}, 500);
			$(".p4").animate({ left: "535px", top: "190px" }, 1000);
			$(".p4").animate({ left: "635px" }, 500,function(){
				$(".p5").animate({ left: "280px"}, 500);
				//开门
				$("#a").rotate({ center: ["658px", "154px"], animateTo: -150 });
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
				      $(".p5").animate({ left: "680px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
				      $(".p5").animate({ left: "680px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});  
});
}
//_____________________________4个小人向下移动完


function Zero(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		
	});
	//按键
	document.onkeydown = function (event) {
	  var e = event || window.event || arguments.callee.caller.arguments[0];
	  if (e && e.keyCode == 70) { // 按F键 
	    //要做的事情
	    $(".p1").animate({ left: "400px", top: "-180px" }, 1000, function () {
	      $(".p1").animate({ left: "500px" }, 500, function () {
			  //后台要记录的按键反应数据
			  choose = 1;
			  saveResult(changeChoose(choose));
			  console.log("按键" + choose);
			  //每次按键后,向后台传递参数
			  ajax("xinlixue/count",{"name":sub,"count":times});
	      })
	    })
	  }
	  if (e && e.keyCode == 74) { // 按J键
	    //要做的事情
	    $(".p1").animate({ left: "400px", top: "190px" }, 1000, function () {
	      $(".p1").animate({ left: "500px" }, 500, function () {
			  //后台要记录的按键反应数据
			  choose = 2;
			  saveResult(changeChoose(choose));
			  console.log("按键" + choose);
			  //每次按键后,向后台传递参数
			  ajax("xinlixue/count",{"name":sub,"count":times});
	      })
	    })
	  }
	};
}

//_____________________________填充 2个小人,1上一下
function TC1(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500,function(){
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p3").animate({ left: "490px", top: "-180px" }, 1000, function () {
				      $(".p3").animate({ left: "590px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
				      $(".p3").animate({ left: "590px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});

}

//_____________________________填充 2个小人,1上一下  完



//_____________________________填充 2个小人,1下1上
function TC2(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500,function(){
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p3").animate({ left: "490px", top: "-180px" }, 1000, function () {
				      $(".p3").animate({ left: "590px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
				      $(".p3").animate({ left: "590px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});

}

//_____________________________填充 2个小人,1下1上  完



//_____________________________填充 3个小人,1上2下
function TC3(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});

}

//_____________________________填充 3个小人,1上2下  完


//_____________________________填充 3个小人,2上1下
function TC4(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});

}

//_____________________________填充 3个小人,2上1下  完


//_____________________________填充 3个小人,1下2上
function TC5(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});

}

//_____________________________填充 3个小人,1下2上  完


//_____________________________填充 3个小人,2下1上
function TC6(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				//按键
				document.onkeydown = function (event) {
				  var e = event || window.event || arguments.callee.caller.arguments[0];
				  if (e && e.keyCode == 70) { // 按F键 
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 1;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				  if (e && e.keyCode == 74) { // 按J键
				    //要做的事情
				    $(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
				      $(".p4").animate({ left: "635px" }, 500, function () {
						  //后台要记录的按键反应数据
						  choose = 2;
						  saveResult(changeChoose(choose));
						  console.log("按键" + choose);
						  //每次按键后,向后台传递参数
						  ajax("xinlixue/count",{"name":sub,"count":times});
				      })
				    })
				  }
				};
			});
		});
	});

}

//_____________________________填充 3个小人,2下1上  完


//_____________________________填充 4个小人,1上3下
function TC7(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	document.getElementById("p5").style.left = 0 + 'px';
	document.getElementById("p5").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".p5").animate({ left: "280px" }, 500);
					//按键
					document.onkeydown = function (event) {
					  var e = event || window.event || arguments.callee.caller.arguments[0];
					  if (e && e.keyCode == 70) { // 按F键 
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 1;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					  if (e && e.keyCode == 74) { // 按J键
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 2;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					};
				});
			});
		});
	});

}

//_____________________________填充 4个小人,1上3下  完


//_____________________________填充 4个小人,2上2下
function TC8(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	document.getElementById("p5").style.left = 0 + 'px';
	document.getElementById("p5").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".p5").animate({ left: "280px" }, 500);
					//按键
					document.onkeydown = function (event) {
					  var e = event || window.event || arguments.callee.caller.arguments[0];
					  if (e && e.keyCode == 70) { // 按F键 
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 1;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					  if (e && e.keyCode == 74) { // 按J键
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 2;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					};
				});
			});
		});
	});

}

//_____________________________填充 4个小人,2上2下  完


//_____________________________填充 4个小人,3上1下
function TC9(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	document.getElementById("p5").style.left = 0 + 'px';
	document.getElementById("p5").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".p5").animate({ left: "280px" }, 500);
					//按键
					document.onkeydown = function (event) {
					  var e = event || window.event || arguments.callee.caller.arguments[0];
					  if (e && e.keyCode == 70) { // 按F键 
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 1;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					  if (e && e.keyCode == 74) { // 按J键
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 2;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					};
				});
			});
		});
	});

}

//_____________________________填充 4个小人,3上1下  完


//_____________________________填充 4个小人,1下3上
function TC10(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	document.getElementById("p5").style.left = 0 + 'px';
	document.getElementById("p5").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "-180px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".p5").animate({ left: "280px" }, 500);
					//按键
					document.onkeydown = function (event) {
					  var e = event || window.event || arguments.callee.caller.arguments[0];
					  if (e && e.keyCode == 70) { // 按F键 
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 1;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					  if (e && e.keyCode == 74) { // 按J键
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 2;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					};
				});
			});
		});
	});

}

//_____________________________填充 4个小人,1下3上  完


//_____________________________填充 4个小人,2下2上
function TC11(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	document.getElementById("p5").style.left = 0 + 'px';
	document.getElementById("p5").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "-180px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".p5").animate({ left: "280px" }, 500);
					//按键
					document.onkeydown = function (event) {
					  var e = event || window.event || arguments.callee.caller.arguments[0];
					  if (e && e.keyCode == 70) { // 按F键 
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 1;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					  if (e && e.keyCode == 74) { // 按J键
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 2;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					};
				});
			});
		});
	});

}

//_____________________________填充 4个小人,2下2上  完


//_____________________________填充 4个小人,3下1上
function TC12(){
	document.getElementById("p1").style.left = 0 + 'px';
	document.getElementById("p1").style.top = 0 + 'px';
	document.getElementById("p2").style.left = 0 + 'px';
	document.getElementById("p2").style.top = 0 + 'px';
	document.getElementById("p3").style.left = 0 + 'px';
	document.getElementById("p3").style.top = 0 + 'px';
	document.getElementById("p4").style.left = 0 + 'px';
	document.getElementById("p4").style.top = 0 + 'px';
	document.getElementById("p5").style.left = 0 + 'px';
	document.getElementById("p5").style.top = 0 + 'px';
	
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "-180px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".p5").animate({ left: "280px" }, 500);
					//按键
					document.onkeydown = function (event) {
					  var e = event || window.event || arguments.callee.caller.arguments[0];
					  if (e && e.keyCode == 70) { // 按F键 
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 1;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					  if (e && e.keyCode == 74) { // 按J键
					    //要做的事情
					    $(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					      $(".p5").animate({ left: "680px" }, 500, function () {
							  //后台要记录的按键反应数据
							  choose = 2;
							  saveResult(changeChoose(choose));
							  console.log("按键" + choose);
							  //每次按键后,向后台传递参数
							  ajax("xinlixue/count",{"name":sub,"count":times});
					      })
					    })
					  }
					};
				});
			});
		});
	});

}

//_____________________________填充 4个小人,3下1上  完
			/**
			 * 这个是请求保存结果的接口
			 */
			function getTimesResult(sub) {
				console.log("getTimesResult 封装成json数据为：" + sub);
				var settings = {
					"url": "http://localhost:8080/xinlixue/getTimesResult",
					"method": "POST",
					"timeout": 0,
					"headers": {
						"Content-Type": "application/json"
					},
					"data": JSON.stringify({"sub":sub,"times":times}),
				};
				$.ajax(settings).done(function (response) {
					alert("休息一会吧！'</br>' 你当前的积分为: "+response.result+" 分")
					console.log("getTimesResult save result success"+response.toString());
					return;
				});


			}
			function changeChoose (choose) {
				con["times"] = times;
				con["sub"] = sub;
				con["age"] = age;
				con["sex"] = sex;
				con['choose'] = choose;
				const json = JSON.stringify(con);
				console.log("封装成json数据为：" + json);
				return json;
			}

			/**
			 * 这个是请求保存结果的接口
			 */
			function saveResult(choose) {
				console.log("saveResult 封装成json数据为：" + choose);
				var settings = {
					"url": "http://localhost:8080/xinlixue/saveResult",
					"method": "POST",
					"timeout": 0,
					"headers": {
						"Content-Type": "application/json"
					},
					"data": choose,
				};
				$.ajax(settings).done(function (response) {
					console.log("save result success"+response);
				});

			}