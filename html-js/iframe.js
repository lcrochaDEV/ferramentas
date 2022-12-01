//Parando Javascript quando estive em pagina correspondente.
const URL = window.location.search;
	if(URL.indexOf("url=nav/iframe")== 1) {
//SELECIONA PAGINA NO SELECT//
	function vaiFrame() {
	var pag = document.getElementById("seleciona").value;
		document.getElementById("if_sir").src = pag;
	}
	window.setInterval(function() {
		var func_atualizar = window.parent.frames[0].location = document.getElementById("seleciona").value;
	}, 1200000);
	var sHors = "0"+0; 
	var sMins = "0"+0;
	var sSecs = 0;
		window.setInterval(function getSecs(){
			sSecs++;
			if(sSecs==60){sSecs=0;sMins++;
			if(sMins<=9)sMins="0"+sMins;
			}
			if(sMins==60){sMins="0"+0;sHors++;
			if(sHors<=9)sHors="0"+sHors;
			}
			if(sSecs<=9)sSecs="0"+sSecs;
			clock1.innerHTML=sHors+"<font>:</font>"+sMins+"<font>:</font>"+sSecs;
			//setTimeout('getSecs()',1000);
		}
	,1000);
};