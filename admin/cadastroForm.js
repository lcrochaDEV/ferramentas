import { CadastroDadosForms } from '../ControllerClass/ControllerLogin.js';

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
const loginMaiusculoStorage = JSON.parse(localStorage.getItem("cadastraLogin")) || [];
//CADASTRO CF EM BANCO DE DADOS
let formulario = document.querySelector('[data-formulario]');

export async function verificarUsers(nomeVerificado){
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        //console.log(event)
        let login = event.target.elements['login'];
        let senha = event.target.elements['senha'];
        let loginMaiusculo = login.value.toUpperCase();

        //TRANSFORMANDO EM OBJETOS
			if(loginMaiusculo === "" && senha.value === ""){
				console.log(`Cadastre um item!`);
			}else if(loginMaiusculo != "" && senha.value != ""){
            //CADASTRO DE ID
			let id = loginMaiusculoStorage.findIndex(id => {
				if(id.id === loginMaiusculoStorage.length -1)
					return loginMaiusculoStorage.length;
			}) +1;			
            //CRIA OBEJTO EM CLASS
			const loginMaiusculoSys = new CadastroDadosForms(id, loginMaiusculo, senha.value)
        
            let nomeStorage = loginMaiusculoStorage.find(itens => itens.username === loginMaiusculo); //LOCALSTORAGE
            let nomeUser = nomeVerificado.find(itens => itens.nome === loginMaiusculo); //JSON

            //CAMPARA SE EXITE O NOME NO ARQUIVO JSON
            if(nomeUser){
                if(nomeUser.nome === loginMaiusculo){
                    if(nomeStorage === undefined || nomeStorage.username !== loginMaiusculo){
                        //COLOCA MAIS UM INTEM NA LISTA DE ARRAY            
                        loginMaiusculoStorage.push(loginMaiusculoSys);
                        //CADASTRA ITEM NO LOCALSTORGE
                        loginMaiusculoSys.cadastrarLocalSorage("cadastraLogin", loginMaiusculoStorage)
                        console.log(`Cadastrado com sucesso!`);
                        redirecioanarPag();
                    }                       
                    if(nomeStorage.username === loginMaiusculo && nomeStorage.indnumb === senha.value){ //IDENTIFICA USUARIO E SENHA EXISTE EM LOCALSTORAGE
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