function showAlert() {
  const alert = document.getElementById('alert');
  alert.classList.remove('hidden');
  setTimeout(() => {
    alert.classList.remove('opacity-0');
    if (document.getElementById('content'))
      document.getElementById('content').style.filter = 'blur(5px)';
    if (document.getElementById('header'))
      document.getElementById('header').style.filter = 'blur(5px)';
    if (document.getElementById('footer'))
      document.getElementById('footer').style.filter = 'blur(5px)';
  }, 1);
}

function closeAlert() {
  const alert = document.getElementById('alert');
  alert.classList.add('opacity-0');
  if (document.getElementById('content'))
    document.getElementById('content').style.filter = 'blur(0px)';
  if (document.getElementById('header'))
    document.getElementById('header').style.filter = 'blur(0px)';
  if (document.getElementById('footer'))
    document.getElementById('footer').style.filter = 'blur(0px)';
  setTimeout(() => {
    alert.classList.add('hidden');
  }, 1);
}

window.onkeyup = function (e) {
  if (e.keyCode === 27) {
    closeAlert();
  }
}