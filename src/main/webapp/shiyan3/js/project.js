let times=-1;
let result=[1,2,3,4,5,6,7,,8,9,10];
var qingjing=[1,1,1,1,2,2,2,2]
var peoples=[1,2,3,4,1,2,3,4]
var fangxiang=[1,1,1,1,2,2,2,2]
qingjing=sortArray(qingjing)
peoples=sortArray(peoples)
fangxiang=sortArray(fangxiang)
//var m=3;
// result=sortArray(result);
// console.log(result)
window.onload=function(){
	//ajax ()
	$(".result").hide(0);
	order();
}

function order(){
	$("#cover").show();
	$("#cover").delay(500).hide(0);
	if(times>-2){
		fenshu()
	}

	times++;
	if(times>7){
		alert("练习结束")
	}

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
	$(".img1").attr("src","img/people1.png");
	$(".img2").attr("src","img/people1.png");
	$(".img3").attr("src","img/people1.png");
	$(".img4").attr("src","img/people1.png");
	$(".img5").attr("src","img/people1.png");
	$("#a").rotate({center:["658px","154px"],animateTo: 0});
	$("#b").rotate({center:["658px","402px"],animateTo: 0});

	if(qingjing[times]==1 && peoples[times]==1 && fangxiang[times]==1){
		console.log("无选择性情境,1个小人向上");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		OneUp();
	}
	if(qingjing[times]==1 && peoples[times]==1 && fangxiang[times]==2){
		console.log("无选择性情境,1个小人向下");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		OneDown()
	}
	if(qingjing[times]==1 && peoples[times]==2 && fangxiang[times]==1){
		console.log("无选择性情境,2个小人向上");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		TowUp();
	}
	if(qingjing[times]==1 && peoples[times]==2 && fangxiang[times]==2){
		console.log("无选择性情境,2个小人向下");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		TowDown()
	}
	if(qingjing[times]==1 && peoples[times]==3 && fangxiang[times]==1){
		console.log("无选择性情境,3个小人向上");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		ThreeUp();
	}
	if(qingjing[times]==1 && peoples[times]==3 && fangxiang[times]==2){
		console.log("无选择性情境,3个小人向下");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		ThreeDown()
	}
	if(qingjing[times]==1 && peoples[times]==4 && fangxiang[times]==1){
		console.log("无选择性情境,4个小人向上");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		FourUp();
	}
	if(qingjing[times]==1 && peoples[times]==4 && fangxiang[times]==2){
		console.log("无选择性情境,4个小人向下");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		FourDown()
	}
	if(qingjing[times]==2 && peoples[times]==1 && fangxiang[times]==1){
		console.log("有选择性情境,1个小人向上");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		OneUp();
	}
	if(qingjing[times]==2 && peoples[times]==1 && fangxiang[times]==2){
		console.log("有选择性情境,1个小人向下");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		OneDown()
	}
	if(qingjing[times]==2 && peoples[times]==2 && fangxiang[times]==1){
		console.log("有选择性情境,2个小人向上");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		TowUp()
	}
	if(qingjing[times]==2 && peoples[times]==2 && fangxiang[times]==2){
		console.log("有选择性情境,2个小人向下");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		TowDown()
	}
	if(qingjing[times]==2 && peoples[times]==3 && fangxiang[times]==1){
		console.log("有选择性情境,3个小人向上");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		ThreeUp()
	}
	if(qingjing[times]==2 && peoples[times]==3 && fangxiang[times]==2){
		console.log("有选择性情境,3个小人向下");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		ThreeDown()
	}
	if(qingjing[times]==2 && peoples[times]==4 && fangxiang[times]==1){
		console.log("有选择性情境,4个小人向上");
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		FourUp()
	}
	if(qingjing[times]==2 && peoples[times]==4 && fangxiang[times]==2){
		console.log("有选择性情境,4个小人向下");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
		FourDown()
	}
}

function fenshu(){
	sortArray(result);
	//console.log(result[0])
	if(result[0]%2==0){
		$(".result").html("+1")
	}else{
		$(".result").html("-1")
	}
}

