import { CadastroDadosForms } from '../ControllerClass/ControllerLogin.js';
import { conectJson } from '../html-js/muda_cor_oe1.js';
import { tabelaStorage } from '../html-js/localstorage.js';
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

//NOVO LOCALSTORGE
const loginStorage = JSON.parse(localStorage.getItem("cadastraLogin")) || [];
//CADASTRO CF EM BANCO DE DADOS
let formulario = document.querySelector('[data-formulario]');

export async function verificarUsers(nomeVerificado){
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        //console.log(event)
        let login = event.target.elements['login'];
        let senha = event.target.elements['senha'];
        //TRANSFORMANDO EM OBJETOS
			if(login.value === "" && senha.value === ""){
				console.log(`Cadastre um item!`);
			}else if(login.value != "" && senha.value != ""){
            //CADASTRO DE ID
			let id = loginStorage.findIndex(id => {
				if(id.id === loginStorage.length -1)
					return loginStorage.length;
			}) +1;			
            //CRIA OBEJTO EM CLASS
			const loginSys = new CadastroDadosForms(id, login.value, senha.value)
        
            let nomeStorage = loginStorage.find(itens => itens.username === login.value); //LOCALSTORAGE
            let nomeUser = nomeVerificado.find(itens => itens.nome === login.value); //JSON

            //CAMPARA SE EXITE O NOME NO ARQUIVO JSON
            if(nomeUser){
                if(nomeUser.nome === login.value){
                    if(nomeStorage === undefined || nomeStorage.username !== login.value){
                        //COLOCA MAIS UM INTEM NA LISTA DE ARRAY
                        loginStorage.push(loginSys);
                        //CADASTRA ITEM NO LOCALSTORGE
                        loginSys.cadastrarLocalSorage("cadastraLogin", loginStorage)
                        console.log(`Cadastrado com sucesso!`);
                        redirecioanarPag();
                    }                       
                    if(nomeStorage.username === login.value && nomeStorage.indnumb === senha.value){ //IDENTIFICA USUARIO E SENHA EXISTE EM LOCALSTORAGE
                        console.log('Acesso Liberado!');                   
                        redirecioanarPag();
                    }else{
                        const redirecionamento = new CadastroDadosForms();
					    redirecionamento.tratamentoDeErros();  
                    }
                }
            }else{
                const redirecionamento = new CadastroDadosForms();
					    redirecionamento.tratamentoDeErros();
            }
            login.value = "";
            senha.value = ""; 
        }
    })
}
async function redirecioanarPag(){
    //REDIRECIONA 
    window.location.href = `${origem}/index.html?url=nav/contatos`;
}