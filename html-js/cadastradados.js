import { dodosApi } from "../conectDB/conectJson.js";

const formulario = document.querySelector("[data-formulario]");

async function cadastrar(event) {
    event.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    try {
        await dodosApi.criaVideo(nome);
		console.log('Enviado com Sucesso!')
        //window.location.href = "../pages/envio-concluido.html";
    }catch(err) {
        alert(err);
    }
}

	formulario.addEventListener("submit", event => cadastrar(event) )

