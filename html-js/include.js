import { ConectJson } from '../ControllerClass/ConectaJson.js'  
  document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado");
	carregaConteudo();
	passagemURL();
});

//INCLUDE HTML MONTA A PÁGINA CARREGA CONTEUDO
function carregaConteudo() {
	//PROCURANDO DIRETORIO E REDIRECIONANDO PAGINA
	if(window.location.search === ''){
		conectaApi(`../nav/home.html`)
	 }else{
		let Url = window.location.href;
		let regex = /nav\/\w+|\.\D\w*/gm;
		let pegaExtensao = [... Url.match(regex)];	
		let novaUrl = `../${pegaExtensao[1]}${pegaExtensao[0]}`;
		conectaApi(novaUrl);
				//? http://127.0.0.1:5500/ 	 //: http://127.0.0.1:5500/index.html?url=nav/home;
	 } 
};//FIM
//INCLUDE PAGINAÇÃO
async function conectaApi(url){
	let conectJsonResult = new ConectJson(url)
	let urlToFetch = await conectJsonResult.conectJsonUrlHtml();
	document.getElementById("conteudo").innerHTML += urlToFetch; 
}
	
//INCLUDE HTML MONTA A PÁGINA
function passagemURL() {
	var lisrURL = document.querySelectorAll('include-html');
	lisrURL.forEach((lisrURL, i) => {	  
	let file = lisrURL.getAttribute('url'); //PARA COLCOR EM LOOP É SO COLOCA I NO COUCHETES
	    includeHTML(file, i);
	});
}
async function includeHTML(file, index) {
		let conectJsonResult = new ConectJson(file)
		let result = await conectJsonResult.conectJsonUrlHtml();
		document.querySelectorAll('include-html')[index].innerHTML += result;	
}	
