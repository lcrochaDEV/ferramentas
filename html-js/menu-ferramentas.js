import { ConectJson } from '../ControllerClass/ConectaJson.js'
import { conectaApi } from './muda_cor_oe1.js';

function open_sidebar(){
let abritAba = document.querySelector('[data-normal_sidebar]');
    abritAba.style.width = "50px";
    abritAba.style.transition = 'all 1.0s ease-out';
        abritAba.addEventListener('mouseover', () => {
        abritAba.style.width = "100px";
        abritAba.style.transition = 'all 1.0s ease-out';
    })
        abritAba.addEventListener('mouseout', () => {
        abritAba.style.width = "50px";
        abritAba.style.transition = 'all 1.0s ease-out';
    })

/*let Url = window.location.href;
let regex = /url=nav\/\w+/gm;
let pegaExtensao = [... Url.match(regex)];
console.log(pegaExtensao)*/
}
  window.addEventListener("load", open_sidebar);
  //EVENTO CLICK
function eventClckMenu (){
    let build = document.querySelector('[data-opem_build]');
        build.addEventListener("click", (event) => {
            comandos();	
        });
    let how_to_reg = document.querySelector('[data-opem_how_to_reg]');
        how_to_reg.addEventListener("click", async function(event) {
            await contatos()
            conectaApi()
        });
    let info = document.querySelector('[data-opem_info]');
        info.addEventListener("click", function(event) {
         informe();
        });

    //DESATIVA LINKS
    const URL = window.location.search;
    if(URL.indexOf("url=nav/comandos") != -1) {
        build.style.backgroundColor = "#7D7D7D";
        build.style.color = '#d33a0b'
        build.style.filter = "grayscale(50%)";
        build.style.pointerEvents = 'none';
    }else if(URL.indexOf("url=nav/contatos") != -1) {
        how_to_reg.style.backgroundColor = "#7D7D7D";
        how_to_reg.style.color = '#d33a0b'
        how_to_reg.style.filter = "grayscale(50%)";
        how_to_reg.style.pointerEvents = 'none';
    }
}
window.addEventListener("load", eventClckMenu);

export async function comandos(){
    let conectJsonResult = new ConectJson('../nav/comandos.html')
    let comandos = await conectJsonResult.conectJsonUrlHtml();
        document.getElementById("aba_build").innerHTML += comandos;
        opem_build();
}
function opem_build() {
    if(URL.indexOf("url=nav/comandos") == -1) {
        document.getElementById('aba-menu').style.width = '100%';
        document.getElementById("aba_build").style.display = 'block';	
        document.getElementById("aba_thow_to_reg").style.display = 'none';	
        document.getElementById("aba_info").style.display = 'none';
        //TROCA DATA ATRUBUT
        document.querySelector('[data-close_all_aba]').dataset.close_all_aba = 'aba_build';
    }
}
export async function contatos(){
    let conectJsonResult = new ConectJson('../nav/contatos.html')
    let contato = await conectJsonResult.conectJsonUrlHtml();
        document.getElementById("aba_thow_to_reg").innerHTML += contato;
        opem_how_to_reg();
}
function opem_how_to_reg() {
        const URL = window.location.search;
        if(URL.indexOf("url=nav/contatos") === -1) {
            document.getElementById('aba-menu').style.width = '100%';
            document.getElementById("aba_build").style.display = 'none';
            document.getElementById("aba_thow_to_reg").style.display = 'block';
            document.getElementById("aba_info").style.display = 'none';
            //TROCA DATA ATRUBUT
            document.querySelector('[data-close_all_aba]').dataset.close_all_aba = 'aba_thow_to_reg';
    }
}
export async function informe(){
    let conectJsonResult = new ConectJson('../nav/SenhasGerenciasTX.html')
    let info = await conectJsonResult.conectJsonUrlHtml();
        document.getElementById("aba_info").innerHTML += info;
        opem_info();
}
function opem_info() {
    const URL = window.location.search;
    if(URL.indexOf("url=nav/SenhasGerenciasTX") === -1) {
        document.getElementById('aba-menu').style.width = '100%';
        document.getElementById("aba_thow_to_reg").style.display = 'none';
        document.getElementById("aba_build").style.display = 'none';
        document.getElementById("aba_info").style.display = 'block';
         //TROCA DATA ATRUBUT
         document.querySelector('[data-close_all_aba]').dataset.close_all_aba = 'aba_info';
    }
};

export function close_all_aba() {
    let aba_thow_to_reg = document.querySelector('#aba_thow_to_reg');
    let closeList = document.querySelector('[data-close_all_aba]');
        closeList.addEventListener("click", (event) => {       
            if(closeList.dataset.close_all_aba === aba_thow_to_reg.id ){ 
                document.getElementById('aba-menu').style.width = '0';           
                aba_thow_to_reg.style.transition = 'all 1.0s ease-out';
                for (let child of aba_thow_to_reg.children){
                    child.remove();
                }
            }
        });
     return closeList.click();
}
window.addEventListener("load", close_all_aba);


//BARRA LATERAL DIV MÃE
function normal_sidebar() {
    //Tempo de abetura e fechamento do menu 
    document.getElementById('aba').style.width = "50px";	
    document.getElementById('tab').style.display = "none";	
        //Parando menu quando estive em pagina correspondente.
        const URL = window.location.search;
        if(URL.indexOf("url=nav/comandos") != -1) {
            document.getElementById("build").style.backgroundColor = "#7D7D7D";
            document.getElementById("build").style.filter = "grayscale(50%)";
        }else if(URL.indexOf("url=nav/contatos") != -1) {
            document.getElementById("how_to_reg").style.backgroundColor = "#7D7D7D";
            document.getElementById("how_to_reg").style.filter = "grayscale(50%)";
    }
  }
  //window.addEventListener("load", normal_sidebar);