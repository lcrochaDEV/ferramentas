import { ConectJson } from '../ControllerClass/ConectaJson.js'
import { recuperaDados } from "./localstorage.js";

export async function conectaApi(){
	let conectJsonResult = new ConectJson('../json/dados_tecnicos.json')
	let data = await conectJsonResult.conectJsonUrlJson();
		myArea(data);
		btn(data);
}
window.addEventListener("load", conectaApi);

//ACÃO DE LISTA AS ÁREAS PRÉ-DEFINIDAS
function myArea(data){
	let novaLista = data.find(data => data).dados_tecnicos;
	let areaAt = novaLista.map(p => p.area);
	let novoArr = [... new Set(areaAt)];
	//BOTÕES DAS AREAS NO INICIO DA PÁGINA
	let btn = document.querySelector("#btn");
		novoArr.forEach( (arrarea, i) => {
			btn.innerHTML += `<a href="#" class="btn${arrarea}" data-cfs="${arrarea}">Lista de Técnicos ${arrarea}</a>`;
		});
	//DEFINI O CF QUE VAI SER DESTAQUE NA INICIALIZAÇÃO DA PÁGINA
	let predefineArea = novoArr.find(itens => itens === 'GR');
	let h1 = document.getElementById("h1").innerHTML = `Lista de Técnicos ${predefineArea}`;
	//FILTRA TODO O CF QUE JÁ ESTÁ DEFINIDO EM PREDEFINEAREA
	let listaAreas =  novaLista.filter(function(e) {		
		return e.area == predefineArea;
	});
	isertTable(listaAreas)
	recuperaDados();
}
//ACÃO DO BOTÕES DE ÁREAS NO TOPO DA PAGINA
function btn(data){
	//LISTA APENAS AS AREAS EXISTENTES
	let novaLista = data.find(data => data).dados_tecnicos;
	//EVENTO CLICK BTN
	let btn = document.getElementById("btn"); //BUSCA OS BOTÕES
	let btnList = [...btn.children]
	btn.addEventListener("click", (event) => {
		let dataCfs = event.target.dataset.cfs;
			if(dataCfs !== undefined){
				//ALTERAÇÃO NO H1 DE CADA CFs
				let h1 = document.getElementById("h1").innerHTML = `Lista de Técnicos ${dataCfs}`;
				//CRIA NOVA TABELA COM TODOS OS RESPECTIVOS MENBROS DE CADA AREA
				let filtro = novaLista.filter((e) => {
					return e.area === dataCfs;
				})			
				
				let cfsList = document.querySelectorAll('#tabela table');
					cfsList.forEach(cfsList => {
						if(cfsList.id.indexOf(dataCfs) === -1){
							isertTable(filtro);
						}
					})
				recuperaDados();
			}
		})
};

//FUNÇÃO MESTRE CRIA TAGS NO DOM
function isertTable(passDados){
	//SCRIPT  ALEATORIO v3
	//*******************************************CRIAÇÃO DE TABLE, TR e TH CHECKBOX*******************************************
	let tableDom = document.getElementById('tabela');
		tableDom.innerHTML = `
		<table data-tabela>
			<tr data-dataCampos></tr>
		</table>
		`;
	let arrCampos = ["TÉCNICO", "RG", "CPF", "MATRÍCULA", "TELEFONE 1", "TELEFONE 2", "TELEFONE 3", "NOME DA MÃE", "E-MAIL", "HORÁRIOS", "STATUS", ""];
		arrCampos.forEach(arrCampos => {
			let dataCampos = document.querySelector('[data-dataCampos]').innerHTML += `<th>${arrCampos}</th>`;
		})
		passDados.forEach(passDados => {
			let dataTabela = document.querySelector('[data-tabela]');
				dataTabela.innerHTML += `
					<td>${passDados.nome}</td>
					<td>${passDados.rg}</td>
					<td>${passDados.cpf}</td>
					<td>${passDados.mat}</td>
					<td>${passDados.tel1}</td>
					<td>${passDados.tel2}</td>
					<td>${passDados.tel3}</td>
					<td>${passDados.nome_mae}</td>
					<td data-username>${passDados.email}</td>
					<td>${passDados.horario}</td>
					<td id="td_check">
						<span id="OnOff">ON: </span>
						<input type="checkbox" checked>
					</td>
					<td data-local>Local:  
						<input type="text">
					</td>
					`;
				})
			let dataAllOff = document.querySelector('#alloff');	
				dataAllOff.innerHTML = `ALL OFF <input type="checkbox" id="${passDados[0].area}" data-alloff>`;				
		//********************************ESTILO E COR CINZA***********************************
		let colorCheck = document.querySelectorAll("#td_check");
			colorCheck.forEach(colorCheck => {
				colorCheck.style.backgroundColor = '#FF0000';	
				colorCheck.style.color = '#FFF';	
				colorCheck.style.fontWeight = "bold"
				colorCheck.children['OnOff'].innerText = "OFF: ";
				colorCheck.children[1].checked = false
			})
		//************************************//CSS COLOR//************************************
	 	let cssColor = document.querySelectorAll("#tabela tr");
			for (let i = 1; i < cssColor.length; i++){
				if((i = i) %2){
					cssColor[i].setAttribute("class", "cor");
				}	
			}
		//*******************************************ESTILO E COR CINZA*******************************************
		let td_input = document.querySelectorAll("[data-local]");			
			td_input.forEach(td_input => {
				td_input.setAttribute("class", "cor");
			});					
};

