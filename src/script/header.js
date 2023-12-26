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
  }, 2);
}

function handleScroll() {
  let nav = document.getElementById('header')
  var scrollPosition = window.scrollY;

  var maxScroll = 50;
  if (window.innerWidth < 768) {
    if (scrollPosition > maxScroll)
      nav.style.top = '-100px';
    else
      nav.style.top = '0';
  }
}

window.addEventListener('scroll', handleScroll);