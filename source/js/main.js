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
        // pageHeader.classList.add('page-header--opened');
      } else {
        pageHeader.classList.add('page-header--opened');
        // pageHeader.classList.remove('page-header--opened');
      }
    });
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

