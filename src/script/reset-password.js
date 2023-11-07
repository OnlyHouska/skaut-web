document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener('load', AlertCreate());

  let submitButton = document.getElementById('submitButton');
  let emailField = document.getElementById('emailField');

  function CheckForData() {
    submitButton.addEventListener('click', () => {
      if (emailField.value == '') {
        setCookie('alertType', 'forgot-pass-warning', 0.000278);
      }
      else {
        if (ValidateEmail(emailField.value)) {
          setCookie('alertType', 'forgot-pass-success', 0.000278);
        }
        else {
          setCookie('alertType', 'forgot-pass-warning', 0.000278);
        }
      }
      AlertCreate();
    })
  }

  CheckForData();

  function AlertCreate() {
    let alertType = getCookie('alertType');

    if (alertType == 'forgot-pass-warning') WarningAlert();
    else if (alertType == 'forgot-pass-success') SuccessAlert();
    else if (alertType == 'forgot-pass-danger') DangerAlert();
  }

  function AlertClose() {
    deleteCookie('alertType');
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
    messageSpan.textContent = " Zkontroluj svojí schránku!";
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
    messageSpan.textContent = " Musíš zadat platný E-mail!";
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


  function ValidateEmail(input) {
    var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (input.match(regex)) {
      return true;
    } else {
      return false;
    }
  }
});
