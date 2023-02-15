async function conectJsonMenuTop() {
	try {
		const conexao = await fetch('http://10.10.65.50:8080/json/linkmenu.json')
		const openConexao = await conexao.json();
		await buscaLinkMenu(openConexao);
		//return openConexao;
	}catch (error){
		console.log('Falha no link!')
	}
}
window.addEventListener('load', conectJsonMenuTop)

function buscaLinkMenu(menu){
	let dataMenu = document.querySelector('[data-menu]');
	menu.linksRapidos.find(menu => {				
		dataMenu.innerHTML += `<li><a href="${menu.linkUrl}" title="${menu.title}" target="_blank">${menu.nome}</a></li>`;
	})
	
	let dataSir = document.querySelector('[data-sir]');
	menu.sir.find(sir => {				
		dataSir.innerHTML += `<li><a href="${sir.linkUrl}" title="${sir.title}" target="_blank">${sir.nome}</a></li>`;
	})
	let dataSystem = document.querySelector('[data-system]');
	menu.sistemasEmbratel[0].alcatel.find(system => {				
		dataSystem.innerHTML += `<li><a href="${system.linkUrl}" title="${system.title}" target="_blank">${system.nome}</a></li>`;
	})
	let ferramentas = document.querySelector('[data-ferramentas]');
	menu.sistemasEmbratel[0].ferramentas.find(ferram => {				
		ferramentas.innerHTML += `<li><a href="${ferram.linkUrl}" title="${ferram.title}" target="_blank">${ferram.nome}</a></li>`;
	})
	let systemNet = document.querySelector('[data-systemNet]');
	menu.sistemasNet.find(sysnet => {				
		systemNet.innerHTML += `<li><a href="${sysnet.linkUrl}" title="${sysnet.title}" target="_blank">${sysnet.nome}</a></li>`;
	})
	let sitesClaro = document.querySelector('[data-sitesClaro]');
	menu.sistemasClaro.find(sysclaro => {				
		sitesClaro.innerHTML += `<li><a href="${sysclaro.linkUrl}" title="${sysclaro.title}" target="_blank">${sysclaro.nome}</a></li>`;
	})
	let datacenters = document.querySelector('[data-datacenters]');
	menu.dataCenters.find(datacenter => {				
		datacenters.innerHTML += `<li><a href="${datacenter.linkUrl}" title="${datacenter.title}" target="_blank">${datacenter.nome}</a></li>`;
	})
	
}