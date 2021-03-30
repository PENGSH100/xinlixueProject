			function data2(){
			  var con = {};
			  con["times"] = times;
			  con["choose"] = choose;
			  con["age"] = age;
			  con["sex"] = sex;
			  var json = JSON.stringify(con);          
			  console.log("封装成json数据为："+json);  
			}
			
			function OneUp(){
			
				$(".p1").animate({left:"100px"},2000,function(){
									$(".p1").animate({left:"553px",top:"-180px"},2000,function(){
										$(".p1").animate({left:"580px"},1000,function(){
												$(".p2").animate({left:"230px"},2000,function(){
													//开门
													// 门2开
													$("#b").rotate({center:["648px","350px"],animateTo: 150});
													//如果按键向上
													 document.onkeydown=function(event){
														var e = event || window.event || arguments.callee.caller.arguments[0];
													 if(e && e.keyCode==38){ // 按上键 
													  //要做的事情
														$(".p2").animate({left:"593px",top:"-180px"},2000,function(){
															$(".p2").animate({left:"623px"},1000,function(){
																//后台要记录的按键反应数据
																choose=1
																console.log("按键"+choose)
																//每次按键后,向后台传递参数,这里的方法还没写
																
																//刷新页面重置位置
																location.reload();
															})
														})
													  }
													  if(e && e.keyCode==40){ // 按下键
													   //要做的事情
													   $(".p2").animate({left:"593px",top:"200px"},2000,function(){
													   	$(".p2").animate({left:"623px"},1000,function(){
															choose=2
															console.log("按键"+choose)
															
															//刷新页面重置位置
															location.reload();
														})
													   })
													   }
													}; 
												})
											
										});
									});
				});
			}