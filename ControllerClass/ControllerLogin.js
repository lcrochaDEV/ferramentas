//CLASS
export class CadastroDadosForms {
	constructor (id, username, indnumb){
		this.id = id;
		this.username = username;
		this.indnumb = indnumb;
	}
	cadastrarLocalSorage(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}

	tratamentoDeErros(){
		document.querySelector('[data-retorno]').innerHTML = `<img src="https://cdn.cdnlogo.com/logos/c/51/claro.svg"><p>Username ou Senha Incorretos!<p>`;
	}

	direcionandoLogin(){
		return window.location.href = '../formularios/cadastrardados.html';
	}
}