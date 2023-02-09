  document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado");
	carregaConteudo();
	passagemURL();
});

//INCLUDE HTML MONTA A PÁGINA CARREGA CONTEUDO
function carregaConteudo() {
	//PROCURANDO DIRETORIO E REDIRECIONANDO PAGINA
	if(window.location.search === ''){
		fetchURL(`../nav/home.html`)
	 }else{
		let Url = window.location.href;
		let regex = /[a-z]{1,}\b\/|\w+$|\.\D\w*/gm;
		let pegaExtensao = [... Url.match(regex)];
		let novaUrl = `../${pegaExtensao[1]}${pegaExtensao[2]}${pegaExtensao[0]}`;
		fetchURL(novaUrl);
				//? http://127.0.0.1:5500/ 	 //: http://127.0.0.1:5500/index.html?url=nav/home;
	 } 
};//FIM
//INCLUDE PAGINAÇÃO
async function fetchURL(url){
	try{
		const URL =  await fetch(url); 
		const urlToFetch = await URL.text();
		document.getElementById("conteudo").innerHTML = urlToFetch; 
		return urlToFetch
	}catch(err){
			document.getElementById("conteudo").innerHTML = err;
			console.error(err);
	}
}
	
//INCLUDE HTML MONTA A PÁGINA
function passagemURL() {
	var lisrURL = document.querySelectorAll('include-html');
	lisrURL.forEach((lisrURL, i) => {	    	
	   file = lisrURL.getAttribute('url'); //PARA COLCOR EM LOOP É SO COLOCA I NO COUCHETES
	    includeHTML(file, i);
	});
}
async function includeHTML(file, index) {
	try{
		const URL =  await fetch(file); 
		const result = await URL.text();
		var log = document.querySelectorAll('include-html')[index].innerHTML += result;	
		//console.log(result)
		return result;
	}catch(err){
		document.querySelector('include-html').innerHTML = err;
		console.error(err);
	}
}	
