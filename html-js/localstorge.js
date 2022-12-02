let bancoStorge = 'cadastraAtividades'; //COLUNA CHAVE LOCALSTORGE
//BUSCA DADOS EM LOCALSTORGE
const itensStorge = JSON.parse(localStorage.getItem(bancoStorge)) || [];
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
function cadastraAtividades(id, username, texto){
	//CRIA OBEJTO EM CLASS
	const cadastrar = new CadastroDadosForms(id, username, texto.value)
	//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
	itensStorge.push(cadastrar);			
	//CADASTRA ITEM NO LOCALSTORGE
	cadastrar.cadastrarBD(bancoStorge, itensStorge)
}
//Modo para cadastrar elemento em localstorge
//NOVO LOCALSTORGE
function cadatrarLocastorg(){
let displayAll = document.querySelector("#tabela");
	displayAll.addEventListener("click", function(event){
		let acaoEvent = event.target.checked;
		console.log(event)
		console.log(acaoEvent)
		let id = Math.max(...itensStorge.map(itens => itens.id)); //BUSCA O MAIOR NUMERO DE UM ARRAY DE NUMEROS
		let username = event.path[2].childNodes[16].innerText;
		let texto = event.path[2].lastElementChild.firstElementChild;
			id = itensStorge.length === 0 ? id =1 : id +1; //CONDIÇÃO QUE NALISA SE EXITE CASTRO / E SE HOVER SOMA UM AO JÁ CADASTRADO
		console.log(`${id} ${username} ${texto}`);
		if(acaoEvent === true){
			if(itensStorge.map(itens => itens.username).toString() !== username){ //NÃO PERMITE CADASTRAR REPETIDOS
				cadastraAtividades(id, username, texto);
			}
			texto.disabled = true;
		}else{
			itensStorge.splice(itensStorge.indexOf(itensStorge.find(itens => itens.username === username)),1)
			localStorage.setItem(bancoStorge, JSON.stringify(itensStorge));
			texto.value = '';
			texto.disabled = false;
		}
	})
}
window.addEventListener("load", cadatrarLocastorg);

let recuperarTxt = itensStorge.map(itens => itens.valor).toString()
function recuperaDados(){	
	let texto = document.querySelector('[data-local] input');
		texto.value = recuperarTxt;
		texto.disabled = true;
}
window.addEventListener("load", recuperaDados);


 let colorCheck = document.querySelectorAll("#td_check");
	// colorCheck.style.backgroundColor = '#00FF00';	
	// colorCheck.style.color = '#FFF';	
	// colorCheck.style.fontWeight = "bold"
	// colorCheck.style.innerText = "OFF: ";

