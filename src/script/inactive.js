document.addEventListener('DOMContentLoaded', ()=> {
  let title = document.getElementById('sections');
  let hoverMe = document.getElementById('hoverAboveMessage');

  title.addEventListener('mouseover', ResetHoverTimer);
  title.addEventListener('mouseout', StartHoverTimer);

  let hoverTimer;
  
  function doSomethingAfterDelay() {
    hoverMe.style.opacity = 1;
    hoverMe.style.zIndex = 1;
  }
  
  function StartHoverTimer() {
    hoverTimer = setTimeout(doSomethingAfterDelay, 10000);
  }
  
  function ResetHoverTimer() {
    clearTimeout(hoverTimer);
    hoverMe.style.opacity = 0;
    hoverMe.style.zIndex = -10;
  }
  

  StartHoverTimer();
});
