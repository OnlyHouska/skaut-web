const cm = document.getElementById('custom-cm')
let menuState = 0;
var contextMenuActive = "block";
let memberCardButton = null;
if  (document.getElementById('memberCardButton')) {
  memberCardButton = document.getElementById('memberCardButton')
};

function toggleMenuOn() {
  if (menuState !== 1) {
    menuState = 1;
    cm.classList.add(contextMenuActive);
  }
}

function toggleMenuOff() {
  if (menuState !== 0) {
    menuState = 0;
    cm.classList.remove(contextMenuActive);
  }
}

document.addEventListener("contextmenu", function (event) {
  if (memberCardButton) {

    if (checkForMember(event)) {
      memberCardButton.style.color = 'black';
      memberCardButton.classList.add('hover:bg-gray-300');
      memberCardButton.style.pointerEvents = 'all';
    }
    else {
      memberCardButton.style.color = 'rgb(156 163 175)';
      memberCardButton.classList.remove('hover:bg-gray-300');
      memberCardButton.style.pointerEvents = 'none';
    }
  }

  event.preventDefault();
  toggleMenuOn();
  positionMenu(event);
});

let clickedElement;
function checkForMember(event) {
  clickedElement = event.target;
  let isMember = false;
  while (clickedElement) {
    if (clickedElement.id === "member") {
      isMember = true;
      break;
    }
    clickedElement = clickedElement.parentNode;
  }

  return isMember;
}

function positionMenu(e) {
  let clickCoords = getPosition(e);
  let clickCoordsX = clickCoords.x;
  let clickCoordsY = clickCoords.y;

  let menuWidth = cm.offsetWidth + 4;
  let menuHeight = cm.offsetHeight + 4;

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let adjustedTop = clickCoordsY;

  if (windowWidth - clickCoordsX < menuWidth) {
    cm.style.left = windowWidth - menuWidth + "px";
  } else {
    cm.style.left = clickCoordsX + "px";
  }

  cm.style.top = adjustedTop + "px";
}

window.addEventListener('click', () => {
  toggleMenuOff();
})
window.addEventListener('scroll', () => {
  toggleMenuOff();
})
window.onkeyup = function (e) {
  if (e.keyCode === 27) {
    toggleMenuOff();
  }
}

function getPosition(e) {
  var posx = 0;
  var posy = 0;

  if (!e) var e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  };
}

function openMemberCard() {
  console.log(clickedElement.getAttribute('memberId'));
}