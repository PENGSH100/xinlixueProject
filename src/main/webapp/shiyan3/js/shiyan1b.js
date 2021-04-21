let choose;//按键选择,1为上键,2为下键
let responseData;
let times=0;	//页面刷新次数
let sub=0;//被试编号
let age=23;//被试年龄
let sex=2;//被试性别,男1,女2
let m;
const con = {};
var data;

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
	allot(5,m);
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
        data=response.result;
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
        //$("#cover").delay(800).hide(0);
        document.getElementById("body").addEventListener("keyup",test1);



        console.log('times'+times);
        times=times+1;
    });
}

function test1(event){
    if(event.keyCode==32){
        document.getElementById("body").removeEventListener("keyup",test1);
        $("#cover").delay(500).hide(0,function (){
            main();
        });

    }else{
        event.returnValue = false;
    }

}

function main(){
// ————————————每个条件10次,共160次
    if(data.qingjing==1 && data.peoples==1 && data.fangxiang==1){
        console.log("无选择性情境,1个小人向上");
        OneA();
    }
    if(data.qingjing==1 && data.peoples==1 && data.fangxiang==2){
        console.log("无选择性情境,1个小人向下");
        OneB();
    }
    if(data.qingjing==1 && data.peoples==2 && data.fangxiang==1){
        console.log("无选择性情境,2个小人向上");
        TwoA();
    }
    if(data.qingjing==1 && data.peoples==2 && data.fangxiang==2){
        console.log("无选择性情境,2个小人向下");
        TwoB();
    }
    if(data.qingjing==1 && data.peoples==3 && data.fangxiang==1){
        console.log("无选择性情境,3个小人向上");
        ThreeA();
    }
    if(data.qingjing==1 && data.peoples==3 && data.fangxiang==2){
        console.log("无选择性情境,3个小人向下");
        ThreeB();
    }
    if(data.qingjing==1 && data.peoples==4 && data.fangxiang==1){
        console.log("无选择性情境,4个小人向上");
        FourA();
    }
    if(data.qingjing==1 && data.peoples==4 && data.fangxiang==2){
        console.log("无选择性情境,4个小人向下");
        FourB();
    }
    if(data.qingjing==2 && data.peoples==1 && data.fangxiang==1){
        console.log("有选择性情境,1个小人向上");
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        OneA();
    }
    if(data.qingjing==2 && data.peoples==1 && data.fangxiang==2){
        console.log("有选择性情境,1个小人向下");
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        OneB();
    }
    if(data.qingjing==2 && data.peoples==2 && data.fangxiang==1){
        console.log("有选择性情境,2个小人向上");
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        TwoA();
    }
    if(data.qingjing==2 && data.peoples==2 && data.fangxiang==2){
        console.log("有选择性情境,2个小人向下");
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        TwoB();
    }
    if(data.qingjing==2 && data.peoples==3 && data.fangxiang==1){
        console.log("有选择性情境,3个小人向上");
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        ThreeA();
    }
    if(data.qingjing==2 && data.peoples==3 && data.fangxiang==2){
        console.log("有选择性情境,3个小人向下");
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        ThreeB();
    }
    if(data.qingjing==2 && data.peoples==4 && data.fangxiang==1){
        console.log("有选择性情境,4个小人向上");
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        FourA();
    }
    if(data.qingjing==2 && data.peoples==4 && data.fangxiang==2){
        console.log("有选择性情境,4个小人向下");
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        FourB();
    }
// ————————————每个条件10次,共160次

// ————————————20次
    if(data.qingjing==3){
        console.log("基线条件");
        $("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
        $("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
        Zero()
    }
// ————————————20次

// ————————————每个条件1次
    if(data.qingjing==4 && data.peoples==1 && data.fangxiang==1){
        console.log("卷入度填充,无1a3b被试做选择时关闭a门");
        TOneA();
    }
    if(data.qingjing==4 && data.peoples==1 && data.fangxiang==2){
        console.log("卷入度填充,无1b3a被试做选择时关闭b门");
        TOneB();
    }
    if(data.qingjing==4 && data.peoples==2 && data.fangxiang==1){
        console.log("卷入度填充,无2a2b被试做选择时关闭b门");
        QOneA2();
    }
    if(data.qingjing==4 && data.peoples==2 && data.fangxiang==2){
        console.log("卷入度填充,无2b2a被试做选择时关闭a门");
        TTwoB();
    }
    if(data.qingjing==4 && data.peoples==3 && data.fangxiang==1){
        console.log("卷入度填充,无3a1b被试做选择时关闭a门");
        TThreeA();
    }
    if(data.qingjing==4 && data.peoples==3 && data.fangxiang==2){
        console.log("卷入度填充,无3b1a被试做选择时关闭b门");
        TThreeB();
    }
    if(data.qingjing==4 && data.peoples==4 && data.fangxiang==1){
        console.log("卷入度填充,无4a被试做选择时关闭b门");
        TTFourA();
    }
    if(data.qingjing==4 && data.peoples==4 && data.fangxiang==2){
        console.log("卷入度填充,无4b被试做选择时关闭a门");
        TTFourB();
    }
	if(data.qingjing==5 && data.peoples==1 && data.fangxiang==1){
	    console.log("卷入度填充,有1a3b被试做选择时关闭a门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TOneA();
	}
	if(data.qingjing==5 && data.peoples==1 && data.fangxiang==2){
	    console.log("卷入度填充,有1b3a被试做选择时关闭b门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TOneB();
	}
	if(data.qingjing==5 && data.peoples==2 && data.fangxiang==1){
	    console.log("卷入度填充,有2a2b被试做选择时关闭b门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    QOneA2();
	}
	if(data.qingjing==5 && data.peoples==2 && data.fangxiang==2){
	    console.log("卷入度填充,有2b2a被试做选择时关闭a门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TTwoB();
	}
	if(data.qingjing==5 && data.peoples==3 && data.fangxiang==1){
	    console.log("卷入度填充,有3a1b被试做选择时关闭a门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TThreeA();
	}
	if(data.qingjing==5 && data.peoples==3 && data.fangxiang==2){
	    console.log("卷入度填充,有3b1a被试做选择时关闭b门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TThreeB();
	}
	if(data.qingjing==5 && data.peoples==4 && data.fangxiang==1){
	    console.log("卷入度填充,有4a被试做选择时关闭b门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TTFourA();
	}
	if(data.qingjing==5 && data.peoples==4 && data.fangxiang==2){
	    console.log("卷入度填充,有4b被试做选择时关闭a门");
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    TTFourB();
	}
// ————————————每个条件1次
	
	
	
// ————————————每个条件1次,共24次	
    if(data.qingjing==6 && data.peoples==1 && data.fangxiang==1){
        console.log("填充25% 1a b门开后,3a");
        QOneA();
    }
    if(data.qingjing==6 && data.peoples==1 && data.fangxiang==2){
        console.log("填充25% 1b a门开后,3b");
        QOneB();
    }
    if(data.qingjing==6 && data.peoples==2 && data.fangxiang==1){
        console.log("填充25% 1a b门开后,1b2a");
        QOneA2();
    }
    if(data.qingjing==6 && data.peoples==2 && data.fangxiang==2){
        console.log("填充25% 1b a门开后,1a2b");
        QOneB2();
    }
    if(data.qingjing==6 && data.peoples==3 && data.fangxiang==1){
        console.log("填充25% 1a b门开后,2b1a");
        QOneA3();
    }
    if(data.qingjing==6 && data.peoples==3 && data.fangxiang==2){
        console.log("填充25% 1b a门开后,2a1b");
        QOneB3();
    }
    if(data.qingjing==8 && data.peoples==1 && data.fangxiang==1){
        console.log("填充50% 2a b门开后,2a");
        QTwoA();
    }
    if(data.qingjing==8 && data.peoples==1 && data.fangxiang==2){
        console.log("填充50% 2b a门开后,2b");
        QTwoB();
    }
    if(data.qingjing==8 && data.peoples==2 && data.fangxiang==1){
        console.log("填充50% 2a b门开后,1b1a");
        QTwoA1();
    }
    if(data.qingjing==8 && data.peoples==2 && data.fangxiang==2){
        console.log("填充50% 2b a门开后,1a1b");
        QTwoB1();
    }
    if(data.qingjing==10 && data.peoples==1 && data.fangxiang==1){
        console.log("填充50% 3a b门开后,1a");
        QTwoA2();
    }
    if(data.qingjing==10 && data.peoples==1 && data.fangxiang==2){
        console.log("填充50% 3b a门开后,1b");
        QTwoB2();
    }
	if(data.qingjing==7 && data.peoples==1 && data.fangxiang==1){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充25% 1a b门开后,3a");
	    QOneA();
	}
	if(data.qingjing==7 && data.peoples==1 && data.fangxiang==2){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充25% 1b a门开后,3b");
	    QOneB();
	}
	if(data.qingjing==7 && data.peoples==2 && data.fangxiang==1){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充25% 1a b门开后,1b2a");
	    QOneA2();
	}
	if(data.qingjing==7 && data.peoples==2 && data.fangxiang==2){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充25% 1b a门开后,1a2b");
	    QOneB2();
	}
	if(data.qingjing==7 && data.peoples==3 && data.fangxiang==1){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充25% 1a b门开后,2b1a");
	    QOneA3();
	}
	if(data.qingjing==7 && data.peoples==3 && data.fangxiang==2){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充25% 1b a门开后,2a1b");
	    QOneB3();
	}
	if(data.qingjing==9 && data.peoples==1 && data.fangxiang==1){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充50% 2a b门开后,2a");
	    QTwoA();
	}
	if(data.qingjing==9 && data.peoples==1 && data.fangxiang==2){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充50% 2b a门开后,2b");
	    QTwoB();
	}
	if(data.qingjing==9 && data.peoples==2 && data.fangxiang==1){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充50% 2a b门开后,1b1a");
	    QTwoA1();
	}
	if(data.qingjing==9 && data.peoples==2 && data.fangxiang==2){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充50% 2b a门开后,1a1b");
	    QTwoB1();
	}
	if(data.qingjing==11 && data.peoples==1 && data.fangxiang==1){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充50% 3a b门开后,1a");
	    QTwoA2();
	}
	if(data.qingjing==11 && data.peoples==1 && data.fangxiang==2){
		$("#a").rotate({center:["658px","154px"],animateTo: -150,duration:200});
		$("#b").rotate({center:["658px","402px"],animateTo: 150,duration:200});
	    console.log("填充50% 3b a门开后,1b");
	    QTwoB2();
	}
// ————————————每个条件1次,共24次
   
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


//_____________________________25% 1a3b
function OneA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开b门
		$("#b").rotate({
			center: ["658px", "402px"],
			animateTo: 150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________1a3b


//_____________________________25% 1b3a
function OneB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开a门
		$("#a").rotate({
			center: ["658px", "154px"],
			animateTo: -150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________1b3a


//_____________________________50% 2a2b
function TwoA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开b门
					$("#b").rotate({
						center: ["658px", "402px"],
						animateTo: 150,
						duration: 200
					});
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________2a2b

//_____________________________50% 2b2a
function TwoB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开a门
					$("#a").rotate({
						center: ["658px", "154px"],
						animateTo: -150,
						duration: 200
					});
					
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________2b2a


//_____________________________75% 3a1b
function ThreeA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								//开b门
								$("#b").rotate({
									center: ["658px", "402px"],
									animateTo: 150,
									duration: 200
								});
								
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________3a1b


//_____________________________75% 3b1a
function ThreeB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								//开a门
								$("#a").rotate({
									center: ["658px", "154px"],
									animateTo: -150,
									duration: 200
								});
								
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________3b1a


//_____________________________100% 4a
function FourA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											//开b门
											$("#b").rotate({
												center: ["658px", "402px"],
												animateTo: 150,
												duration: 200
											});
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________4a


//_____________________________100% 4b
function FourB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											//开a门
											$("#a").rotate({
												center: ["658px", "154px"],
												animateTo: -150,
												duration: 200
											});
											
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________4b

//_____________________________基线
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
//—————————————————————————————基线


//_____________________________填充25% 1a3b被试做选择时关闭a门
function TOneA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开b门
		$("#b").rotate({
			center: ["658px", "402px"],
			animateTo: 150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											//关a门
											$("#a").rotate({
												center: ["658px", "154px"],
												animateTo: 0,
												duration: 200
											});
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 被试做选择时关闭a门


//_____________________________填充25% 1b3a被试做选择时关闭b门
function TOneB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开a门
		$("#a").rotate({
			center: ["658px", "154px"],
			animateTo: -150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关b门
												$("#b").rotate({
													center: ["658px", "402px"],
													animateTo: 0,
													duration: 200
												});
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 被试做选择时关闭a门


//_____________________________填充50% 被试做选择时关闭b门
function TTwoA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开b门
					$("#b").rotate({
						center: ["658px", "402px"],
						animateTo: 150,
						duration: 200
					});
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关b门
												$("#b").rotate({
													center: ["658px", "402px"],
													animateTo: 0,
													duration: 200
												});
												
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 被试做选择时关闭b门

//_____________________________填充50% 被试做选择时关闭a门
function TTwoB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开a门
					$("#a").rotate({
						center: ["658px", "154px"],
						animateTo: -150,
						duration: 200
					});
					
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关a门
												$("#a").rotate({
													center: ["658px", "154px"],
													animateTo: 0,
													duration: 200
												});
												
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 被试做选择时关闭a门


//_____________________________填充75% 被试做选择时关闭a门
function TThreeA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								//开b门
								$("#b").rotate({
									center: ["658px", "402px"],
									animateTo: 150,
									duration: 200
								});
								
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关a门
												$("#a").rotate({
													center: ["658px", "154px"],
													animateTo: 0,
													duration: 200
												});
												
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充75% 被试做选择时关闭a门


//_____________________________填充75% 被试做选择时关闭b门
function TThreeB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								//开a门
								$("#a").rotate({
									center: ["658px", "154px"],
									animateTo: -150,
									duration: 200
								});
								
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关b门
												$("#b").rotate({
													center: ["658px", "402px"],
													animateTo: 0,
													duration: 200
												});
												
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充75% 被试做选择时关闭b门


//_____________________________填充100% 被试做选择时关闭b门
function TTFourA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											//开b门
											// $("#b").rotate({
											// 	center: ["658px", "402px"],
											// 	animateTo: 150,
											// 	duration: 200
											// });
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关b门
												$("#b").rotate({
													center: ["658px", "402px"],
													animateTo: 0,
													duration: 200
												});
												
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充100% 被试做选择时关闭b门


//_____________________________填充100% 被试做选择时关闭a门
function TTFourB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											//开a门
											// $("#a").rotate({
											// 	center: ["658px", "154px"],
											// 	animateTo: -150,
											// 	duration: 200
											// });
											
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												//关a门
												$("#a").rotate({
													center: ["658px", "154px"],
													animateTo: 0,
													duration: 200
												});
												
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$("#question").show();
				document.getElementById("body").addEventListener("keyup",test);
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充100% 被试做选择时关闭a门



//_____________________________填充25% 1a b门开后,3a
function QOneA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开b门
		$("#b").rotate({
			center: ["658px", "402px"],
			animateTo: 150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 1a b门开后,3a


//_____________________________填充25% 1b a门开后,3b
function QOneB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开a门
		$("#a").rotate({
			center: ["658px", "154px"],
			animateTo: -150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 1b a门开后,3b


//_____________________________填充25% 1a b门开后,1b2a
function QOneA2() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开b门
		$("#b").rotate({
			center: ["658px", "402px"],
			animateTo: 150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 1a b门开后,1b2a


//_____________________________填充25% 1b a门开后,1a2b
function QOneB2() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开a门
		$("#a").rotate({
			center: ["658px", "154px"],
			animateTo: -150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 1b a门开后,1a2b


//_____________________________填充25% 1a b门开后,2b1a
function QOneA3() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开b门
		$("#b").rotate({
			center: ["658px", "402px"],
			animateTo: 150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 1a b门开后,2b1a


//_____________________________填充25% 1b a门开后,2a1b
function QOneB3() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		//开a门
		$("#a").rotate({
			center: ["658px", "154px"],
			animateTo: -150,
			duration: 200
		});
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充25% 1b a门开后,2a1b


//_____________________________填充50% 2a b门开后,2a
function QTwoA() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开b门
					$("#b").rotate({
						center: ["658px", "402px"],
						animateTo: 150,
						duration: 200
					});
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 2a b门开后,2a


//_____________________________填充50% 2b a门开后,2b
function QTwoB() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开a门
					$("#a").rotate({
						center: ["658px", "154px"],
						animateTo: -150,
						duration: 200
					});
					
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 2b a门开后,2b


//_____________________________填充50% 2a b门开后,1b1a
function QTwoA1() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开b门
					$("#b").rotate({
						center: ["658px", "402px"],
						animateTo: 150,
						duration: 200
					});
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 2a b门开后,1b1a


//_____________________________填充50% 2b a门开后,1a1b
function QTwoB1() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					//开a门
					$("#a").rotate({
						center: ["658px", "154px"],
						animateTo: -150,
						duration: 200
					});
					
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 2b a门开后,1a1b


//_____________________________填充50% 3a b门开后,1a
function QTwoA2() {
	//开a门
	$("#a").rotate({
		center: ["658px", "154px"],
		animateTo: -150,
		duration: 200
	});
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "-185px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "-185px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "-185px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								
								//开b门
								$("#b").rotate({
									center: ["658px", "402px"],
									animateTo: 150,
									duration: 200
								});
								
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "-185px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 3a b门开后,1a


//_____________________________填充50% 3b a门开后,1b
function QTwoB2() {
	//开b门
	$("#b").rotate({
		center: ["658px", "402px"],
		animateTo: 150,
		duration: 200
	});
	
	document.getElementById("body").removeEventListener("keyup", test);
	//allot(2,m);
	$(".img1").attr("src", "img/people.gif");
	$(".p1").animate({
		left: "100px"
	}, 500);
	$(".p1").animate({
		left: "400px",
		top: "190px"
	}, 1000);
	$(".p1").animate({
		left: "500px"
	}, 500, function() {
		$(".img2").attr("src", "img/people.gif");
		$(".p2").animate({
			left: "145px"
		}, 500, function() {
			$(".p2").animate({
				left: "445px",
				top: "190px"
			}, 1000, function() {
				$(".p2").animate({
					left: "545px"
				}, 1000, function() {
					$(".img3").attr("src", "img/people.gif");
					$(".p3").animate({
						left: "190px"
					}, 500, function() {
						$(".p3").animate({
							left: "490px",
							top: "190px"
						}, 1000, function() {
							$(".p3").animate({
								left: "590px"
							}, 500, function() {
								//开a门
								$("#a").rotate({
									center: ["658px", "154px"],
									animateTo: -150,
									duration: 200
								});
								
								$(".img4").attr("src", "img/people.gif");
								$(".p4").animate({
									left: "235px"
								}, 500, function() {
									$(".p4").animate({
										left: "535px",
										top: "190px"
									}, 1000, function() {
										$(".p4").animate({
											left: "635px"
										}, 500, function() {
											$(".img5").attr("src", "img/people.gif");
											$(".p5").animate({
												left: "280px"
											}, 500, function() {
												$(".img5").attr("src", "img/people1.png");
												$("#question").show(0, function() {
													document.getElementById("body").addEventListener("keyup", test);
												});
											});
										})
									})
								});
							})
						})
					});
				})
			})

		});
	});

	function test(event) {
		if (event.keyCode == 70 || event.keyCode == 74) {
			$("#question").hide(0);
			document.getElementById("body").removeEventListener("keyup", test);
			var begin = Date.now();
			//alert(event.keyCode)
			if (event.keyCode == 70) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "-185px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 1;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
			if (event.keyCode == 74) {
				$(".img5").attr("src", "img/people.gif");
				$(".p5").animate({
					left: "580px",
					top: "190px"
				}, 1000, function() {
					$(".p5").animate({
						left: "680px"
					}, 500, function() {
						//后台要记录的按键反应数据
						choose = 2;
						saveResult(changeChoose(choose, (Date.now() - begin)));
						console.log("按键" + choose);
						//每次按键后,向后台传递参数
						ajax("xinlixue/count", {
							"name": sub,
							"count": times
						});
					})
				})
			}
		} else {
			event.returnValue = false;
		}

	}
}

//_____________________________填充50% 3b a门开后,1b
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
            alert("实验结束! 您的的得分是："+response.result);
        }else{
            alert("休息一会吧!")
        }

        $(".result").html(response.result);
        $("#result").show();
        $(".continu").click(function(){
            $("#result").hide(0);
            //可以在这个方法和show方法里，向后台传一个参数，用来控制是否暂停数据传输
        })
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