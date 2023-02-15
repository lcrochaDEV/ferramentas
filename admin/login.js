let objLinkNomeRede = [
	{
		link : `http://10.10.130.161:8080/lista/usernameTmp.json`
	},
	{
		link : `https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/lista/usernameTmp.json`
	}
];

//CONEXÃO COM O ARQUIVO JSON
async function usernameTmp(url) {
	try {
		const conexao = await fetch(url)
			const openConexao = await conexao.json();
			return verificarUsers(openConexao);       
	}catch (error){
		console.log('Falha no link!')
	}
}
window.addEventListener ('load', async function(){
	await usernameTmp(objLinkNomeRede.find(itens => itens).link);
});

//BUSCA DADOS EM LOCALSTORGE
const loginStorage = JSON.parse(localStorage.getItem('login')) || [];
function verificarUsers(nomeVerificado){
    console.log(nomeVerificado.find(itens => itens).userNamerede.filter(itens => itens.nome === 'D.RITA'));
    //let filtraNomes = listaStorage.find(itens => itens.valor === 'RAL-52835/2023').valor
    if(filtraNomes === true){
    //CRIA OBEJTO EM CLASS
		const loginSys = new CadastroDadosForms(id, login.value, senha.value);
    //CADASTRA ITEM NO LOCALSTORGE
        loginSys.cadastrarLocalSorage('cadastraLogin', loginStorage)
        console.log('Acesso Liberado!')
    }else{
        //window.location.href = '';
        console.log('Acesso Bloqueado!')
    }
};
