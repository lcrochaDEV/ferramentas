//MENU ESQUERDO
function openSlideMenu() {
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('link_img').style.width = '250px';
      /*document.getElementById('main').style.marginLeft = '250px';*/
}
function closeSlideMenu() {
      document.getElementById('side-menu').style.width = '0';
      /*document.getElementById('link_menu').style.width = '0';*/
      /*document.getElementById('main').style.marginLeft = '0';*/
}
function openSlideTec() {
      document.getElementById('side-menu_right').style.width = '250px';
      document.getElementById('link_menu').style.width = '250px';
      /*document.getElementById('main').style.marginLeft = '250px';*/
}
function closeSlideTec() {
      document.getElementById('side-menu_right').style.width = '0px';
      /*document.getElementById('link_menu').style.width = '0';*/
      /*document.getElementById('main').style.marginLeft = '0';*/
}
//MENU ESQUERDO
document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado (Menu_Aba)");
	div_comandos();
	div_contatos();
});
//TEMPO DE ABERTORA DA ABA MENU LATERAL
window.onload = setTimeout(normal_sidebar, 1000);
function open_sidebar() {
    document.getElementById('aba').style.width = "100px";
	incial ();
}
function incial (){
	var build = document.getElementById("build");
	build.addEventListener("click", function(event) {
		div_comandos();	
	});
	var how_to_reg = document.getElementById("how_to_reg");
	how_to_reg.addEventListener("click", function(event) {
		div_contatos();
	});
	var info = document.getElementById("info");
	info.addEventListener("click", function(event) {
		div_info();	
	});
}
//BARRA LATERAL DIV MÃE
function normal_sidebar() {
	//Tempo de abetura e fechamento do menu 
    document.getElementById('aba').style.width = "50px";	
	document.getElementById('tab').style.display = "none";	
		//Parando menu quando estive em pagina correspondente.
		const URL = window.location.search;
		if(URL.indexOf("url=nav/comandos") != -1) {
			document.getElementById("build").style.backgroundColor = "#7D7D7D";
			document.getElementById("build").style.filter = "grayscale(50%)";
		}else if(URL.indexOf("url=nav/contatos") != -1) {
			document.getElementById("how_to_reg").style.backgroundColor = "#7D7D7D";
			document.getElementById("how_to_reg").style.filter = "grayscale(50%)";
	}
}
function close_all_aba() {
	//var controller = new AbortController();
	//var signal = controller.signal;	  
      document.getElementById('aba-menu').style.width = '0';
      /*document.getElementById('link_menu').style.width = '0';*/
      /*document.getElementById('main').style.marginLeft = '0';*/
}
//ABA MENU
//*************************//
function div_comandos(){
	const URL = window.location.search;
	if(URL.indexOf("url=nav/comandos") == -1) {
		//ABA_MENU		
		//ABA_BUILD
		const ABA_BUILD = "../nav/comandos.html"; fetch(ABA_BUILD, { 
			method: 'GET' // opcional
		})
			.then(function(response) { 
			response.text()
			.then(function(result){ 
			document.getElementById("aba_build").innerHTML = result;					
			/*console.log(result);*/ 
	  })
	})
		.catch(function(err) { 
		document.getElementById("aba_build").innerHTML = err;
		console.error(err);});
	}
}
function opem_build() {
	if(URL.indexOf("url=nav/comandos") == -1) {
	document.getElementById('aba-menu').style.width = '100%';
	document.getElementById("aba_build").style.display = 'block';	
	document.getElementById("aba_thow_to_reg").style.display = 'none';	
	document.getElementById("aba_info").style.display = 'none';
	}
}
//*************************//
function div_contatos() {
		const URL = window.location.search;
		if(URL.indexOf("url=nav/contatos") == -1) {
		//ABA_MENU		
		//ABA_ABA_THOW_TO_REG
		const ABA_THOW_TO_REG = "../nav/contatos.html"; fetch(ABA_THOW_TO_REG, { 
			method: 'GET' // opcional
		})
			.then(function(response) { 
			response.text()
			.then(function (result){ 
			document.getElementById("aba_thow_to_reg").innerHTML = result;
			/*console.log(result);*/		
	  })
	})
		.catch(function(err) { 
		document.getElementById("aba_thow_to_reg").innerHTML = err;
		console.error(err);});
	}
};		
function opem_how_to_reg() {
		const URL = window.location.search;
		if(URL.indexOf("url=nav/contatos") == -1) {
			document.getElementById('aba-menu').style.width = '100%';
			document.getElementById("aba_build").style.display = 'none';
			document.getElementById("aba_thow_to_reg").style.display = 'block';
			document.getElementById("aba_info").style.display = 'none';
	}
}
//*************************//
function div_info() {
	const URL = window.location.search;
	if(URL.indexOf("url=nav/SenhasGerenciasTX")==-1) {	
	//ABA_MENU		
	//ABA_INFO
	const ABA_INFO = "../nav/SenhasGerenciasTX.html"; fetch(ABA_INFO, { 
		method: 'GET' // opcional
	})
		.then(function(response) { 
		response.text()
		.then(function (result){ 
		document.getElementById("aba_info").innerHTML = result;
		/*console.log(result);*/		
  })
})
	.catch(function(err) { 
	document.getElementById("aba_info").innerHTML = err;
	console.error(err);});
}
};		
function opem_info() {
	const URL = window.location.search;
	if(URL.indexOf("url=nav/SenhasGerenciasTX")==-1) {
		document.getElementById('aba-menu').style.width = '100%';
		document.getElementById("aba_thow_to_reg").style.display = 'none';
		document.getElementById("aba_build").style.display = 'none';
		document.getElementById("aba_info").style.display = 'block';
}
}
//*************************//
//ABA_MENU

