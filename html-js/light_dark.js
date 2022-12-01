window.addEventListener("load" ,light_darkk);

function light_darkk(){
var switch_shadow = document.getElementById('switch_shadow');
	switch_shadow.addEventListener("click", () => {
		if (switch_shadow.checked == true){
		document.body.style.backgroundColor = "#000";
		document.getElementById("sol").style.color = "#FFF";
		document.getElementById("lua").style.color = "#FFF";
		document.getElementById("conteudo").style.color = "#FFF";
		var light_list = document.getElementById("list_tec");
		if(light_list != null){
			light_list.style.color = "#FFF"
		}

		var tr = document.querySelectorAll("tr");
			tr.forEach((tr, i) => {
				tr.style.borderCollapse = "collapse";
				tr.style.borderColor = "#FFF";
		});
		var th = document.querySelectorAll("th");
			th.forEach((th, i) => {
				th.style.backgroundColor = "#FFF";
				th.style.color = "#000";
			});
		var td = document.querySelectorAll("td");
			td.forEach((td, i) => {
				td.style.borderColor = "#FFF";
			});
		} else {
		document.body.style.backgroundColor = "#FFF";
		document.getElementById("sol").style.color = "#000";
		document.getElementById("lua").style.color = "#000";
		document.getElementById("conteudo").style.color = "#000";
		var light_list = document.getElementById("list_tec");
		if(light_list == null){

		}else{
			light_list.style.color = "#3b5998"
		}

		var tr = document.querySelectorAll("tr");
			tr.forEach((tr, i) => {
				tr.style.borderCollapse = "collapse";
				tr.style.borderColor = "#000";
		});
		var th = document.querySelectorAll("th");
			th.forEach((th, i) => {
				th.style.backgroundColor = "#000";
				th.style.color = "#FFF";
			});
		var td = document.querySelectorAll("td");
			td.forEach((td, i) => {
				td.style.borderColor = "#000";
			});
		}
	});
}
