const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html>
<div>

/* The HTML code that will be used to create the DOM. */
        <body>
        <form method="post" action="process.php">
        <label for="username">Nome de Usuário:</label>
        <input type="text" id="username" name="username">
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password">
        <input type="submit" value="Entrar">
        </form>
        </body>
        </div>
`);
/* Adding a paragraph to the body of the HTML. */
/* Creating a jQuery object that can be used to manipulate the DOM. */
const jquery = require("jquery")(dom.window);
jquery("body").append("<p>Is a cool Website</p>");
/* Getting the body of the HTML. */
const content = dom.window.document.querySelector("body");
console.log(content.textContent);
/* Getting the login form. */
$(document).ready(function () {
  // Obtém o formulário de login
var loginForm = $("form");

  // Cria um campo de entrada oculto e o adiciona ao formulário
 /* Creating a random token and adding it to the form. */
var csrfToken = "token_aleatorio";
var csrfInput = '<input type="hidden" name="csrf" value="' + csrfToken + '">';
loginForm.append(csrfInput);

  // Adiciona um manipulador de evento para enviar o formulário quando o botão de envio é clicado
loginForm.on("submit", function () {
    // Envia a solicitação de login com o token CSRF incluído
/* Sending the username, password and csrf token to the server. */
    $.post("process.php", {
username: $("#username").val(),
password: $("#password").val(),
csrf: csrfToken,
    });
});
});