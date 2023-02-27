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
