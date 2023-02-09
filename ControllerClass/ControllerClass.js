//CLASS
export class CadastroDadosForms {
	constructor (id, username, valor){
		this.id = id;
		this.username = username;
		this.valor = valor;
	}
	cadastrarLocalSorage(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}
}