document.addEventListener("DOMContentLoaded", function () {

  let loginButton = document.getElementById('logInButton');

  let userID = document.getElementById('userID');
  let password = document.getElementById('password');

  function CheckForData() {
    loginButton.addEventListener('click', () => {
      if (userID.value == '' || password.value == '') {
        setCookie('alertType', 'warning', 0.000278);
      }
      else {
        setCookie('alertType', 'success', 0.000278);
      }
      AlertCreate();
    })
  }

  CheckForData();

  function AlertCreate() {
    let alertType = getCookie('alertType');

    if (alertType == 'warning') WarningAlert();
    else if (alertType == 'success') SuccessAlert();
    else if (alertType == 'danger') DangerAlert();
  }

  function AlertClose() {
    deleteCookie(getCookie('alertType'));
    var alertDiv = document.getElementById("alert");
    if (alertDiv) {
      alertDiv.style.opacity = 0;
      setTimeout(() => {
        alertDiv.style.display = "none";
      }, 100);
    }
  }
  

  function SuccessAlert() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert success";
    alertDiv.id = "alert";

    var alertTitleDiv = document.createElement("div");
    alertTitleDiv.className = "alert-title";

    var strongElement = document.createElement("strong");
    strongElement.textContent = "Povedlo se!";
    alertTitleDiv.appendChild(strongElement);

    var messageSpan = document.createElement("span");
    messageSpan.textContent = " Jsi přihlášen!";
    alertTitleDiv.appendChild(messageSpan);

    var alertCloseImg = document.createElement("img");
    alertCloseImg.className = "alert-close";
    alertCloseImg.src = "src/icons/close.png";
    alertCloseImg.id = "alertClose";
    alertCloseImg.onclick = AlertClose;


    alertDiv.appendChild(alertTitleDiv);
    alertDiv.appendChild(alertCloseImg);

    var firstElementInBody = document.body.firstChild;

    document.body.insertBefore(alertDiv, firstElementInBody);
  }
  function DangerAlert() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert danger";
    alertDiv.id = "alert";

    var alertTitleDiv = document.createElement("div");
    alertTitleDiv.className = "alert-title";

    var strongElement = document.createElement("strong");
    strongElement.textContent = "Ups!";
    alertTitleDiv.appendChild(strongElement);

    var messageSpan = document.createElement("span");
    messageSpan.textContent = " ID nebo heslo naní správné!";
    alertTitleDiv.appendChild(messageSpan);

    var alertCloseImg = document.createElement("img");
    alertCloseImg.className = "alert-close";
    alertCloseImg.src = "src/icons/close.png";
    alertCloseImg.id = "alertClose";
    alertCloseImg.onclick = AlertClose;


    alertDiv.appendChild(alertTitleDiv);
    alertDiv.appendChild(alertCloseImg);

    var firstElementInBody = document.body.firstChild;

    document.body.insertBefore(alertDiv, firstElementInBody);
  }
  function WarningAlert() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert warning";
    alertDiv.id = "alert";

    var alertTitleDiv = document.createElement("div");
    alertTitleDiv.className = "alert-title";

    var strongElement = document.createElement("strong");
    strongElement.textContent = "Nepovedlo se!";
    alertTitleDiv.appendChild(strongElement);

    var messageSpan = document.createElement("span");
    messageSpan.textContent = " Musíš zadat heslo i ID!";
    alertTitleDiv.appendChild(messageSpan);

    var alertCloseImg = document.createElement("img");
    alertCloseImg.className = "alert-close";
    alertCloseImg.src = "src/icons/close.png";
    alertCloseImg.id = "alertClose";
    alertCloseImg.onclick = AlertClose;


    alertDiv.appendChild(alertTitleDiv);
    alertDiv.appendChild(alertCloseImg);

    var firstElementInBody = document.body.firstChild;

    document.body.insertBefore(alertDiv, firstElementInBody);
  }

  document.addEventListener('load', AlertCreate());

});
