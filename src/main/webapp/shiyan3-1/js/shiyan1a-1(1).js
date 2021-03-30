let choose;//按键选择,1为上键,2为下键
let responseData;
let times;	//页面刷新次数
let id;//被试编号
let age;//被试年龄
let sex;//被试性别,男1,女2
const con = {};

window.onload = function () {

  count();
  ajax();
  data2();
}


function ajax () {
  //这里是生成的模拟后台数据
  Mock.mock('http://www.bai.com', { 'qingjing|1': 0, 'peoples|1-4': 0, 'fangxiang|1': 0, 'huozai|1-2': 0 })
  //url，请求路径。       //请求的数据。 

  $.ajax({
    url: 'http://www.bai.com',
    type: "get",
    data: {},
    dataType: 'json',
    async: false,
    success: function (data) {
      console.log(data)
      responseData = data;
      console.log(data.peoples)
      //情境=1时开一个门,情境=2时开两个门,men=1时,开上门,men=2是开下门
      if (data.qingjing == 1 && data.fangxiang == 1) {
        //alert("无选择性情境,开上门,向上移动")
        //开上门
        $("#a").rotate({ center: ["648px", "120px"], animateTo: -150 });
        OneUp();
      }
      if (data.qingjing == 1 && data.fangxiang == 2) {
        //开下门
        $("#b").rotate({ center: ["648px", "350px"], animateTo: 150 });
        OneDown()
      }
      if (data.qingjing == 2 && data.fangxiang == 1) {
        //alert("有选择性情境,开两个门,向上移动")
        $("#b").rotate({ center: ["648px", "350px"], animateTo: 150 });
        $("#a").rotate({ center: ["648px", "120px"], animateTo: -150 });
        OneUp();
      }
      if (data.qingjing == 2 && data.fangxiang == 2) {
        $("#a").rotate({ center: ["648px", "120px"], animateTo: -150 });
        $("#b").rotate({ center: ["648px", "350px"], animateTo: 150 });
        OneDown()
      }
    }

  })
}

function count () {
  // 当前浏览器是否支持localStorage
  if (window.localStorage) {
    // 是否已经有记录了，如果有进入操作
    if (window.localStorage.getItem("count")) {
      //拿出key对应的value， 因为存储进去的是字符串。
      var c = parseInt(window.localStorage.getItem("count"));
      // 设置key，value加1
      window.localStorage.setItem("count", c + 1);
      console.log("页面刷新次数" + parseInt(window.localStorage.getItem("count")));
      times = parseInt(window.localStorage.getItem("count"))
      id = 1;
      age = 23;
      sex = 2;
      choose = 0;
    } else {
      //如果没有检查到key, 那肯定没设置，那就让他默认为0
      window.localStorage.setItem("count", 0);
      console.log(0);
    }
  }
}

function data2 () {
  con["times"] = times;
  con["choose"] = choose;
  con["age"] = age;
  con["sex"] = sex;
  var json = JSON.stringify(con);
  console.log("封装成json数据为：" + json);
  console.log(choose);
}

function changeChoose (choose) {
  con['choose'] = choose
  const json = JSON.stringify(con);
  console.log("封装成json数据为：" + json);
  console.log(choose);
}

//_____________________________1个小人向上移动
function OneUp () {

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
                  changeChoose(choose)
                  console.log("按键" + choose)
                  //每次按键后,向后台传递参数,这里的方法还没写
                  //刷新页面重置位置
                 // location.reload();
                })
              })
            }
            if (e && e.keyCode == 40) { // 按下键
              //要做的事情
              $(".p2").animate({ left: "593px", top: "200px" }, 2000, function () {
                $(".p2").animate({ left: "623px" }, 1000, function () {
                  choose = 2
                  changeChoose(choose)
                  console.log("按键" + choose)

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
  return choose;
}

//_____________________________1个小人向上移动完

//_____________________________1个小人向下移动
function OneDown () {

  $(".p1").animate({ left: "100px" }, 2000, function () {
    $(".p1").animate({ left: "553px", top: "230px" }, 2000, function () {
      $(".p1").animate({ left: "580px" }, 1000, function () {
        $(".p2").animate({ left: "230px" }, 2000, function () {
          //开门
          // 如果开两个门
          $("#a").rotate({ center: ["648px", "120px"], animateTo: -150 });
          //如果开一个门，就不能设置可以往关闭的门走，按键反应需要修改

          //如果按键向上
          document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) { // 按上键 
              //要做的事情
              $(".p2").animate({ left: "593px", top: "-200px" }, 2000, function () {
                $(".p2").animate({ left: "623px" }, 1000, function () {
                  //后台要记录的按键反应数据
                  choose = 1
                  console.log("按键" + choose)

                  //刷新页面重置位置
                  location.reload();
                })
              })
            }
            if (e && e.keyCode == 40) { // 按下键
              //要做的事情
              $(".p2").animate({ left: "593px", top: "230px" }, 2000, function () {
                $(".p2").animate({ left: "623px" }, 1000, function () {
                  choose = 2
                  console.log("按键" + choose)

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

		//_____________________________1个小人向下移动完