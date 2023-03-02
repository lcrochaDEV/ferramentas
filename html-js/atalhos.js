import { conectaApi } from './muda_cor_oe1.js';
import { 
	comandos, 
	contatos, 
	informe, 
	close_all_aba 
} from "./menu-ferramentas.js";


function press() {
	document.body.addEventListener('keypress', async (event) => {
			let key = event.which || event.keyCode;
			let shift = event.shiftKey;
			if(shift && key === 76 || key === 108){ //SHIFT + L ou 
				comandos();
			}
			if(shift && key === 67 || key === 99){ //SHIFT + C ou c
				await contatos();
					conectaApi();
			}
			if(shift && key === 77 || key === 109){ //SHIFT + M ou m
				document.getElementById('side-menu').style.width = '250px';
				document.getElementById('link_img').style.width = '250px'; 
			}		
	})
	document.body.addEventListener('keydown', (event) => {
		let key = event.which || event.keyCode;
		if(key === 27) /*ESC*/{
			document.getElementById('aba-menu').style.width = '0';
			document.getElementById('side-menu').style.width = '0';
			close_all_aba();
		}
	})
  }

window.addEventListener("load", press); 