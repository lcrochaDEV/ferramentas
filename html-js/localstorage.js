import { CadastroDadosForms } from '../ControllerClass/ControllerClass.js';

//BUSCA DADOS EM LOCALSTORGE
const listaStorage = JSON.parse(localStorage.getItem('cadastraAtividades')) || [];

function tabelaStorage(){
let table = document.querySelector('[data-tabela]')
	table.addEventListener("change", (event) => {
	let username = event.target.offsetParent.parentElement.querySelector('[data-username]').innerText; //SELECIONA USERNAME
	let localText = event.target.offsetParent.nextElementSibling.querySelector('[data-local] input'); // TEXTO DO IMPUT LOCAL
		//CRIA OBEJTO EM CLASS
		const dadosList = new CadastroDadosForms(id, username, localText.value);
		let tdColor = event.target.offsetParent;
		let tdText = event.target.offsetParent.children.OnOff;
		if(event.target.checked === true){
			//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
			listaStorage.push(dadosList);
			//CADASTRA ITEM NO LOCALSTORGE
			dadosList.cadastrarLocalSorage('cadastraAtividades', listaStorage)
			console.log(`Cadastrado com sucesso!`);
			//MUDA COR TEXTO CSS
			tdColor.style.backgroundColor = "#00FF00"; //MUDA COR DO TD
			tdText.innerText = 'ON: '; //MUDA TEXTO
			localText.disabled = true;
		}else{
			//MUDA COR TEXTO CSS
			tdColor.style.backgroundColor = "#FF0000"; //MUDA COR
			tdText.innerText = 'OFF: '; //MUDA TEXTO
			localText.disabled = false;
			localText.value = '';
			deletaDadosLista(username)
		}	
	})
	
}
window.addEventListener("load", tabelaStorage);

//DELETA NOME NA LISTA
function deletaDadosLista(username){
	listaStorage.splice(listaStorage.findIndex(itens => itens.username === username),1);
	localStorage.setItem('cadastraAtividades', JSON.stringify(listaStorage));
}

//RECUPERA DADOS
export async function recuperaDados(){
	listaStorage.forEach(itens => {
		listaNomes(itens.username, itens.valor)  
	  })
}
window.addEventListener("load", recuperaDados);
function listaNomes(users, valor){
	let username = [...document.querySelectorAll('[data-username]')];
	let userValor = username.find(itens => itens.innerText === users);
	console.log(userValor.innerText)
/*	let pegaValue = userValor.parentNode.querySelector('[data-local]');
		pegaValue.lastElementChild.value = valor;
		pegaValue.firstElementChild.disabled = true;
		//MUDA COR TEXTO CSS
		userValor.parentNode.querySelector('#OnOff').innerText = 'ON: '; //MUDA TEXTO;
		userValor.parentNode.querySelector('#td_check').style.backgroundColor = "#00FF00"; //MUDA COR DO TD
		userValor.parentNode.querySelector('#td_check').lastElementChild.checked = true;	*/
}

