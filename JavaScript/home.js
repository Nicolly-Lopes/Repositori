//---------------------------------verifica se o usuário aceitou ou rejeitou os cookies----------------------------------------------------------



// Verificar se os cookies já foram aceitos ou rejeitados ao carregar a página
document.addEventListener('DOMContentLoaded', checkCookieAccepted);

// Event listener para o botão de aceitar os cookies
var acceptButton = document.getElementById('cookie-accept');
if (acceptButton) {
  acceptButton.addEventListener('click', acceptCookies);
}

// Event listener para o botão de rejeitar os cookies
var rejectButton = document.getElementById('cookie-reject');
if (rejectButton) {
  rejectButton.addEventListener('click', rejectCookies);
}



// Função para verificar se o usuário já aceitou ou rejeitou os cookies
function checkCookieAccepted() {
  if (localStorage.getItem('cookieAccepted')) {
    // Os cookies já foram aceitos, não exibir a mensagem
    hideCookieMessage();
  } else {
    // Os cookies não foram aceitos, exibir a mensagem
    showCookieMessage();
  }
}

// Função para ocultar a mensagem de cookies
function hideCookieMessage() {
  var cookieMessage = document.getElementById('cookie-message');
  if (cookieMessage) {
    cookieMessage.style.display = 'none';
  }
}

// Função para exibir a mensagem de cookies
function showCookieMessage() {
  var cookieMessage = document.getElementById('cookie-message');
  if (cookieMessage) {
    cookieMessage.style.display = 'block';
  }
}

// Função para aceitar os cookies
function acceptCookies() {
  localStorage.setItem('cookieAccepted', true);
  hideCookieMessage();
}

// Função para rejeitar os cookies
function rejectCookies() {
  localStorage.removeItem('cookieAccepted');
  hideCookieMessage();
}



