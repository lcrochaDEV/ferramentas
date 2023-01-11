  document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado");
	carregaConteudo();
	passagemURL();
});

//INCLUDE HTML MONTA A PÁGINA CARREGA CONTEUDO
function carregaConteudo() {
//NAVEGAÇÃO ENTRE LINKS
	//PEGA O CAMINHO DA URL PARA O NVO LINK
	let Url = window.location.href;
	let regex = /[a-z]{1,}\b\/\w*|\.\D\w*/gm;
	let pegaExtensao = [... Url.matchAll(regex)];
	/*let juntaArr = pegaExtensao[1].concat(pegaExtensao[0]);
	let r = {
		dir:juntaArr[0],
		ext:juntaArr[1]
	};
	console.log(r)*/
	
	//let regexExtesao = /(?:.html|.php|.htm)/gm;
	
	//PROCURANDO DIRETORIO E REDIRECIONANDO PAGINA
	var newURL = window.location.search; //?url=nav/
	resultado = newURL.substring(newURL.indexOf("/") + 1);
	
	var ext = ".html";
	var home = `../nav/home${ext}`;
	var dir = "../nav/";
	var nav = resultado; //home
	var caminho = `${dir}${nav}${ext}`; //../nav/home.html - CAMINHO MOTADO MANUAL

	window.location.search === '' ? fetchURL(home) : fetchURL(caminho)	;
				//? http://127.0.0.1:5500/ 	 //: http://127.0.0.1:5500/index.html?url=nav/home	}; 

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
	
//INCLUDE HTML
};//FIM

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
