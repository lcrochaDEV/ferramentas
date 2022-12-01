  document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado");
	include();
	passagemURL();
});

function include() {
//NAVEGAÇÃO ENTRE LINKS
	var getUrl = window.location;
	var baseUrl = getUrl.protocol + "//" + getUrl.hostname + "/" + getUrl.pathname.split('/')[1];
	//compara palavra se existe
	var newURL = window.location.search; //?url=nav/
	resultado = newURL.substring(newURL.indexOf("/") + 1);
/*		if(newURL.indexOf("url=nav/" + resultado)==-1) {
		alert("não existe esse caminho na url");
		} else {
		alert("sim o caminho " + newURL + " existe na url");
	};
*/
//	var url = new URL(baseUrl);
//	url.searchParams.set('url', 'nav'); // added parameter with a space and !
//	var res = decodeURIComponent(url); //decodifica URL*/
//	history.pushState('null','null', res); return false;

	//PROCURANDO DIRETORIO E REDIRECIONANDO PAGINA
	var ext = ".html";
	var home = "../nav/home" + ext;
	var dir = "../nav/";
	var nav = resultado; //home
	var caminho = (dir + nav + ext);

	//Endereço da Barra de endereço.
	//var linkURL = window.location.origin; //10.10.65.33/index.html?url=nav/home
	//var siteURL = window.location.pathname; //index.html

	if(newURL.indexOf("url=nav/" + resultado)==-1) {
				const URL_TO_FETCH = home; fetch(URL_TO_FETCH, {
				method: 'GET' // opcional
			})
				.then(function(response) {
				response.text()
				.then(function(result){
				document.getElementById("conteudo").innerHTML = result;
				/*console.log(result);*/
		  })
		})
			.catch(function(err) { console.error(err); });
	} else {
			const URL_TO_FETCH = caminho; fetch(URL_TO_FETCH, {
			method: 'GET' // opcional
		})
			.then(function(response) {
			response.text()
			.then(function(result){
			document.getElementById("conteudo").innerHTML = result;
			/*console.log(result);*/
	  })
	})
			.catch(function(err) {
			document.getElementById("conteudo").innerHTML = err;
			console.error(err); });
	};

//INCLUDE HTML
};//FIM
//LINK EXEMPLO PARA MENU
//index.html?url=nav/home
//INCLUDE HTML
function passagemURL() {
	var lisrURL = document.querySelectorAll('include-html');
	 lisrURL.forEach((lisrURL, i) => {	    	
	   file = lisrURL.getAttribute('url'); //PARA COLCOR EM LOOP É SO COLOCA I NO COUCHETES
	   return includeHTML(file, i);
	});
}
function includeHTML(file, index) {
	   	const URL = file; fetch(URL, {
			method: 'GET' // opcional
			})
			.then(function(response) {
			response.text()
			.then(function(result){
			var log = document.querySelectorAll('include-html')[index].innerHTML = result;
			//console.log(`${file} | ${index}`); 
			})		
		})
		.catch(function(err) {
			document.querySelector('include-html')[index].innerHTML = err;
		console.error(err);});
	 
};