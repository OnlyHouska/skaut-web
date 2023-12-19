document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('load', AlertCreate());

  let submitButton = document.getElementById('submitButton');
  let password = document.getElementById('password');
  let repeatPassword = document.getElementById('repeatPassword');
  let userID = document.getElementById('userID')


  function CheckForData() {
    submitButton.addEventListener('click', () => {
      if (userID.value == '' || password.value == '' || repeatPassword == '') {
        setCookie('alertType', 'new-pass-warning', 0.000278);
      }
      else {
        if (password.value == repeatPassword.value) {
          setCookie('alertType', 'new-pass-success', 0.000278);
        }
        else {
          setCookie('alertType', 'new-pass-danger', 0.000278);
        }
      }
      AlertCreate();
    })
  }

  CheckForData();

  function AlertCreate() {
    let alertType = getCookie('alertType');

    if (alertType == 'new-pass-warning') WarningAlert();
    else if (alertType == 'new-pass-success') SuccessAlert();
    else if (alertType == 'new-pass-danger') DangerAlert();
  }

  function AlertClose() {
    deleteCookie('alertType');
    var alertDiv = document.getElementById('alert');
    if (alertDiv) {
      alertDiv.style.opacity = 0;
      setTimeout(() => {
        alertDiv.style.display = 'none';
      }, 100);
    }
  }
  

  function SuccessAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert success';
    alertDiv.id = 'alert';

    var alertTitleDiv = document.createElement('div');
    alertTitleDiv.className = 'alert-title';

    var strongElement = document.createElement('strong');
    strongElement.textContent = 'Povedlo se!';
    alertTitleDiv.appendChild(strongElement);

    var messageSpan = document.createElement('span');
    messageSpan.textContent = ' Heslo změněno! ';
    alertTitleDiv.appendChild(messageSpan);

    var logIn = document.createElement('a');
    logIn.textContent = 'Přihlásit se';
    logIn.href = '../../pages/account.html';
    alertTitleDiv.appendChild(logIn);
    

    var alertCloseImg = document.createElement('img');
    alertCloseImg.className = 'alert-close';
    alertCloseImg.src = '../src/icons/close.png';
    alertCloseImg.id = 'alertClose';
    alertCloseImg.onclick = AlertClose;


    alertDiv.appendChild(alertTitleDiv);
    alertDiv.appendChild(alertCloseImg);

    var firstElementInBody = document.body.firstChild;

    document.body.insertBefore(alertDiv, firstElementInBody);
  }
  function DangerAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert danger';
    alertDiv.id = 'alert';

    var alertTitleDiv = document.createElement('div');
    alertTitleDiv.className = 'alert-title';

    var strongElement = document.createElement('strong');
    strongElement.textContent = 'Ups!';
    alertTitleDiv.appendChild(strongElement);

    var messageSpan = document.createElement('span');
    messageSpan.textContent = ' Hesla se neshodují!';
    alertTitleDiv.appendChild(messageSpan);

    var alertCloseImg = document.createElement('img');
    alertCloseImg.className = 'alert-close';
    alertCloseImg.src = '../src/icons/close.png';
    alertCloseImg.id = 'alertClose';
    alertCloseImg.onclick = AlertClose;


    alertDiv.appendChild(alertTitleDiv);
    alertDiv.appendChild(alertCloseImg);

    var firstElementInBody = document.body.firstChild;

    document.body.insertBefore(alertDiv, firstElementInBody);
  }
  function WarningAlert() {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert warning';
    alertDiv.id = 'alert';

    var alertTitleDiv = document.createElement('div');
    alertTitleDiv.className = 'alert-title';

    var strongElement = document.createElement('strong');
    strongElement.textContent = 'Nepovedlo se!';
    alertTitleDiv.appendChild(strongElement);

    var messageSpan = document.createElement('span');
    messageSpan.textContent = ' Všechna pole nejsou vyplňena!';
    alertTitleDiv.appendChild(messageSpan);

    var alertCloseImg = document.createElement('img');
    alertCloseImg.className = 'alert-close';
    alertCloseImg.src = '../src/icons/close.png';
    alertCloseImg.id = 'alertClose';
    alertCloseImg.onclick = AlertClose;


    alertDiv.appendChild(alertTitleDiv);
    alertDiv.appendChild(alertCloseImg);

    var firstElementInBody = document.body.firstChild;

    document.body.insertBefore(alertDiv, firstElementInBody);
  }
});
