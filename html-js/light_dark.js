import { BlackLight } from "../ControllerClass/ClassBlackLight.js";

//NOVO LOCALSTORGE
const blackLightInter = JSON.parse(localStorage.getItem("interruptor")) || [];

//CADASTRO CF EM BANCO DE DADOS
function light_darkk(){
let switch_shadow = document.getElementById('switch_shadow');
	switch_shadow.addEventListener("click", (event) => {
		let zero = event.target.checked;
		let bit = zero === false ? zero = '0' : zero = '1'; 
		//CADASTRO DE ID
		let id = blackLightInter.findIndex(id => {
			if(id.id === blackLightInter.length -1)
				return blackLightInter.length;
		}) +1;	
		//CRIA OBEJTO EM CLASS
		const ligarInetrruptor = new BlackLight(id, bit)
		blackLightInter.pop();
        //COLOCA MAIS UM INTEM NA LISTA DE ARRAY
		blackLightInter.push(ligarInetrruptor);
		//CADASTRA ITEM NO LOCALSTORGE
		ligarInetrruptor.cadastrarLocalSorage("interruptor", blackLightInter)
		console.log(`Botão Acionado!`);

		let acionaCor = blackLightInter.find(itens => itens);
			acionaCor.interruptor !== '0' ? low() : hight();
	});
}
window.addEventListener("load", light_darkk);

async function recuperadados(){	
	let switch_shadow = document.getElementById('switch_shadow');
	let recuperaDados = await blackLightInter.find(itens => itens);
		if(recuperaDados.interruptor !== '0'){
			low()
			switch_shadow.checked = true;
		}else{
			hight();
			switch_shadow.checked = false;
		}
}
window.addEventListener("load", recuperadados);

let backgroundColor = document.body;
let conteudo = document.getElementById("conteudo");
var light_list = document.getElementById("list_tec");
function low(){
	backgroundColor.style.backgroundColor = "#000";
	document.getElementById("sol").style.color = "#FFF";
	document.getElementById("lua").style.color = "#FFF";
	conteudo.style.color = "#FFF";
	if(light_list !== null){
		light_list.style.color = "#FFF"
	}
	var tr = document.querySelectorAll("tr");
		tr.forEach((tr, i) => {
			tr.style.borderCollapse = "collapse";
			tr.style.borderColor = "#FFF";
	});
	var th = document.querySelectorAll("th");
		th.forEach((th, i) => {
			th.style.backgroundColor = "#FFF";
			th.style.color = "#000";
		});
	var td = document.querySelectorAll("td");
		td.forEach((td, i) => {
			td.style.borderColor = "#FFF";
		});
}

function hight(){
	backgroundColor.style.backgroundColor = "#f4f4f4";
	document.getElementById("sol").style.color = "#000";
	document.getElementById("lua").style.color = "#000";
	conteudo.style.color = "#3b5998";
	var light_list = document.getElementById("list_tec");
	if(light_list == null){
		
	}else{
		light_list.style.color = "#3b5998"
	}
	var tr = document.querySelectorAll("tr");
		tr.forEach((tr, i) => {
			tr.style.borderCollapse = "collapse";
			tr.style.borderColor = "#000";
		});
	var th = document.querySelectorAll("th");
		th.forEach((th, i) => {
			th.style.backgroundColor = "#000";
			th.style.color = "#FFF";
		});
	var td = document.querySelectorAll("td");
		td.forEach((td, i) => {
			td.style.borderColor = "#000";
		});
}
