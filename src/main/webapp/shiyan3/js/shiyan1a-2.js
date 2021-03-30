let choose;//按键选择,1为上键,2为下键
let responseData;
let times=0;	//页面刷新次数
let sub=0;//被试编号
let age=23;//被试年龄
let sex=2;//被试性别,男1,女2
let m;
const con = {};

window.onload=function(){
	sub=getUrlParam("sub");
	m=getUrlParam("m");
	age=getUrlParam("age");
	sex=getUrlParam("sex");
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
		if((times%55==0 && times!=0)||times==220) {
			getTimesResult(sub,times);
		}
		var data=response.result;
		console.log("data2:"+data);
		$("#cover").show();
		document.getElementById("p1").style.left = 0 + 'px';
		document.getElementById("p1").style.top = 0 + 'px';
		document.getElementById("p2").style.left = 0 + 'px';
		document.getElementById("p2").style.top = 0 + 'px';
		document.getElementById("p3").style.left = 0 + 'px' ;
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
		$(".w1").html();
		$(".w2").html();
		$(".w3").html();
		$(".w4").html();
		$(".w5").html();
		$("#a").rotate({center:["658px","154px"],animateTo: 0});
		$("#b").rotate({center:["658px","402px"],animateTo: 0});
		$("#cover").delay(800).hide(0);


		//情境=1时开一个门,情境=2时开两个门,men=1时,开上门,men=2是开下门
		if(data.qingjing==1 && data.peoples==1 && data.fangxiang==1){
			console.log("无选择性情境,1个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			OneUp();
		}
		if(data.qingjing==1 && data.peoples==1 && data.fangxiang==2){
			console.log("无选择性情境,1个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			OneDown()
		}
		if(data.qingjing==1 && data.peoples==2 && data.fangxiang==1){
			console.log("无选择性情境,2个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			TowUp();
		}
		if(data.qingjing==1 && data.peoples==2 && data.fangxiang==2){
			console.log("无选择性情境,2个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TowDown()
		}
		if(data.qingjing==1 && data.peoples==3 && data.fangxiang==1){
			console.log("无选择性情境,3个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			ThreeUp();
		}
		if(data.qingjing==1 && data.peoples==3 && data.fangxiang==2){
			console.log("无选择性情境,3个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			ThreeDown()
		}
		if(data.qingjing==1 && data.peoples==4 && data.fangxiang==1){
			console.log("无选择性情境,4个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			FourUp();
		}
		if(data.qingjing==1 && data.peoples==4 && data.fangxiang==2){
			console.log("无选择性情境,4个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			FourDown()
		}
		if(data.qingjing==2 && data.peoples==1 && data.fangxiang==1){
			console.log("有选择性情境,1个小人向上");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			OneUp();
		}
		if(data.qingjing==2 && data.peoples==1 && data.fangxiang==2){
			console.log("有选择性情境,1个小人向下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			OneDown()
		}
		if(data.qingjing==2 && data.peoples==2 && data.fangxiang==1){
			console.log("有选择性情境,2个小人向上");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			TowUp()
		}
		if(data.qingjing==2 && data.peoples==2 && data.fangxiang==2){
			console.log("有选择性情境,2个小人向下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TowDown()
		}
		if(data.qingjing==2 && data.peoples==3 && data.fangxiang==1){
			console.log("有选择性情境,3个小人向上");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			ThreeUp()
		}
		if(data.qingjing==2 && data.peoples==3 && data.fangxiang==2){
			console.log("有选择性情境,3个小人向下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			ThreeDown()
		}
		if(data.qingjing==2 && data.peoples==4 && data.fangxiang==1){
			console.log("有选择性情境,4个小人向上");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			FourUp()
		}
		if(data.qingjing==2 && data.peoples==4 && data.fangxiang==2){
			console.log("有选择性情境,4个小人向下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			FourDown()
		}
		if(data.qingjing==3){
			console.log("基线条件");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			Zero()
		}
		if(data.qingjing==4 && data.peoples==2 && data.fangxiang==1){
			console.log("填充试次,2个卡通人物,1上1下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC1()
		}
		if(data.qingjing==4 && data.peoples==2 && data.fangxiang==2){
			console.log("填充试次,2个卡通人物,1下1上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC2()
		}
		if(data.qingjing==5 && data.peoples==3 && data.fangxiang==1){
			console.log("填充试次,3个卡通人物,1上2下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC3()
		}
		if(data.qingjing==5 && data.peoples==3 && data.fangxiang==2){
			console.log("填充试次,3个卡通人物,2上1下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC4()
		}
		if(data.qingjing==5 && data.peoples==3 && data.fangxiang==3){
			console.log("填充试次,3个卡通人物,1下2上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC5()
		}
		if(data.qingjing==5 && data.peoples==3 && data.fangxiang==4){
			console.log("填充试次,3个卡通人物,2下1上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC6()
		}
		if(data.qingjing==6 && data.peoples==4 && data.fangxiang==1){
			console.log("填充试次,4个卡通人物,1上3下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC7()
		}
		if(data.qingjing==6 && data.peoples==4 && data.fangxiang==2){
			console.log("填充试次,4个卡通人物,2上2下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC8()
		}
		if(data.qingjing==6 && data.peoples==4 && data.fangxiang==3){
			console.log("填充试次,4个卡通人物,3上1下");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC9()
		}
		if(data.qingjing==6 && data.peoples==4 && data.fangxiang==4){
			console.log("填充试次,4个卡通人物,1下3上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC10()
		}
		if(data.qingjing==6 && data.peoples==4 && data.fangxiang==5){
			console.log("填充试次,4个卡通人物,2下2上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC11()
		}
		if(data.qingjing==6 && data.peoples==4 && data.fangxiang==6){
			console.log("填充试次,4个卡通人物,3下1上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TC12()
		}
		if(data.qingjing==7 && data.peoples==1 && data.fangxiang==1){
			console.log("填充试次,1个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			TOneUp()
		}
		if(data.qingjing==7 && data.peoples==1 && data.fangxiang==2){
			console.log("填充试次,1个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TOneDown()
		}
		if(data.qingjing==7 && data.peoples==2 && data.fangxiang==1){
			console.log("填充试次,2个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			TTowUp ()
		}
		if(data.qingjing==7 && data.peoples==2 && data.fangxiang==2){
			console.log("填充试次,2个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TTowDown ()
		}
		if(data.qingjing==7 && data.peoples==3 && data.fangxiang==1){
			console.log("填充试次,3个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			TThreeUp ()
		}
		if(data.qingjing==7 && data.peoples==3 && data.fangxiang==2){
			console.log("填充试次,3个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TThreeDown ()
		}
		if(data.qingjing==7 && data.peoples==4 && data.fangxiang==1){
			console.log("填充试次,4个小人向上");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			TFourUp ()
		}
		if(data.qingjing==7 && data.peoples==4 && data.fangxiang==2){
			console.log("填充试次,4个小人向下");
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TFourDown ()
		}

		if(data.qingjing==8 && data.peoples==1 && data.fangxiang==1){
			console.log("填充试次,1个小人向上,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TOneUp1()
		}
		if(data.qingjing==8 && data.peoples==1 && data.fangxiang==2){
			console.log("填充试次,1个小人向下,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TOneDown1()
		}
		if(data.qingjing==8 && data.peoples==2 && data.fangxiang==1){
			console.log("填充试次,2个小人向上,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TTowUp1 ()
		}
		if(data.qingjing==8 && data.peoples==2 && data.fangxiang==2){
			console.log("填充试次,2个小人向下,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TTowDown1 ()
		}
		if(data.qingjing==8 && data.peoples==3 && data.fangxiang==1){
			console.log("填充试次,3个小人向上,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TThreeUp1 ()
		}
		if(data.qingjing==8 && data.peoples==3 && data.fangxiang==2){
			console.log("填充试次,3个小人向下,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TThreeDown1 ()
		}
		if(data.qingjing==8 && data.peoples==4 && data.fangxiang==1){
			console.log("填充试次,4个小人向上,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TFourUp1 ()
		}
		if(data.qingjing==8 && data.peoples==4 && data.fangxiang==2){
			console.log("填充试次,4个小人向下,关一个门");
			$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
			$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
			TFourDown1 ()
		}

		console.log('times'+times);
		times=times+1;
	});
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
	allot(2,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
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
				$(".p2").animate({ left: "445px", top: "-185px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(2,m);
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
				$(".p2").animate({ left: "445px", top: "-185px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(3,m);
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(4,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(4,m);
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500);
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000);
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
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
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
	allot(5,m);
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
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________4个小人向下移动完

function Zero(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(1,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500,function(){
		$(".img1").attr("src","img/people1.png");
		$("#question").show();
		document.getElementById("body").addEventListener("keyup",test);
	});
	function test(event){
		if(event.keyCode==70||event.keyCode==74){
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup",test);
			var begin=Date.now();
			//alert(event.keyCode)
			if(event.keyCode==70){
				$(".img1").attr("src","img/people.gif");
				$(".p1").animate({ left: "400px", top: "-185px" }, 1000, function () {
					$(".p1").animate({ left: "500px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img1").attr("src","img/people.gif");
				$(".p1").animate({ left: "400px", top: "190px" }, 1000, function () {
					$(".p1").animate({ left: "500px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 2个小人,1上一下
function TC1(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500,function(){
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}

}

//_____________________________填充 2个小人,1上一下  完


//_____________________________填充 2个小人,1下1上
function TC2(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500,function(){
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 2个小人,1下1上  完

//_____________________________填充 3个小人,1上2下
function TC3(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500,function(){
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 3个小人,1上2下  完


//_____________________________填充 3个小人,2上1下
function TC4(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500,function(){
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 3个小人,2上1下  完


//_____________________________填充 3个小人,1下2上
function TC5(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500,function(){
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 3个小人,1下2上  完


//_____________________________填充 3个小人,2下1上
function TC6(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500,function(){
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 3个小人,2下1上  完


//_____________________________填充 4个小人,1上3下
function TC7(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px" }, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show();
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
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 4个小人,1上3下  完


//_____________________________填充 4个小人,2上2下
function TC8(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px" }, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show();
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
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 4个小人,2上2下  完


//_____________________________填充 4个小人,3上1下
function TC9(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "190px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px" }, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show();
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
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 4个小人,3上1下  完


//_____________________________填充 4个小人,1下3上
function TC10(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px" }, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show();
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
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 4个小人,1下3上  完


//_____________________________填充 4个小人,2下2上
function TC11(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");

	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px" }, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show();
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
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 4个小人,2下2上  完


//_____________________________填充 4个小人,3下1上
function TC12(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({ left: "145px" }, 500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px" }, 500);
			$(".p3").animate({ left: "490px", top: "190px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px" }, 500);
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					$(".p5").animate({ left: "280px" }, 500,function(){
						$(".img5").attr("src","img/people1.png");
						$("#question").show();
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
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充 4个小人,3下1上  完

//_____________________________填充,1个小人向上移动
function TOneUp() {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(2,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
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
				$(".p2").animate({ left: "445px", top: "-185px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充,1个小人向上移动完



//_____________________________填充,1个小人向下移动
function TOneDown(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(2,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充,1个小人向下移动完


//_____________________________填充,2个小人向上移动
function TTowUp () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,2个小人向上移动完


//_____________________________填充,2个小人向下移动
function TTowDown () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img3").attr("src","img/people.gif");
				$(".p3").animate({ left: "490px", top: "190px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,2个小人向下移动完


//_____________________________填充,3个小人向上移动
function TThreeUp () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,3个小人向上移动完

//_____________________________填充,3个小人向下移动
function TThreeDown () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "535px", top: "190px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,3个小人向下移动完


//_____________________________填充,4个小人向上移动
function TFourUp () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500);
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
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
				$(".p5").animate({ left: "580px", top: "-185px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,4个小人向上移动完


//_____________________________填充,4个小人向下移动
function TFourDown () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,4个小人向下移动完

//_____________________________填充,1个小人向上移动
function TOneUp1() {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(2,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		//关门
		$("#b").rotate({ center: ["658px", "402px"], animateTo: 0,duration:200 });
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
				$(".p2").animate({ left: "445px", top: "-185px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充,1个小人向上移动完

//_____________________________填充,1个小人向下移动
function TOneDown1(){
	document.getElementById("body").removeEventListener("keyup",test);
	allot(2,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		//关门
		$("#a").rotate({ center: ["658px", "154px"], animateTo: 0,duration:200 });
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img2").attr("src","img/people.gif");
				$(".p2").animate({ left: "445px", top: "190px" }, 1000, function () {
					$(".p2").animate({ left: "545px" }, 1000, function () {
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}

//_____________________________填充,1个小人向下移动完


//_____________________________填充,2个小人向上移动
function TTowUp1 () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			//开门
			$("#b").rotate({ center: ["658px", "402px"], animateTo: 0,duration:200 });
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,2个小人向上移动完


//_____________________________填充,2个小人向下移动
function TTowDown1 () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(3,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "190px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "190px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			//关门
			$("#b").rotate({ center: ["658px", "154px"], animateTo: 0,duration:200});
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
				$(".p3").animate({ left: "490px", top: "-185px" }, 1000, function () {
					$(".p3").animate({ left: "590px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,2个小人向下移动完


//_____________________________填充,3个小人向上移动
function TThreeUp1 () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				//开门
				$("#b").rotate({ center: ["658px", "402px"], animateTo: 0,duration:200});
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,3个小人向上移动完

//_____________________________填充,3个小人向下移动
function TThreeDown1 () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(4,m);
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
				//关门
				$("#b").rotate({ center: ["658px", "154px"], animateTo: 0,duration:200 });
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
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000, function () {
					$(".p4").animate({ left: "635px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
			if(event.keyCode==74){
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,3个小人向下移动完


//_____________________________填充,4个小人向上移动
function TFourUp1 () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
	$(".img1").attr("src","img/people.gif");
	$(".p1").animate({ left: "100px" }, 500);
	$(".p1").animate({ left: "400px", top: "-185px" }, 1000);
	$(".p1").animate({ left: "500px" }, 500,function(){
		$(".img2").attr("src","img/people.gif");
		$(".p2").animate({left:"145px"},500);
		$(".p2").animate({ left: "445px", top: "-185px" }, 1000);
		$(".p2").animate({ left: "545px" }, 500,function(){
			$(".img3").attr("src","img/people.gif");
			$(".p3").animate({ left: "190px"}, 500);
			$(".p3").animate({ left: "490px", top: "-185px" }, 1000);
			$(".p3").animate({ left: "590px" }, 500,function(){
				$(".img4").attr("src","img/people.gif");
				$(".p4").animate({ left: "235px"}, 500);
				$(".p4").animate({ left: "535px", top: "-185px" }, 1000);
				$(".p4").animate({ left: "635px" }, 500,function(){
					$(".img5").attr("src","img/people.gif");
					//关门
					$("#a").rotate({ center: ["658px", "402px"], animateTo: 0,duration:200 });
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,4个小人向上移动完


//_____________________________填充,4个小人向下移动
function TFourDown1 () {
	document.getElementById("body").removeEventListener("keyup",test);
	allot(5,m);
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
					//关门
					$("#a").rotate({ center: ["658px", "154px"], animateTo: 0,duration:200 });
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
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if(event.keyCode==74){
				$(".img5").attr("src","img/people.gif");
				$(".p5").animate({ left: "580px", top: "190px" }, 1000, function () {
					$(".p5").animate({ left: "680px" }, 500, function () {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose,(Date.now()-begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count",{"name":sub,"count":times});
					})
				})
			}
		}else{
			event.returnValue = false;
		}

	}
}
//_____________________________填充,4个小人向下移动完
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
		document.execCommand("stop");
		if(times==220){
			alert("实验结束! 您的的得分是："+response.result.toString());
		}else{
			alert("休息一会吧!")
		}

		$(".result").html(response.result);
		$("#result").show();
		$(".continu").click(function(){
			$("#result").hide(0);
			//可以在这个方法和show方法里，向后台传一个参数，用来控制是否暂停数据传输
		});
		console.log("getTimesResult save result success"+response.toString());
		return;
	});


}
function changeChoose (choose,costtime) {
	con["times"] = times;
	con["sub"] = sub;
	con["age"] = age;
	con["sex"] = sex;
	con['choose'] = choose;
	con['costtime'] = costtime;
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