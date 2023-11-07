document.addEventListener('DOMContentLoaded', () => {
  let dropdown = document.getElementById('dropdown');
  let header = document.getElementById('header');
  let closeBtn = document.getElementById('close');
  let goBack = document.getElementById('goBack');
  let oddilMore = document.getElementById('openMore');
  let oddilMoreContainer = document.getElementById('oddilMenu');
  let aboutUs = document.getElementById('aboutUs');
  let whereAreWe = document.getElementById('whereAreWe');
  let history = document.getElementById('history');

  let links = document.getElementById('links');


  dropdown.addEventListener('click', () => {
    header.style.height = '130px';
    dropdown.style.top = '13px';

    links.style.display = 'block';
    setTimeout(() => {
      dropdown.style.top = '-45px';
      closeBtn.style.top = '13px';
      goBack.style.top = '13px';
      oddilMore.style.top = '-2px';

      links.style.opacity = '1';
    }, 100
    )
  });

  closeBtn.addEventListener('click', () => {
    header.style.height = '40px';
    dropdown.style.top = '9px';;

    closeBtn.style.top = '-60px';
    goBack.style.top = '-60px';
    oddilMore.style.top = '-60px';
    CloseOddilMore();

    links.style.opacity = 0;
    setTimeout(() => {
      links.style.display = 'none';
    }, 100
    );
  });

  goBack.addEventListener('click', () => {
    location.href = '../index.html';
  });


  let menuActive = false;
  oddilMore.addEventListener('click', () => {
    if (!menuActive) {
      OpenOddilMore();
    } else {
      CloseOddilMore();
    }
  });

  function OpenOddilMore() {
    menuActive = true;
    oddilMoreContainer.style.display = 'block';
    oddilMore.style.rotate = '45deg';
    setTimeout(() => {
      oddilMoreContainer.style.opacity = 1;
      document.addEventListener('click', outsideClickHandler);
    }, 100);

  }

  function CloseOddilMore() {
    menuActive = false;
    oddilMoreContainer.style.opacity = 0;
    oddilMore.style.rotate = '0deg';

    setTimeout(() => {
      oddilMoreContainer.style.display = 'none';
      document.removeEventListener('click', outsideClickHandler);
    }, 100);

  }

  function outsideClickHandler(event) {
    if (!event.target.closest('#oddilMore') && !event.target.closest('#oddilMoreContainer')) {
      CloseOddilMore();
    }
  }

  aboutUs.addEventListener('click', () => {
    location.href = '../../pages/oddil.html';
  });
  whereAreWe.addEventListener('click', () => {
    location.href = '../../pages/kde_jsme.html';
  });
  history.addEventListener('click', () => {
    location.href = '../../pages/historie.html';
  });

})