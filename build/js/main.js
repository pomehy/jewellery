'use strict';

(function () {
  const accordionClickHandler = (items, toggles, classOpen) => {
    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        let array = Array.from(toggles);
        let target = evt.target;
        let index = array.indexOf(target);

        array.forEach((item, j) => {
          if (j === index) {
            items[j].classList.toggle(classOpen);
          }
        });
      });
    }
  };

  (function () {
    const faqItems = document.querySelectorAll('.faq__item');
    const faqToggles = document.querySelectorAll('.faq__item button');
    const classOpenFaq = 'faq__item--opened';

    if (faqItems) {
      for (let i = 0; i < faqItems.length; i++) {
        faqItems[i].classList.remove('faq__item--nojs');
        faqItems[i].classList.remove(classOpenFaq);
      }
    }

    if (faqToggles) {
      accordionClickHandler(faqItems, faqToggles, classOpenFaq);
    }
  })();

  (function () {
    const filterItems = document.querySelectorAll('.filter__fieldset');
    const filterToggles = document.querySelectorAll('.filter__fieldset button');
    const classOpenFilter = 'filter__fieldset--opened';

    if (filterItems) {
      for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].classList.remove('filter__fieldset--nojs');
      }
    }

    if (filterToggles) {
      accordionClickHandler(filterItems, filterToggles, classOpenFilter);
    }
  })();
})();

(function () {
  const closeModal = (modal, modalWrapper, modalClose, modalClassShow, pageBody) => {
    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        if (modal.classList.contains(modalClassShow)) {
          modal.classList.remove(modalClassShow);
        }
        pageBody.classList.remove('page-body--no-scroll');
      }
    });


    modal.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(modalClassShow) || evt.target.classList.contains(modalWrapper) || evt.target.classList.contains(modalClose)) {
        modal.classList.remove(modalClassShow);
        pageBody.classList.remove('page-body--no-scroll');
      }
    });
  };


  (function () {
    const pageBody = document.querySelector('.page-body');
    const modals = document.querySelectorAll('.modal');
    const loginModal = document.querySelector('.modal.login');
    const loginButton = document.querySelector('.page-header__login a');
    const loginUserEmail = document.querySelector('#login-user-email');

    const filter = document.querySelector('.filter');
    const filterToggle = document.querySelector('.filter__toggle');
    const filterWrapperClass = 'filter__form-wrapper';
    const filterCloseClass = 'filter__close';
    const filterShowClass = 'filter--show';

    if (filterToggle) {
      filterToggle.addEventListener('click', (evt) => {
        evt.preventDefault();
        filter.classList.add('filter--show');
        pageBody.classList.add('page-body--no-scroll');
      });
    }

    if (filter) {
      filter.classList.remove('filter--nojs');
      closeModal(filter, filterWrapperClass, filterCloseClass, filterShowClass, pageBody);
    }

    if (loginButton) {
      loginButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        loginModal.classList.add('modal--show');
        pageBody.classList.add('page-body--no-scroll');

        if (loginUserEmail) {
          loginUserEmail.focus();
        }
      });
    }

    if (modals) {
      for (let i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', (evt) => {
          if (evt.target.classList.contains('modal--show') || evt.target.classList.contains('modal__wrapper') || evt.target.classList.contains('modal__close')) {
            modals[i].classList.remove('modal--show');
            pageBody.classList.remove('page-body--no-scroll');
          }
        });

        window.addEventListener('keydown', (evt) => {
          if (evt.key === 'Escape' || evt.key === 'Esc') {
            if (modals[i].classList.contains('modal--show')) {
              modals[i].classList.remove('modal--show');
            }
            pageBody.classList.remove('page-body--no-scroll');
          }
        });
      }
    }
  })();
})();

(function () {
  const pageHeader = document.querySelector('.page-header');
  const headerToggle = document.querySelector('.page-header__toggle');
  const pageBody = document.querySelector('.page-body');
  const pageMain = document.querySelector('.page-main');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
  }

  if (headerToggle) {
    headerToggle.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (pageHeader.classList.contains('page-header--opened')) {
        pageHeader.classList.remove('page-header--opened');
        pageBody.classList.remove('page-body--open-menu');
        pageMain.classList.remove('page-main--no-scroll');
      } else {
        pageHeader.classList.add('page-header--opened');
        pageBody.classList.add('page-body--open-menu');
        pageMain.classList.add('page-main--no-scroll');
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
  const loginForm = document.querySelector('.login form');
  const inputForms = document.querySelectorAll('input');

  const isCyrillic = (text) => {
    return /[а-я]/i.test(text);
  };

  const customValidation = (input) => {
    const inputValue = input.value;

    if (input.type === 'email') {
      if (isCyrillic(inputValue)) {
        input.setCustomValidity('Please enter Latin characters');
      } else {
        input.setCustomValidity('');
      }
    }
    input.reportValidity();
  };

  const addLocalStorage = (input) => {
    let isStorageSupport = true;

    if (isStorageSupport) {
      if (input.type === 'tel' || input.type === 'email') {
        let storageKey = input.name;
        localStorage.setItem(storageKey, input.value);
      }
    }
  };

  for (let j = 0; j < inputForms.length; j++) {
    if (loginForm) {
      loginForm.addEventListener('submit', () => {
        addLocalStorage(inputForms[j]);
      });
    }

    inputForms[j].addEventListener('input', () => {
      customValidation(inputForms[j]);
    });
  }
})();

(function () {
  const followUs = document.querySelector('.follow-us');

  const getSrcImage = (imageWrapper) => {
    const imageElements = imageWrapper.querySelectorAll('img');
    const webpImagesElements = imageWrapper.querySelectorAll('source');

    for (let k = 0; k < imageElements.length; k++) {
      imageElements[k].src = imageElements[k].dataset.src;
      imageElements[k].srcset = imageElements[k].dataset.srcset;
    }
    for (let k = 0; k < webpImagesElements.length; k++) {
      webpImagesElements[k].srcset = webpImagesElements[k].dataset.srcset;
    }
  };

  const uploadImages = (container) => {
    const prevSection = container.previousElementSibling;

    if (prevSection) {
      window.addEventListener('scroll', () => {
        const coordPrevSection = prevSection.getBoundingClientRect();

        if (coordPrevSection.top < 1200) {
          getSrcImage(container);
        }
      });
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        getSrcImage(container);
      });
    }
  };

  if (followUs) {
    uploadImages(followUs);
  }
})();
