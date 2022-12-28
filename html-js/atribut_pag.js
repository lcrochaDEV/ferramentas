//FIVEICON
document.querySelector('link[rel="icon"]').href = "https://seeklogo.com/images/C/Claro-logo-C82D96482A-seeklogo.com.png";
//https://seeklogo.com/images/C/Claro-logo-368C79794D-seeklogo.com.png

function desenvolvedor() {
	var nome =  document.open = "Lucas Rocha";
	var fone =  document.open = "+55 21 966752669";
	var email =  document.open = "lcrocha@embratel.com.br";
	var mailto =  document.open = "mailto:" + email;
	document.write("<p><strong>" + nome + "</strong> - Fone:<strong> " + fone + " </strong> - E-mail: <a href=" + mailto + " ><strong>" + email + " </a></strong> <br />");

}

function copy() {
 	now = new Date;
	document.open();
	document.write (`&#9400; 2017 - ${now.getFullYear()} - Todos os Direitos Reservados!`);
	document.close();
}


var chamaCopy = document.getElementById("copy");
//console.log(chamaCopy);
