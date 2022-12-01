let bancoStorge = 'cadastraAtividades'; //COLUNA CHAVE LOCALSTORGE

//CLASS
class CadastroDadosForms {
	constructor (id, username, valor){
		this.id = id;
		this.username = username;
		this.valor = valor;
	}
	cadastrarBD(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}
}

//Modo para cadastrar elemento em localstorge
//NOVO LOCALSTORGE
const itensStorge = JSON.parse(localStorage.getItem(bancoStorge)) || [];

function avaliarDados(){
let displayAll = document.querySelector("#td_check");
	displayAll.addEventListener("click", function(event){
		let id = Math.max(...itensStorge.map(itens => itens.id));
		let username = document.querySelector('[data-username]').innerText;	
		let texto = event.path[2].children[11].children[0];
			id = itensStorge.length === 0 ? id =1 : id +1;
			cadastraAtividades(id, username, texto);
	})
}
window.addEventListener("load", avaliarDados);

function cadastraAtividades(id, username, texto){
	//CRIA OBEJTO EM CLASS
	const cadastrar = new CadastroDadosForms(id, username, texto.value)
	//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
	itensStorge.push(cadastrar);			
	//CADASTRA ITEM NO LOCALSTORGE
	cadastrar.cadastrarBD(bancoStorge, itensStorge)
}
/*function cadastraAtividades(){
let displayAll = document.querySelector("#td_check");
	displayAll.addEventListener("click", function(event){
		let texto = event.path[2].children[11].children[0];		
		//AVALIA SE EXISTE CADASTRO OU O CAMPO ESTÁ EM BRANCO
		let dadosExiste = itensStorge.find(itens => itens.valor === texto.value);
		if(texto.value !== ""){
			if(dadosExiste){
				console.log(`Existe cadastro com o valor ${dadosExiste.valor}`)
			}else{
				//CRIA OBEJTO EM CLASS
				const cadastrar = new CadastroDadosForms(id, texto.value)
				//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
				itensStorge.push(cadastrar);			
				//CADASTRA ITEM NO LOCALSTORGE
				cadastrar.cadastrarBD(bancoStorge, itensStorge)
				console.log(`${texto.value} cadastrado com Sucesso!`)			
			}
		}else{
			console.log(`Campo em branco!`);
		}
	})
}*/
//############CONDICIONAL NÃO OBRIGATÓRIA############
/*function condicaoNotObrigatoria(){
let displayAll = document.querySelector("#tabela");
	displayAll.addEventListener("click", function(event){
		let clickCheck = event.target.checked;
		console.log(event)
			if(clickCheck === true){
				cadastraAtividades();
			}			
	})
}*/
//window.addEventListener("load", cadastraAtividades);
//############CONDICIONAL NÃO OBRIGATÓRIA############