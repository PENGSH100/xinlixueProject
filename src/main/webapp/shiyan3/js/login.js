window.onload=function(){
	//check()
}
			function check(){
			   id=register_form.sub.value;
			   age=register_form.age.value;
			   sex=register_form.sex.value;
			   alert(id);
			}
			
			function ajax(dataBody){
				var settings = {
					"url": "http://localhost:8080/xinlixue/login",
					"method": "POST",
					"timeout": 0,
					"headers": {
						"Content-Type": "application/json"
					},
					"data": JSON.stringify(dataBody),
				};

				$.ajax(settings).done(function (response) {
					var data = response.result
					console.log("data2:" + data)
				});
}