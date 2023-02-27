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
    }
    window.addEventListener("load", eventClckMenu);

async function comandos(){
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
async function contatos(){
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
async function informe(){
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

function close_all_aba() {
    let aba_build = document.querySelector('#aba_thow_to_reg');
    let aba_thow_to_reg = document.querySelector('#aba_thow_to_reg');
    let aba_info = document.querySelector('#aba_thow_to_reg');
    let cloeseList = document.querySelector('[data-close_all_aba]');
        cloeseList.addEventListener("click", (event) => {

            if(cloeseList.dataset.close_all_aba === aba_thow_to_reg.id ){            
                    aba_thow_to_reg.children[0].remove();
                    aba_thow_to_reg.style.transition = 'all 1.0s ease-out';
                    document.getElementById('aba-menu').style.width = '0';
            }
        });
}
window.addEventListener("load", close_all_aba);