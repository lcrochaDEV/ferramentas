  document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado");
	press();
});
//window.onload = function press(event){};

function press(){
	var key = event.which || event.keyCode;
   if(key==67)/*L*/{   
		if(URL.indexOf("url=nav/comandos")==-1) {
			document.getElementById('aba-menu').style.width = '100%';
			document.getElementById("aba_build").style.display = 'block';	
			document.getElementById("aba_thow_to_reg").style.display = 'none';	
	}
}
   if(key==76) /*C*/{
		const URL = window.location.search;
		if(URL.indexOf("url=nav/contatos")==-1) {
			document.getElementById('aba-menu').style.width = '100%';
			document.getElementById("aba_thow_to_reg").style.display = 'block';
			document.getElementById("aba_build").style.display = 'none';		
	}
}

	/*MENU SLIDE*/
	if(key==77) /*M*/{ 
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('link_img').style.width = '250px'; 
	}  
	
	if(key==27) /*ESC*/{
    document.getElementById('aba-menu').style.width = '0';
	document.getElementById('side-menu').style.width = '0';
		event.keyCode == 0;
		return false;
	}  
}
document.onkeydown = function press(event){
	var key = event.which || event.keyCode;
	if(key==27) /*ESC*/{
    document.getElementById('aba-menu').style.width = '0';
	document.getElementById('side-menu').style.width = '0';
		event.keyCode == 0;
		return false;
	}  
}
function descobre(key){
   alert("O código da tecla pressionada é " + key);
  
  //<input id="cmd" name="cmd" type="text" size="50" onKeyPress="descobre(event.keyCode)">
}