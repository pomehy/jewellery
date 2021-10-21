'use strict';
(function () {
  const pageHeader = document.querySelector('.page-header');
  const headerToggle = document.querySelector('.page-header__toggle');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
  }

  if (headerToggle) {
    headerToggle.addEventListener('click', function () {
      if (pageHeader.classList.contains('page-header--opened')) {
        pageHeader.classList.remove('page-header--opened');
      } else {
        pageHeader.classList.add('page-header--opened');
      }
    });
  }
})();

(function () {
  const newProducts = document.querySelector('.new-products');

  if (newProducts) {
    newProducts.classList.remove('new-products--nojs');
  }
})();

(function () {
  const faqItems = document.querySelectorAll('.faq__item');
  const faqToggles = document.querySelectorAll('.faq__item button');

  if (faqItems) {
    for (let i = 0; i < faqItems.length; i++) {
      faqItems[i].classList.remove('faq__item--nojs');
    }
  }

  if (faqToggles) {
    for (let i = 0; i < faqToggles.length; i++) {
      faqToggles[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        let array = Array.from(faqToggles);
        let target = evt.target;
        let index = array.indexOf(target);

        array.forEach(function (item, j) {
          if (j === index) {
            faqItems[j].classList.toggle('faq__item--opened');
          }
        });
      });
    }
  }
})();

(function () {
  const filterItems = document.querySelectorAll('.filter__fieldset');
  const filterToggles = document.querySelectorAll('.filter__fieldset button');

  if (filterItems) {
    for (let i = 0; i < filterItems.length; i++) {
      filterItems[i].classList.remove('filter__fieldset--nojs');
    }
  }

  if (filterToggles) {
    for (let i = 0; i < filterToggles.length; i++) {
      filterToggles[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        let array = Array.from(filterToggles);
        let target = evt.target;
        let index = array.indexOf(target);

        array.forEach(function (item, j) {
          if (j === index) {
            filterItems[j].classList.toggle('filter__fieldset--opened');
          }
        });
      });
    }
  }
})();

(function () {
  const pageBody = document.querySelector('.page-body');
  const modals = document.querySelectorAll('.modal');
  const modalLogin = document.querySelector('.modal.login');
  const loginButton = document.querySelector('.page-header__login a');
  const loginUserEmail = document.querySelector('#login-user-email');

  const filter = document.querySelector('.filter');
  const filterToggle = document.querySelector('.filter__toggle');

  if (filterToggle) {
    filterToggle.addEventListener('click', (evt) => {
      evt.preventDefault();
      filter.classList.add('filter--opened');
      pageBody.classList.add('page-body--no-scroll');
    });
  }

  if (filter) {
    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        if (filter.classList.contains('filter--opened')) {
          filter.classList.remove('filter--opened');
        }
        pageBody.classList.remove('page-body--no-scroll');
      }
    });

    filter.classList.remove('filter--nojs');
  }

  if (filter) {
    filter.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('filter--opened') || evt.target.classList.contains('filter__form-wrapper') || evt.target.classList.contains('filter__close')) {
        filter.classList.remove('filter--opened');
        pageBody.classList.remove('page-body--no-scroll');
      }
    });
  }

  if (modalLogin) {
    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        if (modalLogin.classList.contains('modal--show')) {
          modalLogin.classList.remove('modal--show');
        }
        pageBody.classList.remove('page-body--no-scroll');
      }
    });

    if (loginButton) {
      loginButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalLogin.classList.add('modal--show');
        pageBody.classList.add('page-body--no-scroll');

        if (loginUserEmail) {
          loginUserEmail.focus();
        }
      });
    }
  }

  if (modals) {
    for (let i = 0; i < modals.length; i++) {
      modals[i].addEventListener('click', (evt) => {
        if (evt.target.classList.contains('modal--show') || evt.target.classList.contains('modal__wrapper') || evt.target.classList.contains('modal__close')) {
          modals[i].classList.remove('modal--show');
          pageBody.classList.remove('page-body--no-scroll');
        }
      });
    }
  }
})();
