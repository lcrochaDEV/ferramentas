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
	direcionandoLogin(){
		console.log('Acesso Bloqueado!')
		return window.location.href = '../formularios/cadastrardados.html';
	}
}