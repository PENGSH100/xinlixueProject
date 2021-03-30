			let choose;//按键选择,1为上键,2为下键
			let responseData;
			let times=0;	//页面刷新次数
			let sub=1;//被试编号
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
				    if(times%2==0 && times!=0){
                        getTimesResult(sub);
                    }
					var data=response.result
					console.log("data2:"+data)
					//情境=1时开一个门,情境=2时开两个门,men=1时,开上门,men=2是开下门
					if(data.qingjing==1 && data.peoples==1 && data.fangxiang==1){
						//alert("无选择性情境,开上门,向上移动")
						//开上门
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
						OneUp();
					}
					if(data.qingjing==1 && data.peoples==1 && data.fangxiang==2){
						//开下门
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
						OneDown()
					}
					if(data.qingjing==1 && data.peoples==2 && data.fangxiang==1){
						alert("无可选性,2个小人,向上")
					}
					if(data.qingjing==1 && data.peoples==2 && data.fangxiang==2){
						alert("无可选性,2个小人,向下")
					}
					if(data.qingjing==1 && data.peoples==3 && data.fangxiang==1){
						alert("无可选性,3个小人,向上")
					}
					if(data.qingjing==1 && data.peoples==3 && data.fangxiang==2){
						alert("无可选性,3个小人,向下")
					}
					if(data.qingjing==1 && data.peoples==4 && data.fangxiang==1){
						alert("无可选性,4个小人,向上")
					}
					if(data.qingjing==1 && data.peoples==4 && data.fangxiang==2){
						alert("无可选性,4个小人,向下")
					}
					if(data.qingjing==2 && data.peoples==1 && data.fangxiang==1){
						//alert("有选择性情境,开两个门,向上移动")
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
						OneUp();
					}
					if(data.qingjing==2 && data.peoples==1 && data.fangxiang==2){
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
						OneDown()
					}
					if(data.qingjing==2 && data.peoples==2 && data.fangxiang==1){
						alert("有可选性,2个小人,向上")
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
					}
					if(data.qingjing==2 && data.peoples==2 && data.fangxiang==2){
						alert("有可选性,2个小人,向下")
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
					}
					if(data.qingjing==2 && data.peoples==3 && data.fangxiang==1){
						alert("有可选性,3个小人,向上")
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
					}
					if(data.qingjing==2 && data.peoples==3 && data.fangxiang==2){
						alert("有可选性,3个小人,向下")
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
					}
					if(data.qingjing==2 && data.peoples==4 && data.fangxiang==1){
						alert("有可选性,4个小人,向上")
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
					}
					if(data.qingjing==2 && data.peoples==4 && data.fangxiang==2){
						alert("有可选性,4个小人,向下")
						$("#a").rotate({center:["648px","120px"],animateTo: -150});
						$("#b").rotate({center:["648px","350px"],animateTo: 150});
					}
				});
					times++;
				// console.log("返回结果："+responseData.toString())

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
                    "data": JSON.stringify({"id":sub}),
                };
                $.ajax(settings).done(function (response) {
                    alert("休息一会吧！'</br>' 你当前的积分为: "+response.result+" 分")
                    console.log("getTimesResult save result success"+response.result);

                });


            }

//_____________________________1个小人向上移动
function OneUp () {
document.getElementById("p1").style.left = 0 + 'px'
document.getElementById("p1").style.top = 0 + 'px'
document.getElementById("p2").style.left = 0 + 'px'
document.getElementById("p2").style.top = 0 + 'px'
  $(".p1").animate({ left: "100px" }, 2000, function () {
    $(".p1").animate({ left: "553px", top: "-180px" }, 2000, function () {
      $(".p1").animate({ left: "580px" }, 1000, function () {
        $(".p2").animate({ left: "230px" }, 2000, function () {
          //开门
          // 门2开
          $("#b").rotate({ center: ["648px", "350px"], animateTo: 150 });
          //如果按键向上
          document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) { // 按上键 
              //要做的事情
              $(".p2").animate({ left: "593px", top: "-180px" }, 2000, function () {
                $(".p2").animate({ left: "623px" }, 1000, function () {
                  //后台要记录的按键反应数据
                  choose = 1
                   saveResult(changeChoose(choose))
                  console.log("按键" + choose)
                  //每次按键后,向后台传递参数
				  ajax("xinlixue/count",{"name":sub,"count":times});
                  //刷新页面重置位置
                  //location.reload();
                })
              })
            }
            if (e && e.keyCode == 40) { // 按下键
              //要做的事情
              $(".p2").animate({ left: "593px", top: "200px" }, 2000, function () {
                $(".p2").animate({ left: "623px" }, 1000, function () {
                  choose = 2
                  //changeChoose(choose)
                  console.log("按键" + choose)
					saveResult(changeChoose(choose))
                  //每次按键后,向后台传递参数
					ajax("xinlixue/count",{"name":sub,"count":times});
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
  return choose;
}

//_____________________________1个小人向上移动完
				
		//_____________________________1个小人向下移动
				function OneDown(){
	document.getElementById("p1").style.left = 0 + 'px'
	document.getElementById("p1").style.top = 0 + 'px'
	document.getElementById("p2").style.left = 0 + 'px'
	document.getElementById("p2").style.top = 0 + 'px'
					$(".p1").animate({left:"100px"},2000,function(){
										$(".p1").animate({left:"553px",top:"230px"},2000,function(){
											$(".p1").animate({left:"580px"},1000,function(){
													$(".p2").animate({left:"230px"},2000,function(){
														//开门
														// 如果开两个门
														$("#a").rotate({center:["648px","120px"],animateTo: -150});
														//如果开一个门，就不能设置可以往关闭的门走，按键反应需要修改
														
														//如果按键向上
														 document.onkeydown=function(event){
															var e = event || window.event || arguments.callee.caller.arguments[0];
														 if(e && e.keyCode==38){ // 按上键 
														  //要做的事情
															$(".p2").animate({left:"593px",top:"-200px"},2000,function(){
																$(".p2").animate({left:"623px"},1000,function(){
																	//后台要记录的按键反应数据
																	choose=1
																	//changeChoose(choose)

																	console.log("按键" + choose)
																	saveResult(changeChoose(choose))
																	//每次按键后,向后台传递参数
																	ajax("xinlixue/count",{"name":sub,"count":times});
																	//刷新页面重置位置
																	//location.reload();
																})
															})
														  }
														  if(e && e.keyCode==40){ // 按下键
														   //要做的事情
														   $(".p2").animate({left:"593px",top:"230px"},2000,function(){
														   	$(".p2").animate({left:"623px"},1000,function(){
																choose=2
																//changeChoose(choose)
																console.log("按键" + choose)
																saveResult(changeChoose(choose))
																//每次按键后,向后台传递参数
																ajax("xinlixue/count",{"name":sub,"count":times});
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
				}
					
		//_____________________________1个小人向下移动完
		