function allot(f,g){

	//这个函数会传一个f过来,把数组里和f相等的值去掉
	var random=[1,2,3,4,5];
	random = random.filter(item => item != f); // 过滤掉值不为f,返回新数组
	sortArray(random);
	a=random[0];
	b=random[1];
	c=random[2];
	d=random[3];

	//去掉等于g的数字
	var random1=[1,2,3,4,5];
	random1 = random1.filter(item => item != g); // 过滤掉值不为g,返回新数组
	sortArray(random1);
	h=random1[0];
	i=random1[1];
	j=random1[2];
	k=random1[3];

	$(".w"+f).html(g);

	$(".w"+a).html(h);
	$(".w"+b).html(i);
	$(".w"+c).html(j);
	$(".w"+d).html(k);
}

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


//_____________________________1个小人向上移动
function OneUp() {
	document.getElementById("body").removeEventListener("keyup",test);

	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		//开门
		$("#b").rotate({ center: ["658px", "402px"], animateTo: 150,duration:200 });
		$(".p2").animate({left:"145px"},500,function(){
			$(".img2").attr("src","img/people1.png");
			$("#question").show();
			document.getElementById("body").addEventListener("keyup",test);
		});
	});
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 1;

						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 2;

						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________1个小人向上移动完



//_____________________________1个小人向下移动
function OneDown(){
	document.getElementById("body").removeEventListener("keyup",test);

	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		//开门
		$("#a").rotate({ center: ["658px", "154px"], animateTo: -150,duration:200 });
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500,function(){
			$(".img2").attr("src","img/people1.png");
			$("#question").show();
			document.getElementById("body").addEventListener("keyup",test);
		});
	})
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 1;

						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 2;

						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________1个小人向下移动完


//_____________________________2个小人向上移动
function TowUp () {
	document.getElementById("body").removeEventListener("keyup",test);
	//allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			//开门
			$("#b").rotate({ center: ["658px", "402px"], animateTo: 150,duration:200 });
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500,function(){
				$(".img3").attr("src","img/people1.png");
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			});

		});
	});
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________2个小人向上移动完


//_____________________________2个小人向下移动
function TowDown () {
	document.getElementById("body").removeEventListener("keyup",test);
	//allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			//开门
			$("#a").rotate({ center: ["658px", "154px"], animateTo: -150,duration:200});
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500,function(){
				$(".img3").attr("src","img/people1.png");
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			});
		});
	});
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________2个小人向下移动完


//_____________________________3个小人向上移动
function ThreeUp () {
	document.getElementById("body").removeEventListener("keyup",test);
	//allot(4,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				//开门
				$("#b").rotate({ center: ["658px", "402px"], animateTo: 150,duration:200});
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500,function(){
					$(".img4").attr("src","img/people1.png");
					$("#question").show();
					document.getElementById("body").addEventListener("keyup",test);
				});

			});
		});
	});
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________3个小人向上移动完

//_____________________________3个小人向下移动
function ThreeDown () {
	document.getElementById("body").removeEventListener("keyup",test);
	//allot(4,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				//开门
				$("#a").rotate({ center: ["658px", "154px"], animateTo: -150,duration:200 });
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500,function(){
					$(".img4").attr("src","img/people1.png");
					$("#question").show(0,function(){
						document.getElementById("body").addEventListener("keyup",test);
					});
				});
			});
		});
	});
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________3个小人向下移动完


//_____________________________4个小人向上移动
function FourUp () {
	document.getElementById("body").removeEventListener("keyup",test);
	//allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-180px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-180px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-180px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500);
				$(".p4").animate({ left: "535px", top: "-180px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					//开门
					$("#b").rotate({ center: ["658px", "402px"], animateTo: 150,duration:200 });
					$(".p5").animate({ left: "280px"}, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show(0,function(){
							document.getElementById("body").addEventListener("keyup",test);
						});



						//var begin=Date.now();
					});
				});
			});
		});
	});

	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________4个小人向上移动完


//_____________________________4个小人向下移动
function FourDown () {
	document.getElementById("body").removeEventListener("keyup",test);
	//allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					//开门
					$("#a").rotate({ center: ["658px", "154px"], animateTo: -150,duration:200 });
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px"}, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show(0,function(){
							document.getElementById("body").addEventListener("keyup", test);
						});



						//按键



					});
				});
			});
		});
	});

	function test(){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-180px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".result").show();
					$(".result").delay(500).hide(0);
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;

						//每次按键后,向后台传递参数
						order()
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________4个小人向下移动完