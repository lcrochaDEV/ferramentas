//CONEXÃO COM O ARQUIVO JSON
function conectJsonData() {
	//CRIAMDO TABELA
	fetch('../json/dados_tecnicos.json')
	  .then(function(response){ response.json()
		.then(function(data){
		  //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON   
		  listaDados(data);
		  dadosTextbox(data);
		  //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON
		});
	})
	  .catch(function(err){
		console.error('Failed retrieving information', err);
	  });
	};
	window.addEventListener("DOMContentLoaded", function(){conectJsonData()})
	
	function listaDados(data) {
		var novaLista = data[0].dados_tecnicos;
		var nome = novaLista.map(p => p.nome);
		var novoArr = [... new Set(nome)].sort(); //REFERENTE AO IMPUT NOME DO TÉCNICO  	
		//novoArr.reverse(); // INVERTE LISTA DE ARRAY
		novoArr.forEach((novoArr, i) => {
			//listNome(novoArr.toUpperCase(), i);//COLOCA TEXTO EM CAIXA AUTA
			listNome(novoArr.toUpperCase());//COLOCA TEXTO EM CAIXA AUTA
			//console.log(novoArr);	
		})
	};
	//preenche o options com nomes
	function listNome(nome) {
		var nome_tec_C = document.getElementById("nome_tec_C");
			NumeOpt = document.createElement("option");
			NumeOpt.value = nome;
			NumeOpt.text = nome;
			nome_tec_C.add(NumeOpt, nome_tec_C.options[NumeOpt]);		
	};
	function tRAtativa(nomeRgCpf) {
		var optionNome = document.getElementById("nome_tec_C");	
		optionNome.addEventListener("change", function(){
			var c = (optionNome.selectedIndex) -1;		
			lista_nomes(nomeRgCpf[c])
		})
	}
	//LISTA OCULTA
	function dadosTextbox(data) {
		var novaLista = data[0].dados_tecnicos;
		var nomeRgMat = novaLista.map(p => `${p.nome} ${p.rg} ${p.mat}`);
		var nomeRgCpf = [... new Set(nomeRgMat)].sort();
			
		tRAtativa(nomeRgCpf);
	};
	//preenche o options com nomes oculto
	function lista_nomes(op) {	
		var list_ocult = document.getElementById("list_ocult");
			NumeOcult = document.createElement("option");
			NumeOcult.value = op;
			NumeOcult.text = op;
			list_ocult.add(NumeOcult, list_ocult.options[NumeOcult]);
			//console.log(op);
			list_ocult.remove(op);
			list_ocult.style.display = 'none';
			list_ocult.style.visibility = 'Hidden';	
	};
	//LISTA OCULTA
	function horaPTBR() {
		var displayHours = document.getElementById('displayHours');
		var currentTime = new Date();
		var previsao_C = document.getElementById("previsao_C").value;
		var decalage_minute =+ previsao_C;
	
		currentTime.setHours(currentTime.getHours(), currentTime.getMinutes() + decalage_minute)
		HoraName = new Array ("00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", 
									"11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
									"21", "22", "23",)
		MinutosName = new Array ("00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", 
									   "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
									   "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", 
									   "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", 
									   "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", 
									   "51", "52", "53", "54", "55", "56", "57", "58", "59",)
		  
		var displayHours = `${HoraName[currentTime.getHours()]}:${MinutosName[currentTime.getMinutes()]}H`;
		
		var optionNome = document.getElementById("nome_tec_C").options.selectedIndex;
		if(optionNome == 0){
			textboxaDados(displayHours, "");
		}else if(optionNome >= 1){
			var nomeDados = document.getElementById("list_ocult").value;
			textboxaDados(displayHours, nomeDados);
		}	
	};
	var myVar_C = setInterval(() => {horaPTBR();}, 1000);
	
	function textboxaDados(horaPTBR, nomeDados){
		var acionamentoTxt = document.getElementById("acionamentoTxt");
		var atualizacao_C = document.getElementById("atualizacao_C");
		var estacao_C = document.getElementById("estacao_C").selected;
		var cliente_C = document.getElementById("cliente_C").selected;
		
		if(estacao_C == false && cliente_C == false){
			estacao_C = "";
			cliente_C = "";
		}else if(estacao_C == true){
			estacao_C = "X";
			cliente_C = "";
		}else if(cliente_C == true){
			estacao_C = "";
			cliente_C = "X";
		}
		//CALCULO DE HORAS
		if(atualizacao_C.selectedIndex == 0){
			acionamentoTxt.innerHTML = `ATUALIZAÇÃO: ${atualizacao_C.value}\nPREVISÃO DE CHEGADA: ${horaPTBR}\nESTAÇÃO (${estacao_C}) CLIENTE (${cliente_C})\nDADOS TÉCNICOS:\n${nomeDados} \nOBSERVAÇÕES:`;
		}else if(atualizacao_C.selectedIndex >= 1){
			acionamentoTxt.innerHTML = `${atualizacao_C.value}\nPREVISÃO DE CHEGADA: ${horaPTBR}\nESTAÇÃO (${estacao_C}) CLIENTE (${cliente_C})\nDADOS TÉCNICOS:\n${nomeDados} \nOBSERVAÇÕES:`;
		}
	};
	function novaHora() { // SÓ APARECE NO CONSOLE.LOG
		const options = {
			timeZone: 'America/Sao_Paulo',
			hour: 'numeric',
			minute: 'numeric'
		};
		const date = new Intl.DateTimeFormat([], options);
		//console.log(`${date.format(new Date())}H`);
		var testes = document.getElementById("nome_tec_C").options.selectedIndex;
		//console.log(testes);
	};
	var myNovaHora_C = setInterval(() => {novaHora();}, 1000)
	//---------------------NOVO SCRIPT------------------------//
	
	function limpar_C() {
		var nome_tec_C = document.getElementById("nome_tec_C").value = "";
		var atualizacao_C = document.getElementById("atualizacao_C").value = "";
		var name_dados_C = document.getElementById("previsao_C").value = "";
		var est_clien_C = document.getElementById("est_clien_C").value = "";
	};
	var id= null;
	function refresh_C() {
	if(!id) {
		//id = setInterval(function(){ myTime_C() }, 0);  
		id = setInterval(() => {horaPTBR();}, 1000);
		return limpar_C();
		}
	};
	function copiar_C() {	
		clearInterval(myVar_C);
		document.getElementById("acionamentoTxt").select();
		document.execCommand("copy");
		clearInterval(id);
		id = null;
	};
	//<!------------------------------------------------ACIONAMENTO v.06.2018----------------------------------------->
	function ccna() {
		var fiber = document.getElementsByClassName("fiber")[0]; //link fiber
		var ccna = document.getElementsByClassName("ccna")[0];	// link ccna
		
		var fiberDiv = document.getElementById("fiberDiv").style.display = 'none';
		var ccnaDiv = document.getElementById("ccnaDiv").style.display = 'none';
		
		fiber.addEventListener("click", function(){
			if (fiberDiv == "none"){
			fiberDiv = document.getElementById("fiberDiv").style.display = 'block';
			ccnaDiv = document.getElementById("ccnaDiv").style.display = 'none';
			}else {
				fiberDiv = document.getElementById("fiberDiv").style.display = 'none';
			}
		})
		ccna.addEventListener("click", function(){
			if (ccnaDiv == "none"){
				fiberDiv = document.getElementById("fiberDiv").style.display = 'none';
				ccnaDiv = document.getElementById("ccnaDiv").style.display = 'block';
			}else {
				ccnaDiv = document.getElementById("ccnaDiv").style.display = 'none';
			}
		})
	}
	window.addEventListener("load", function(){ccna()})
	
	function Jos(){
	fetch('../json/dados_tecnicos.json')
	  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
		.then(data => console.log(data));
	};
	//http://10.45.0.1/images/p_bottom_port_up.gif
	function monitorSW() {
		var serverip = "http://10.45.0.1/images/p_bottom_port_up.gif"
		if (serverip != "") {
		var ImageObject = new Image();
				ImageObject.src = serverip; 
			if (ImageObject.height > 0)
			   {
				console.log("Sucesso para GPONZTES01");
			}else{
				console.log("Fail");
			}
		}
		else {
			console.log("Server IP should not be empty");
		}
	}
	//var http = setInterval(() => {monitorSW();}, 1000);