import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let swiperElements = [null, null, null];

export function initSwiper() {
  const serviceSwipers = document.querySelectorAll('.service__swiper');
  const brandSwiper = serviceSwipers[0];
  const typeSwiper = serviceSwipers[1];
  const priceSwiper = document.querySelector('.prices-swiper');

  if (window.innerWidth < 768 && !swiperElements[0] && brandSwiper) {
    swiperElements[0] = new Swiper(brandSwiper, {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.services-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperElements[0]) {
    swiperElements[0].destroy(true, true);
    swiperElements[0] = null;
  }

  if (window.innerWidth < 768 && !swiperElements[1] && typeSwiper) {
    swiperElements[1] = new Swiper(typeSwiper, {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.services-pagination-2',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperElements[1]) {
    swiperElements[1].destroy(true, true);
    swiperElements[1] = null;
  }

  if (window.innerWidth < 768 && !swiperElements[2] && priceSwiper) {
    swiperElements[2] = new Swiper(priceSwiper, {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.prices-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperElements[2]) {
    swiperElements[2].destroy(true, true);
    swiperElements[2] = null;
  }
}

// Убирает прыжок при клике на ссылки
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".service__swiper");

  if (swiperEl) {
    swiperEl.addEventListener("click", (event) => {
      if (event.target.closest("a[href='#']")) {
        event.preventDefault();
      }
    });
  }

  document.querySelectorAll(".service__container").forEach((container) => {
    const furtherContainer = container.querySelector(".service__further");
    const furtherText = container.querySelector(".service__further-text");
    const furtherArrow = container.querySelector(".service__further-arrow");
    const swiperEl = container.querySelector(".service__swiper");

    if (furtherContainer && swiperEl) {
      furtherContainer.addEventListener("click", (e) => {
        e.preventDefault();
        swiperEl.classList.toggle("show-all");

        if (swiperEl.classList.contains("show-all")) {
          furtherText.textContent = "Скрыть";
          furtherArrow.style.transform = "rotate(180deg)";
        } else {
          furtherText.textContent = "Показать все";
          furtherArrow.style.transform = "rotate(0deg)";
        }
      });
    }
  });
});

// Бургер меню
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-header');
  const openBtn = document.querySelector('.header__button--menu');
  const closeBtn = menu?.querySelector('.menu__button--hide');

  if (!menu || !openBtn || !closeBtn) return;

  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.zIndex = '90';
  overlay.style.display = 'none';
  overlay.style.background = 'rgba(255,255,255,0.3)';
  overlay.style.backdropFilter = 'blur(8px)';
  overlay.style.webkitBackdropFilter = 'blur(8px)';
  overlay.style.transition = 'opacity 0.3s ease';

  function openMenu() {
    menu.classList.add('is-open');
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    document.body.classList.add('scroll-lock');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    overlay.style.opacity = '0';
    document.body.classList.remove('scroll-lock');

    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // для первой модалки (обратная связь)
  const openMessageButton = document.querySelector('.menu__button--modal-message');
  const messageModal = document.querySelector('.modal--feedback');

  // для второй модалки (заказ звонка)
  const openPhoneButton = document.querySelector('.menu__button--modal-phone');
  const phoneModal = document.querySelector('.modal--callback');

  // функция для запрета скролла
  function disableBodyScroll() {
    document.body.classList.add('modal-open');
  }

  // функция для разрешения скролла
  function enableBodyScroll() {
    document.body.classList.remove('modal-open');
  }

  // закрытия всех модалок
  function closeAllModals() {
    if (messageModal) messageModal.classList.remove('modal--open');
    if (phoneModal) phoneModal.classList.remove('modal--open');
    enableBodyScroll(); // Разрешаем скролл при закрытии
  }

  // для первой модалки (обратная связь)
  if (openMessageButton && messageModal) {
    const closeButton = messageModal.querySelector('.modal__close-top');

    openMessageButton.addEventListener('click', function() {
      closeAllModals();
      messageModal.classList.add('modal--open');
      disableBodyScroll(); // Запрещаем скролл при открытии
    });

    if (closeButton) {
      closeButton.addEventListener('click', closeAllModals);
    }

    messageModal.addEventListener('click', function(e) {
      if (e.target === messageModal) {
        closeAllModals();
      }
    });
  }

  // для второй модалки (заказ звонка)
  if (openPhoneButton && phoneModal) {
    const closeButton = phoneModal.querySelector('.modal__close-top');

    openPhoneButton.addEventListener('click', function() {
      closeAllModals();
      phoneModal.classList.add('modal--open');
      disableBodyScroll(); // Запрещаем скролл при открытии
    });

    if (closeButton) {
      closeButton.addEventListener('click', closeAllModals);
    }

    phoneModal.addEventListener('click', function(e) {
      if (e.target === phoneModal) {
        closeAllModals();
      }
    });
  }

  // Закрытие по Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});




// только если элементы существуют
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.swiper') || document.querySelector('.service__swiper')) {
    initSwiper();
  }
});

window.addEventListener('resize', function() {
  if (document.querySelector('.swiper') || document.querySelector('.service__swiper')) {
    initSwiper();
  }
});




