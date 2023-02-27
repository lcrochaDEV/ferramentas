//CLASS
export class BlackLight {
	constructor (id, interruptor){
		this.id = id;
		this.interruptor = interruptor;
	}
	cadastrarLocalSorage(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}
}