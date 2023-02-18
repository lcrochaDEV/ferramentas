//BLOQUEIO DE PAGINAS
import { CadastroDadosForms } from '../ControllerClass/ControllerLogin.js';
import { conectJson } from '../html-js/muda_cor_oe1.js';
import { tabelaStorage } from '../html-js/localstorage.js';

//NOVO LOCALSTORGE
const loginStorage = JSON.parse(localStorage.getItem("cadastraLogin")) || [];
let nomeStorage = loginStorage.find(itens => itens.username); //LOCALSTORAGE
if(!nomeStorage){
    console.log('foi')
    let Url = window.location.href;
    let regex = /nav\/\w+/gm;
    let pegaExtensao = [... Url.match(regex)];	
    pegaExtensao.find(itens => {
        if(itens === 'nav/contatos'){
            const redirecionamento = new CadastroDadosForms();
            redirecionamento.direcionandoLogin();
        }
    })
}else{
    await conectJson();
    tabelaStorage();
}
