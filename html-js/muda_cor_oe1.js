//CONEXÃO COM O ARQUIVO JSON
function conectJson(){
  //CRIAMDO TABELA
fetch('../json/dados_tecnicos.json')
  .then(function(response){ response.json()
    .then(function(data){;
      //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON
		myArea(data);
		btn(data);
      //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON  	  
    });
})
  .catch(function(err){
    console.error('Failed retrieving information', err);
  });
};
window.addEventListener("DOMContentLoaded", conectJson);

//ACÃO DE LISTA AS ÁREAS PRÉ-DEFINIDAS
function myArea(data){
	let novaLista = data[0].dados_tecnicos;
	let areaAt = novaLista.map(p => p.area);
	let novoArr = [... new Set(areaAt)];

	//BOTÕES DAS AREAS NO INICIO DA PÁGINA
	let btn = document.getElementById("btn");
	novoArr.forEach((arrarea, i) => {
		btn.innerHTML += `<a href="#" class="btn${arrarea}" data-cfs="${arrarea}">Lista de Técnicos ${arrarea}</a>`;
	});
	//DEFINI O CF QUE VAI SER DESTAQUE NA INICIALIZAÇÃO DA PÁGINA
	let predefineArea = novoArr.find(itens => itens === 'GR');
	let h1 = document.getElementById("h1").innerHTML = `Lista de Técnicos ${predefineArea}`;
	//FILTRA TODO O CF QUE JÁ ESTÁ DEFINIDO EM PREDEFINEAREA
	let listaAreas =  novaLista.filter(function(e) {		
		return e.area == predefineArea;			
	});
	isertTable(listaAreas);
};
//ACÃO DO BOTÕES DE ÁREAS NO TOPO DA PAGINA
function btn(data){
	//LISTA APENAS AS AREAS EXISTENTES
	var novaLista = data[0].dados_tecnicos
	var areaAt = novaLista.map(p => p.area);
	var novoArr = [... new Set(areaAt)];	
	
	//EVENTO CLICK BTN
	var btn = document.getElementById("btn"); //BUSCA OS BOTÕES
		btn.addEventListener("click", function(event){
			let dataCfs = event.target.dataset.cfs;
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
			let dataAllOff = document.querySelector('[data-alloff]');	
				dataAllOff.innerHTML = `ALL OFF <input type="checkbox" id="${passDados[0].area}" >`;				
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
		var cssColor = document.querySelectorAll("#tabela tr");
			for (var i = 1; i < cssColor.length; i++){
				if((cssColor[i] = i) %2){
					cssColor[i].setAttribute("class", "cor");
				}	
			};
		//*******************************************ESTILO E COR CINZA*******************************************
		var td_input = document.querySelectorAll("[data-local]");			
			td_input.forEach(td_input => {
				td_input.setAttribute("class", "cor");
			});					
};

//function onoffExec(){
//***EVENTO CLICK CHECK***//
/*let displayAll = document.querySelector("#tabela");
let input_alloff = document.querySelector("[data-alloff]");
	displayAll.addEventListener("click", function(event){
		let clickCheck = event.path;
			if(clickCheck[0].checked === false && clickCheck[1].id !== ''){
				clickCheck[1].style.backgroundColor = "#FF0000";
				clickCheck[1].childNodes[1].style.color = "#FFFFFF";
				clickCheck[1].childNodes[1].innerText = "OFF: ";
				clickCheck[1].childNodes[1].style.fontWeight = "bold";					
			}else if(clickCheck[0].checked === true){
				clickCheck[1].childNodes[1].innerText = "ON: ";
				clickCheck[1].style.backgroundColor = "#00FF00";
				clickCheck[1].childNodes[1].style.color = "#FFFFFF";
				clickCheck[1].childNodes[1].style.fontWeight = "bold";
			}
	})	
};
window.addEventListener("load", onoffExec);*/
//function alloffExec(){
//***ALLOFF EVENTO***//
/*let list_check = document.querySelectorAll("#td_check");
let input_alloff = document.querySelector("[data-alloff]");
	input_alloff.addEventListener("click", function(event){
		list_check.forEach((list_check, i) => {
			list_check.firstElementChild.innerText = "OFF: ";
			list_check.style.backgroundColor = "#FF0000";
			list_check.style.color = "#FFFFFF";
			list_check.children[1].checked = false;
			list_check.style.fontWeight = "bold";
		})
	})
};
window.addEventListener("load", alloffExec);*/
