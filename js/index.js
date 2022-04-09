function enviar() {
  //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
  var nomeValue = document.querySelector(".input-nome").value;
  var sobrenomeValue = document.querySelector(".input-sobrenome").value;
  var emailValue = document.querySelector(".input-email").value;
  var telValue = document.querySelector(".input-tel").value;
  var msgValue = document.querySelector(".input-mensagem").value;

  var formValue = {
    name: nomeValue,
    sobrenome: sobrenomeValue,
    email: emailValue,
    telefone: telValue,
    mensagem: msgValue,
  };
  console.log(formValue);
}
