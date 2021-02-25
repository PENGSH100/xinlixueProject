
			function login(){
			   sub=register_form.sub.value;
			   age=register_form.age.value;
			   sex=register_form.sex.value;
			   document.getElementById("href").href='shiyan1a.html?sub='+sub;
			   console.log("sub:"+sub+" age:"+age+" sex:"+sex)

				ajax({"sub":sub,"age":age,"sex":sex});
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
					var data = response.result;
					console.log("login:" + data)
				});
}