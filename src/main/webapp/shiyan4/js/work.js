     		let times=0;	//页面刷新次数
			let sub=0;//被试编号
			window.onload=function(){

				//重复上面25次，前5次不计分，后面20次计分，记录正确次数；可以先写一个函数重复5次，再调用重复20次的函数
				$("#cover").show();
				$("#cover").delay(500).hide(0);
				xianshiOne();
			};

			function xianshiOne() {

				var settings = {
					"url": "http://localhost:8080/xinlixue2/pictureFills",
					"method": "GET",
					"timeout": 0,
				};
				$.ajax(settings).done(function (response) {

					var data=response.result;
					var random=data.randomList;
					console.log(random);
					var color=data.colorList;
					console.log(color);
					var change=data.change;
					var changeColorList=data.changeColorList;


					console.log("对照显示结束。。。。。。。。。。。。。。。。。。")

					xianshiTwo(random,color,changeColorList,change);

				});

			}
			//这里是第二次显示 然后 让被试选择出被改变的方块
			function xianshiTwo(random,color,changeColorList,change) {

				a=random[0];
				b=random[1];
				c=random[2];
				d=random[3];
				e=random[4];

				$("#f"+a).show(0);
				$("#f"+b).show(0);
				$("#f"+c).show(0);
				$("#f"+d).show(0);
				$("#f"+e).show(0);


				document.getElementById("f"+a).style.backgroundColor = color[0];
				document.getElementById("f"+b).style.backgroundColor = color[1];
				document.getElementById("f"+c).style.backgroundColor = color[2];
				document.getElementById("f"+d).style.backgroundColor = color[3];
				document.getElementById("f"+e).style.backgroundColor = color[4];


				$("#cover1").show();
				$("#cover1").delay(500).hide(0);

				times++;
				console.log("当前实验次数： "+times);
				console.log("changeColorList： " + changeColorList);
				a=random[0];
				b=random[1];
				c=random[2];
				d=random[3];
				e=random[4];

				$("#f"+a).show(0);
				$("#f"+b).show(0);
				$("#f"+c).show(0);
				$("#f"+d).show(0);
				$("#f"+e).show(0);


				document.getElementById("f"+a).style.backgroundColor = changeColorList[0];
				document.getElementById("f"+b).style.backgroundColor = changeColorList[1];
				document.getElementById("f"+c).style.backgroundColor = changeColorList[2];
				document.getElementById("f"+d).style.backgroundColor = changeColorList[3];
				document.getElementById("f"+e).style.backgroundColor = changeColorList[4];


				var chooose;//被点击方块的id
				document.getElementById("f0").onclick = function(){
					chooose=0;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					//记录数据，进行下一次实验；
					xianshiOne();
				};
				document.getElementById("f1").onclick = function(){
					chooose=1;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f2").onclick = function(){
					chooose=2;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f3").onclick = function(){
					chooose=3;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f4").onclick = function(){
					chooose=4;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f5").onclick = function(){
					chooose=5;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f6").onclick = function(){
					chooose=6;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f7").onclick = function(){
					chooose=7;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f8").onclick = function(){
					chooose=8;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f9").onclick = function(){
					chooose=9;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f10").onclick = function(){
					chooose=10;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f11").onclick = function(){
					chooose=11;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f12").onclick = function(){
					chooose=12;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f13").onclick = function(){
					chooose=13;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f14").onclick = function(){
					chooose=14;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				document.getElementById("f15").onclick = function(){
					chooose=15;
					console.log("change+"+chooose);
					getTimesResult(sub,change,chooose);
					xianshiOne();
				};
				console.log("yigchangle+"+chooose)

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
			/**
			 * 这个是请求保存结果的接口
			 */
			function getTimesResult(sub,change,choose) {
				console.log("getTimesResult 封装成json数据为：" + JSON.stringify({"sub":sub,"change":change,"choose":choose}));
				var settings = {
					"url": "http://localhost:8080/xinlixue2/saveResultTwo",
					"method": "POST",
					"timeout": 0,
					"headers": {
						"Content-Type": "application/json"
					},
					"data": JSON.stringify({"sub":sub,"change":change,"choose":choose}),
				};
				$.ajax(settings).done(function (response) {
					console.log("getTimesResult save result success"+response.toString());

				});


			}

			function main(){
				var settings = {
					"url": "http://localhost:8080/xinlixue2/pictureFills",
					"method": "GET",
					"timeout": 0,
				};
				$.ajax(settings).done(function (response) {
					var data=response.result;
					var random=data.randomList;
					console.log(random);
					var color=data.colorList;
					console.log(color);


				});




				//需要记录的数据：被试编号；变化色块编号；被试选择的色块的编号；被试是否选择正确；
				//1.生成一个数组，里面为1-16，打乱顺序，随机取5个；
				var random=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
				console.log(random);
				sortArray(random);
				console.log(random);
				//2.设置一个颜色s数组，颜色为：blue, green, red, yellow, brown, magenta,lime green, cyan，将这些颜色随机设置为5个色块的背景色
				var color=["blue","red","green","yellow","brown","magenta","lime","cyan"]
				sortArray(color);
				console.log(color);

				a=random[0];
				b=random[1];
				c=random[2];
				d=random[3];
				e=random[4];
				console.log(a);
				$("#f0").hide(0);
				$("#f1").hide(0);
				$("#f2").hide(0);
				$("#f3").hide(0);
				$("#f4").hide(0);
				$("#f5").hide(0);
				$("#f6").hide(0);
				$("#f7").hide(0);
				$("#f8").hide(0);
				$("#f9").hide(0);
				$("#f10").hide(0);
				$("#f11").hide(0);
				$("#f12").hide(0);
				$("#f13").hide(0);
				$("#f14").hide(0);
				$("#f15").hide(0);




				//3.在这5个随机数中再抽取一个，改变色块颜色;
				//4.被试点击选择是哪个色块颜色发生了改变，写函数判断被点击的色块是否是颜色发生改变的色块



			}

