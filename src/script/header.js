function OpenMenu() {
  let oddilButton = document.getElementById('oddil_button');
  let currentDecoration = oddilButton.style.textDecoration;
  let oddilMenu = document.getElementById('oddil_menu');
  let currentState = oddilMenu.style.display;
  let currentOpacity = oddilMenu.style.opacity;

  oddilButton.style.textDecoration = (currentDecoration === 'underline') ? 'none' : 'underline';
  oddilMenu.style.display = (currentState === 'block' ? 'none' : 'block');
  setTimeout(() => {
    oddilMenu.style.opacity = (currentOpacity === '1' ? '0' : '1');
  }, 2)
}