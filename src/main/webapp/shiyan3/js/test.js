window.onload=function(){
	            window.οnkeypress=function (e) {
	                if (e.charCode==103){
	                    alert('G键被点击')
	                }
	            }
	        }

				function OneDown(){
					console.log("开始调用")
					temp=1;
					//如果是开两个门，从后台传值1、2；OneDown条件下两个门开、一个门开这两个条件各半
/* 					if(){
						$("#a").rotate({center:["755px","115px"],animateTo: -150});
						$("#b").rotate({center:["755px","433px"],animateTo: 150});
					} */
					
					//如果开一个门
					if(temp==1){
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
					}
					
					
					$(".p1").animate({left:"188px"},2000,function(){
										$(".p1").animate({left:"553px",top:"230px"},2000,function(){
											$(".p1").animate({left:"580px"},1000,function(){
													$(".p2").animate({left:"230px"},2000,function(){
														//开门
														// 如果开两个门
														$("#a").rotate({center:["648px","150px"],animateTo: -150});
														//如果开一个门，就不能设置可以往关闭的门走，按键反应需要修改
														
														//如果按键向上
														 document.onkeydown=function(event){
															var e = event || window.event || arguments.callee.caller.arguments[0];
														 if(e && e.keyCode==38){ // 按上键 
														  //要做的事情
															$(".p2").animate({left:"593px",top:"-200px"},2000,function(){
																$(".p2").animate({left:"623px"},1000,function(){
																	//刷新页面重置位置
																	//location.reload();
																	document.getElementById("lin").style.left=p1Left+'px'
																})
															})
														  }
														  if(e && e.keyCode==40){ // 按下键
														   //要做的事情
														   $(".p2").animate({left:"593px",top:"230px"},2000,function(){
														   	$(".p2").animate({left:"623px"},1000,function(){
																//向后台传值：按的哪个键
																//刷新页面重置位置
																//location.reload();
															})
														   })
														   }
														}; 
													})

												
											});
										});
					});
					console.log("结束调用")
				}