
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM LOAD');

  let headerContainer = document.querySelector('.header__container');
  let mobileMenuContainer = document.querySelector('.mobile__menu-container');
  let menuElPhone = document.querySelector('.menu__phone'); 
  let mobileMenu = document.querySelector('.mobile__menu'); 
  let navigateMenu = document.querySelector('.navigate__list');
  let mobileBtn = document.querySelector('.menu__mobile-btn');
  let desktopMenu = document.querySelector('.navigate__container');
  let mobileMenuActive = 'mobile__menu-container_active';

  mobileBtn.addEventListener('click', (event) => {
    console.log('mobile click', event);
    if (mobileMenuContainer.classList.contains(mobileMenuActive)) {
      mobileMenuContainer.classList.remove(mobileMenuActive);
      desktopMenu.append(navigateMenu);
      
    }
    else {
      mobileMenuContainer.classList.add(mobileMenuActive);
      mobileMenu.append(navigateMenu);
      
    }
  })

})