function anjian(){
	alert("ds")
	document.addEventListener("keydown",keydown);
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
		}
	console.log("结束键盘监听")
}
		

