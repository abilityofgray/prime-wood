document.addEventListener ('DOMContentLoaded', (event) => {

  let catalog = document.querySelector('.catalog');
  let listContainer = document.querySelector('.footer__section-list-container .footer__section-list');
  let btn = document.querySelectorAll('.mobile-footer-catalog__btn');
  let openClass = 'footer__section-list-container_open';
  let allCatalogBtn = document.querySelector('.footer-section__btn-wrap');

  allCatalogBtnRepos();

  window.addEventListener('resize', ()=> {
    allCatalogBtnRepos();
  })

  btn.forEach( button => {
    button.addEventListener('click', (el) => {
      console.log(el.target.parentElement.nextElementSibling);
      let container = el.target.parentElement.nextElementSibling;
      
      if (container.classList.contains(openClass)) {
        container.classList.remove(openClass);
        
      }
      else {
        container.classList.add(openClass);
        
      }
    })
  })
  
  function allCatalogBtnRepos() {
    if (window.innerWidth < 767) {
      listContainer.append(allCatalogBtn);
    } else if(window.innerWidth > 767) {
      catalog.append(allCatalogBtn);
      
    }
  }

})