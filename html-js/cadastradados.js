import { dodosApi } from "../conectDB/conectJson.js";

const formulario = document.querySelector("[data-formulario]");

async function cadastrar(event) {
    event.preventDefault();
    const nome = document.querySelector("[data-nome]");
    try {
        await dodosApi.criaVideo(nome.value);
		console.log('Enviado com Sucesso!')
        //window.location.href = "../pages/envio-concluido.html";
        nome.value = '';
    }catch(err) {
       document.querySelector("[data-erro]").innerHTML = err;
    }
}

	formulario.addEventListener("submit", event => cadastrar(event) )

