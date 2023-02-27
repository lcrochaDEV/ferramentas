import { CadastroDadosForms } from '../ControllerClass/ControllerClass.js';

//BUSCA DADOS EM LOCALSTORGE
const listaStorage = JSON.parse(localStorage.getItem('cadastraAtividades')) || [];
export function tabelaStorage(){
let table = document.querySelector('[data-tabela]')
	table.addEventListener("change", (event) => {
	let username = event.target.offsetParent.parentElement.querySelector('[data-username]').innerText; //SELECIONA USERNAME
	let localText = event.target.offsetParent.nextElementSibling.querySelector('[data-local] input'); // TEXTO DO IMPUT LOCAL
	//CADASTRO DE ID
	let id = listaStorage.findIndex(id => {
		if(id.id === listaStorage.length -1)
			return listaStorage.length;
	}) +1;	
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
			deletaDadosLista(username)
		}
	})
}

//DELETA NOME NA LISTA
function deletaDadosLista(username){
	listaStorage.splice(listaStorage.findIndex(itens => itens.username === username),1);
	localStorage.setItem('cadastraAtividades', JSON.stringify(listaStorage));

	let nomesLista = [...document.querySelectorAll('[data-username]')];
	let n = nomesLista.findIndex(itens => itens.innerText === username);
		document.querySelectorAll('#OnOff')[n].innerText = 'OFF: '; //MUDA TEXTO;
		document.querySelectorAll('#td_check')[n].style.backgroundColor = "#FF0000"; //MUDA COR DO TD
		document.querySelectorAll('#td_check')[n].children[1].checked = false;
		document.querySelectorAll('[data-local]')[n].children[0].disabled = false;
}

//RECUPERA DADOS
export async function recuperaDados(){
	await listaStorage.forEach(itens => {
		listaNomes(itens.username, itens.valor)  
	  })
	  	tabelaStorage();
	 	deletaStatus();
}

function listaNomes(users, valor){
	let username = [...document.querySelectorAll('[data-username]')];
	let userValor = username.find(itens => itens.innerText === users);
	if(userValor){
		let pegaValue = userValor.parentNode.querySelector('[data-local]');
		pegaValue.lastElementChild.value = valor;
		pegaValue.firstElementChild.disabled = true;
		//MUDA COR TEXTO CSS
		userValor.parentNode.querySelector('#OnOff').innerText = 'ON: '; //MUDA TEXTO;
		userValor.parentNode.querySelector('#td_check').style.backgroundColor = "#00FF00"; //MUDA COR DO TD
		userValor.parentNode.querySelector('#td_check').lastElementChild.checked = true;
	}
}

function deletaStatus(){
	let deletaStusOnOff = document.querySelector('[data-alloff]');
		deletaStusOnOff.addEventListener("change", (event) => {
		let username = document.querySelectorAll('[data-username]'); //SELECIONA USERNAME
			username.forEach((username, i) => {
				deletaDadosLista(username.innerText)
			})	
		})
}