//METODO GET | RECUPERANDO DADOS DE BD
async function conectJson(){
    try{
		const conectJData = await fetch('../json/dados_tecnicos.json');
		const dados_tecnicos = await dados_tecnicos.json();
		return dados_tecnicos;
		
    }catch{
        console.log('Erro de conexão!')
    }
}

const origemServer = window.location.origin;
async function criaVideo(nome) {
    const conexao = await fetch(`../json/dados_tecnicos.json`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    const dados_tecnicos = conexao.json();

    return dados_tecnicos;
}

//import { dodosApi } from "../conectDB/conectJson.js";

//console.log(dodosApi);

export const dodosApi = {
	conectJson,
	criaVideo
}