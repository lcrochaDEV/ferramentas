import { CadastroDadosForms } from '../ControllerClass/ControllerLogin.js';
//NOVO LOCALSTORGE
const loginStorage = JSON.parse(localStorage.getItem("cadastraLogin")) || [];
//CADASTRO CF EM BANCO DE DADOS
let formulario = document.querySelector('[data-formulario]');
    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(event)
        let login = event.target.elements['login'];
        let senha = event.target.elements['senha'];
        //TRANSFORMANDO EM OBJETOS
			if(login.value === "" && senha.value){
				console.log(`Cadastre um item!`);
			}else if(login.value != "" && senha.value != ""){
            //CADASTRO DE ID
			let id = loginStorage.findIndex(id => {
				if(id.id === loginStorage.length -1)
					return loginStorage.length;
			}) +1;			
            //CRIA OBEJTO EM CLASS
			const loginSys = new CadastroDadosForms(id, login.value, senha.value)
            //IDENTIFICA CADASTRO REPETIDOS
			var lista = loginStorage.filter((user) => {
                return user.username === login.value;
            })
            if(lista.length === 0){
                //COLOCA MAIS UM INTEM NA LISTA DE ARRAY
				loginStorage.push(loginSys);
                //CADASTRA ITEM NO LOCALSTORGE
                loginSys.cadastrarLocalSorage("cadastraLogin", loginStorage)
                console.log(`Cadastrado com sucesso!`);
            }else{
                document.querySelector('[data-retorno]').innerHTML = ` <img src="https://cdn.cdnlogo.com/logos/c/51/claro.svg"><p>Existe cadastro com o usuario ${login.value}<p>`;
            }
            login.value = "";
            senha.value = "";
            //REDIRECIONA PÁGINA
            const origem = window.location.origin;
            return window.location.href = `${origem}/index.html?url=nav/contatos`;
        }
    });


