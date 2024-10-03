const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 42,
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#sliderPrev',
        prevEl: '#sliderNext',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
      },
});






const ActiveDot = document.querySelectorAll(".info-dot");
const InfoHints = document.querySelectorAll(".info-hint");

for (let btn of ActiveDot) {
  btn.addEventListener("click", showHint)
}

function showHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector(".info-hint").classList.toggle("none")
}

// Ловим клик по всему документу

document.addEventListener("click", offAllHints);

function offAllHints() {
  for (let hint of InfoHints) {
    hint.classList.add("none");
  }
}

// запрещаем всплытие наверх при клике на подсказку

for (let hint of InfoHints) {
  hint.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}


// Tabs

const TabsBtn = document.querySelectorAll("[data-tab]")
const categoryCard = document.querySelectorAll("[data-tab-value]")
console.log(categoryCard)

for (let btn of TabsBtn) {
  btn.addEventListener("click", function() {
    // Убираем активное состояние у всех и добавляем новому табу при клике
    for (let btnActive of TabsBtn) {
      btnActive.classList.remove("tab-controls-btn--active")
    }
    this.classList.add("tab-controls-btn--active");

    // Получаем значение категории товара, по которому мы кликнули
    let a = this.dataset.tab;

    // Скрываем все карточки
    for (let card of categoryCard) {
      // Проверка на All
      if (this.dataset.tab === "All") {
        card.classList.remove("none");
      } else {

        // Отображаем нужные товары
        if (card.dataset.tabValue === this.dataset.tab) {
          card.classList.remove("none");
        } else {
          card.classList.add("none");
        }
      }

    }

    // Обновления swaipera под новое количество карточек
    swiper.update()
  });
}

// Мобильная навигация

const navBtn = document.querySelector(".header__nav-btn");
const navBtnClose = document.querySelector(".mobile-nav__close-btn");
const mobileNavArea = document.querySelector(".mobile-nav__wrapper")

navBtn.addEventListener("click", function() {
  mobileNavArea.classList.add("mobile-nav__wrapper--open")
});
navBtnClose.addEventListener("click", function() {
  mobileNavArea.classList.remove("mobile-nav__wrapper--open")
});
