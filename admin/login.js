import { CadastroDadosForms } from '../ControllerClass/ControllerLogin.js';
import { conectJson } from '../html-js/muda_cor_oe1.js';
const origem = window.location.origin;

let objLinkNomeRede = [
	{
		link : `${origem}/lista/usernameTmp.json`
	},
	{
		link : `https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/lista/usernameTmp.json`
	}
];
//CONEXÃO COM O ARQUIVO JSON
async function usernameTmp(url) {
	try {
		const conexao = await fetch(url)
		if(conexao.status === 200){
			const openConexao = await conexao.json();
			return verificarUsers(openConexao.find(itens => itens).userNamerede); 
      //console.log(conexao.status)
		}else if (conexao.status === 404){
			//REMOVE DA LISTA LINK INATIVO
			objLinkNomeRede.shift().link;
			return usernameTmp(objLinkNomeRede.find(itens => itens).link);
		}           
	}catch (error){
		console.log('Falha no link!')
	}
}
window.addEventListener ('load', async function(){
	await usernameTmp(objLinkNomeRede.find(itens => itens).link);
});

//BUSCA DADOS EM LOCALSTORGE
const loginStorage = JSON.parse(localStorage.getItem('cadastraLogin')) || [];
async function verificarUsers(nomeVerificado){
	let nomeStorage = loginStorage.find(itens => itens.username);	//LOCALSTORAGE	
	if(nomeStorage){
		let nomeUser = nomeVerificado.find(itens => itens.nome === nomeStorage.username).nome; //JSON	
		if(nomeStorage.username === nomeUser){
			console.log('Acesso Liberado!')
			return conectJson();
		}
	}else {	
		let Url = window.location.href;
		let regex = /nav\/\w+/gm;
		let pegaExtensao = [... Url.match(regex)];	
			pegaExtensao.find(itens => {
				if(itens === 'nav/contatos'){
					const redirecionamento = new CadastroDadosForms();
					redirecionamento.direcionandoLogin();
				}
			})		    
	}
};
