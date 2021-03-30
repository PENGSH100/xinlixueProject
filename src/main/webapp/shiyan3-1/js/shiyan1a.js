window.onload = function() {
	//
	getMoney();
     /* document.addEventListener("keydown",keydown);
		   function keydown(event){
		    //表示键盘监听所触发的事件，同时传递参数event
		    switch(event.keyCode){
		        case 37:
		            alert("左键");
		            break;
		        case 39:
		            alert("右键");
		            break;
		    }
			document.removeEventListener("keydown",keydown)
			} */
	//anjian();

	/* //小人移动的数量 0,1,2,3,4
	var peoples = new Array(1, 2, 3, 4)
	sortArray(peoples);
	//小人移动的方向20次 10次向上 10次向下
	var peopleMoves = new Array(1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2)
	sortArray(peopleMoves);
	//循环小人的个数
	for (var i = 0; i < peoples.length; i++) {
		//火灾分布的情况
		var fireMoves = new Array(1, 2, 1, 2, 1, 2, 1, 2, 1, 2)
		sortArray(fireMoves);
		var up = 0;
		var down = 0;
		if (peoples[i] == 1) {
			for (let peopleMove of peopleMoves) {
				if (peopleMove == 1) {
					OneDown(event);
					//火灾位置
					//alert("1");
					fireMoves[up];
					up++;
					//setTimeout(OneDown(),15000);
				} else {
					//火灾位置
					fireMoves[down];
					down++;
				}
			}
		}

	}
 */



//循环实验次数
//console.log(peopleMoves);


}
//_____________________________1个小人向上移动
function OneUp() {
	document.getElementById("p1").style.left = 0 + 'px'
	document.getElementById("p1").style.top = 0 + 'px'
	temp = 1;
	//如果是开两个门，从后台传值1、2；OneDown条件下两个门开、一个门开这两个条件各半

	//如果开一个门,无可选择性情境
	if (temp == 1) {
		$("#a").rotate({
			center: ["648px", "120px"],
			animateTo: -150
		});
	}

	$(".p1").animate({
		left: "188px"
	}, 2000, function() {
		$(".p1").animate({
			left: "553px",
			top: "-200px"
		}, 2000, function() {
			$(".p1").animate({
				left: "580px"
			}, 1000, function() {
				$(".p2").animate({
					left: "230px"
				}, 2000, function() {
					//开门
					// 门2开
					$("#b").rotate({
						center: ["648px", "350px"],
						animateTo: 150
					});
					//如果按键向上
					document.onkeydown = function(event) {
						var e = event || window.event || arguments.callee.caller.arguments[0];
						if (e && e.keyCode == 38) { // 按上键 
							//要做的事情
							$(".p2").animate({
								left: "593px",
								top: "-200px"
							}, 2000, function() {
								$(".p2").animate({
									left: "623px"
								}, 1000, function() {
									//刷新页面重置位置
									$(".p1").css("left", p1Top)
									$(".p1").css("left", p1Left)
									// location.reload();
								})
							})
						}
						if (e && e.keyCode == 40) { // 按下键
							//要做的事情
							$(".p2").animate({
								left: "593px",
								top: "230px"
							}, 2000, function() {
								$(".p2").animate({
									left: "623px"
								}, 1000, function() {
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

//_____________________________1个小人向上移动完

//_____________________________1个小人向下移动
async function OneDown(event) {
	document.getElementById("p1").style.left = 0 + 'px'
	document.getElementById("p1").style.top = 0 + 'px'
	console.log("开始调用")
	temp = 1;

	//如果开一个门
	if (temp == 1) {
		$("#b").rotate({
			center: ["648px", "350px"],
			animateTo: 150
		});
	}

	$(".p1").animate({
		left: "188px"
	}, 200, function() {
		$(".p1").animate({
			left: "553px",
			top: "230px"
		}, 200, function() {
			$(".p1").animate({
				left: "580px"
			}, 100, function() {

				$(".p2").animate({
					left: "230px"
				}, 200, function() {
					//开门
					// 如果开两个门
					$("#a").rotate({
						center: ["648px", "150px"],
						animateTo: -150
					});
					//如果开一个门，就不能设置可以往关闭的门走，按键反应需要修改

					//如果按键向上
					document.onkeydown = function(event) {
						var e = event || window.event || arguments.callee.caller.arguments[0];
						if (e && e.keyCode == 38) { // 按上键 
							//要做的事情
							$(".p2").animate({
								left: "593px",
								top: "-200px"
							}, 200, function() {
								$(".p2").animate({
									left: "623px"
								}, 100)
							})

						}
						if (e && e.keyCode == 40) { // 按下键
							//要做的事情
							$(".p2").animate({
								left: "593px",
								top: "230px"
							}, 200, function() {
								$(".p2").animate({
									left: "623px"
								}, 100)
							})

						}
					arguments.callee.lastKey = event.keyCode;
					}


				})
			});
		});
	});
	console.log("结束调用")
	document.getElementById("p1").style.left = 100 + 'px'
	document.getElementById("p1").style.top = 100 + 'px'
}

//_____________________________1个小人向下移动完
function sortArray(array) {
	var m = array.length,
		t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

//参数n为休眠时间，单位为毫秒:
function sleepss(n) {
	var start = new Date().getTime();
	//  console.log('休眠前：' + start);
	while (true) {
		if (new Date().getTime() - start > n) {
			break;
		}
	}
}

function print(i) {
	sleepss(10000);
	console.log(i);
}
async function getMoney() {
	var money = [100, 200, 300]
	 for(let i=0;i < money.length;i++){
		alert("循环开始"+i);
		
	} 
	/* Promise.all(money).then(res=>{
		res.forEach((i)=>{
			document.addEventListener("keydown",keydown);
			 await function keydown(event,i){
			    //表示键盘监听所触发的事件，同时传递参数event
			    switch(event.keyCode){
			        case 37:
			            alert("左键"+i);
			            break;
			        case 39:
			            alert("右键"+i);
			            break;
			    }
				document.removeEventListener("keydown",keydown)
				} 
		})
	})	 */
}

