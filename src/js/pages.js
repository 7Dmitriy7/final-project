import closeMenu from "../assets/img/close-menu.svg"
import logoMenu from "../assets/img/logo-menu.svg"
import searchIcon from "../assets/img/search.svg"
import slashMenu from "../assets/img/slash-menu.svg"
import phoneMenu from "../assets/img/phone-menu.svg"
import messageMenu from "../assets/img/message-menu.svg"
import profileIcon from "../assets/img/profile.svg"
import menuIcon from "../assets/img/menu.svg"
import slashIcon from "../assets/img/slash.svg"
import logoIcon from "../assets/img/logo.svg"
import phoneIcon from "../assets/img/phone.svg"
import messageIcon from "../assets/img/message.svg"
import settingIcon from "../assets/img/setting.svg"
import bodySlashIcon from "../assets/img/body-slash.svg"
import arrowIcon from "../assets/img/arrow.svg"
import pictureIcon from "../assets/img/picture.png"
import lenovoIcon from "../assets/img/lenovo.png"
import samsungIcon from "../assets/img/samsung.png"
import appleIcon from "../assets/img/apple.png"
import acerIcon from "../assets/img/acer.png"
import viewsonicIcon from "../assets/img/viewsonic.png"
import boschIcon from "../assets/img/bosch.png"
import hpIcon from "../assets/img/hp.png"
import sonyIcon from "../assets/img/sony.png"
import laptopIcon from "../assets/img/laptop.png"
import tabletIcon from "../assets/img/tablet.png"
import pcIcon from "../assets/img/pc.png"
import displayIcon from "../assets/img/display.png"
import orderIcon from "../assets/img/order.svg"
import footerArrow from "../assets/img/footer-arrow.svg"
import submitIcon from "../assets/img/submit.svg"
import "../assets/SCSS/style.scss";

import { initSwiper } from "./swiper";

export function createPages() {
  const pages = document.createElement("div")
  pages.className = "pages"

 pages.innerHTML = `
<div class="menu-main">

   <nav class="menu-header">
     <div class="menu-main__left1">
    <header class="menu__container">
      <div class="menu__header menu__header--left">
        <button class="menu__button--hide" >
          <img src="${closeMenu}"  alt="Закрыть меню">
        </button>
        <button class="menu__button">
          <img src="${logoMenu}" alt="Логотип меню">
        </button>
      </div>
      <div class="menu__header menu__header--right">
        <button class="menu__button">
          <img src="${searchIcon}" alt="<UNK> <UNK>">
        </button>
      </div>
    </header>
   <div class="menu__body">
    <div class="menu__main-list">
      <ul class="menu-list">
        <li class="menu__item menu__item--style">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Ремонт техники</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Услуги и сервисы</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Корпоративным клиентам</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Продавцам техники</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Партнерам</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Производителям</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Наши сервисные центры</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#">
            <img src="${slashMenu}" alt="" class="menu__icon">
            <span>Контакты</span>
          </a>
        </li>
      </ul>
    </div>
   </div>
     <footer class="menu__footer">
       <div class="menu__footer-header">
         <button class="menu__button menu__button--modal-phone">
           <img src="${phoneMenu}" alt="телефон меню">
         </button>
         <button class="menu__button menu__button--modal-message">
           <img src="${messageMenu}" alt="чат меню">
         </button>
         <button class="menu__button">
           <img src="${profileIcon}" alt="профиль меню">
         </button>
       </div>

       <div class="menu__footer-contacts">
         <a href="mailto:mail@cps.com" class="menu__footer-mail">mail@cps.com</a>
         <a href="tel:88008908900" class="menu__footer-phone">8 800 890 8900</a>
       </div>

       <div class="menu__languages">
         <button class="menu__button-lang menu__button-lang--active" type="button">RU</button>
         <button class="menu__button-lang" type="button">EN</button>
         <button class="menu__button-lang" type="button">CH</button>
       </div>
     </footer>
   </div>
  </nav>


  <main class="main">
    <header class="header">
      <div class="page-container">
        <nav class="header__nav">
          <div class="header__container header__container--left">
            <button class="header__button header__button--menu">
              <img src="${menuIcon}" alt="меню">
            </button>
            <button class="header__button header__button--slash">
              <img src="${slashIcon}" alt="слаш">
            </button>
            <button class="header__button header__button--logo">
              <img src="${logoIcon}" alt="логотип">
            </button>
          </div>

          <div class="header__container header__container--right">
            <button class="header__button header__button--phone header__button--hide">
              <img src="${phoneIcon}" alt="связь">
            </button>
            <button class="header__button header__button--message header__button--hide">
              <img src="${messageIcon}" alt="чат">
            </button>
            <button class="header__button header__button--profile header__button--hide">
              <img src="${profileIcon}" alt="профиль">
            </button>
            <button class="header__button header__button--slash header__button--hide">
              <img src="${slashIcon}" alt="слеш">
            </button>
            <button class="header__button header__button--setting">
              <img src="${settingIcon}" alt="настройки">
            </button>
            <button class="header__button header__button--search">
              <img src="${searchIcon}" alt="поиск">
            </button>
          </div>
        </nav>
      </div>

    </header>

      <section class="main__title">
          <div class="main__container">
            <button class="main__button main__button--body-slash">
              <img src="${bodySlashIcon}" alt="слэш заголовка">
            </button>
              <h2 class="main__title--text">Услуги и сервисы</h2>
          </div>
          <div class="main__block-1120-hide">
              <div class="main__block-1120-hide main__block--setting">
                 <p>Оставить заявку</p>
                <button  class="main__button main__button--setting">
                 <img class="main__setting" src="${settingIcon}" alt="настройки">
                </button>
              </div>
              <div class="main__block-1120-hide main__block--search">
                 <p>Статус ремонта</p>
                 <button class="main__button main__button--search">
                 <img src="${searchIcon}" alt="поиск">
                 </button>
              </div>
          </div>
      </section>

      <section class="main__buttons">
          <button class="main__button main__button--border">Ремонтируемые устройства</button>
          <button class="main__button">Дополнительные услуги</button>
          <button class="main__button">Цены на услуги</button>
          <button class="main__button">Адреса сервисных центров</button>
          <button class="main__button">Специальные цены </button>
          <button class="main__button ">Отзывы</button>
      </section>
      <article class="main__article">
        <div class="main__article-text">
           <p class="main__article--description">Мы являемся авторизованным сервисным центром по ремонту техники Dell.
              Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
             <br><br>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов.
              Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
           </p>
        <section class="main__further">
          <img class="main__further-arrow" src="${arrowIcon}" alt="стрелка">
           <a href="#" class=" main__further--arrow">Читать далее</a>
        </section>
        </div>
        <div class="main__article-image">
              <img class="main__article--picture" src="${pictureIcon}" alt="картинка с логотипом">
        </div>
      </article>

      <section class="service__container">
        <div class="service__container-text">
          <h2>ремонт техники различных брендов</h2>
        </div>
        <div class="service__swiper-wrapper">
        <div class="swiper service__swiper">
          <div class="swiper-wrapper service__swiper-block">
            <div class="swiper-slide"><a href="#"><img src="${lenovoIcon}" alt="Lenovo"></a></div>
            <div class="swiper-slide"><a href="#"><img src="${samsungIcon}" alt="Samsung"></a></div>
            <div class="swiper-slide"><a href="#"><img src="${appleIcon}" alt="Apple"></a></div>
            <div class="swiper-slide service__item--hidden-tablet"><a href="#"><img src="${viewsonicIcon}" alt="Viewsonic"></a></div>
            <div class="swiper-slide"><a href="#"><img src="${boschIcon}" alt="Bosch"></a></div>
            <div class="swiper-slide"><a href="#"><img src="${hpIcon}" alt="HP"></a></div>
            <div class="swiper-slide"><a href="#"><img src="${acerIcon}" alt="Acer"></a></div>
            <div class="swiper-slide service__item--hidden-tablet"><a href="#"><img src="${sonyIcon}" alt="Sony"></a></div>
            <div class="swiper-slide service__item--hidden-tablet-desktop"><a href="#"><img src="${lenovoIcon}" alt="Lenovo"></a></div>
            <div class="swiper-slide service__item--hidden-tablet-desktop"><a href="#"><img src="${samsungIcon}" alt="Samsung"></a></div>
            <div class="swiper-slide service__item--hidden-tablet-desktop "><a href="#"><img src="${appleIcon}" alt="Apple"></a></div>
            <div class="swiper-slide service__item--hidden-tablet-desktop"><a href="#"><img src="${lenovoIcon}" alt="Lenovo"></a></div>
          </div>
          <div class="swiper-pagination services-pagination"></div>

        </div>
        </div>

        <div class="service__further">
          <img class="service__further-arrow" src="${arrowIcon}" alt="стрелка">
          <a href="#" class="service__further-text">Показать все</a>
        </div>
      </section>


    <section class="service__container">
      <div class="service__container-text">
        <h2>ремонт различных видов техники</h2>
      </div>
      <div class="services-containers">
      <div class="service__swiper-wrapper">
        <div class="swiper service__swiper">
          <div class="swiper-wrapper service__swiper-block">
            <div class="swiper-slide "><a href="#"><img src="${laptopIcon}" alt="ремонт ноутбуков"></a></div>
            <div class="swiper-slide "><a href="#"><img src="${tabletIcon}" alt="ремонт планшетов"></a></div>
            <div class="swiper-slide "><a href="#"><img src="${pcIcon}" alt="ремонт ПК"></a></div>
            <div class="swiper-slide  swiper-slide--monitor"><a href="#"><img src="${displayIcon}" alt="ремонт мониторов"></a></div>
            <div class="swiper-slide  swiper-slide--monitor-hide"><a href="#"><img src="${displayIcon}" alt="ремонт мониторов"></a></div>
            <div class="swiper-slide  swiper-slide--monitor-hide"><a href="#"><img src="${displayIcon}" alt="ремонт мониторов"></a></div>
            

          </div>
          <div class="swiper-pagination services-pagination-2"></div>
        </div>
      </div>

 </div>
      <div class="service__further">
        <img class="service__further-arrow" src="${arrowIcon}" alt="стрелка">
        <a href="#" class="service__further-text">Показать все</a>
      </div>
    </section>

    <section class="prices">

      <div class="prices__block-text">
        <h2>цены на услуги</h2>
      </div>
      <div class=" prices__header-slide">
            <span class="prices__header">Ремонтные услуги</span>
            <span class="prices__header">Цена</span>
            <span class="prices__header">Срок</span>
          </div>
      
     <div class="prices__container-swiper">
      <div class="swiper prices-swiper">
        <div class="swiper-wrapper prices-swiper-3">
                         <!--  1-->
          <div class="swiper-slide prices__row">
            <div class="prices__cell">
              <span class="prices__label">Ремонтируемые услуги</span>
              <span class="prices__value">Диагностика</span>
            </div>
            <div class="prices__cell">
              <span class="prices__label">Цена</span>
              <span class="prices__value">Бесплатно</span>
            </div>
<!--            <div class="prices__block&#45;&#45;leveling">-->
              <div class="prices__cell">
                <span class="prices__label">Срок</span>
                <span class="prices__value">30 мин</span>
              </div>
              <div class="prices__cell">
                <img class="prices__order" src="${orderIcon}" alt="Заказать">
              </div>
<!--            </div>-->
          </div>
                          <!-- 2-->
          <div class="swiper-slide prices__row">
            <div class="prices__cell">
              <span class="prices__label">Ремонтируемые услуги</span>
              <span class="prices__value">Замена дисплея</span>
            </div>
            <div class="prices__cell">
              <span class="prices__label">Цена</span>
              <span class="prices__value">1 000 ₽</span>
            </div>
<!--            <div class="prices__block&#45;&#45;leveling">-->
              <div class="prices__cell">
                <span class="prices__label">Срок</span>
                <span class="prices__value">30-120 мин</span>
              </div>
              <div class="prices__cell">
                <img class="prices__order" src="${orderIcon}" alt="Заказать">
              </div>
<!--            </div>-->
          </div>
                       <!-- 3 -->
          <div class="swiper-slide prices__row">
            <div class="prices__cell">
              <span class="prices__label">Ремонтируемые услуги</span>
              <span class="prices__value">Замена полифонического динамика</span>
            </div>
            <div class="prices__cell">
              <span class="prices__label">Цена</span>
              <span class="prices__value">1 000 ₽</span>
            </div>
<!--            <div class="prices__block&#45;&#45;leveling">-->
              <div class="prices__cell">
                <span class="prices__label">Срок</span>
                <span class="prices__value">30-120 мин</span>
              </div>
              <div class="prices__cell">
                <img class="prices__order" src="${orderIcon}" alt="Заказать">
              </div>
<!--            </div>-->
          </div>
                       <!-- 4 -->
          <div class="swiper-slide prices__row">
            <div class="prices__cell">
              <span class="prices__label">Ремонтируемые услуги</span>
              <span class="prices__value">Тестирование с выдачей технического заключения</span>
            </div>
            <div class="prices__cell">
              <span class="prices__label">Цена</span>
              <span class="prices__value">1 000 ₽</span>
            </div>
<!--            <div class="prices__block&#45;&#45;leveling">-->
              <div class="prices__cell">
                <span class="prices__label">Срок</span>
                <span class="prices__value">30-120 мин</span>
              </div>
              <div class="prices__cell">
                <img class="prices__order" src="${orderIcon}" alt="Заказать">
              </div>
<!--            </div>-->
          </div>
                      <!-- 5 -->
          <div class="swiper-slide prices__row">
            <div class="prices__cell">
              <span class="prices__label">Ремонтируемые услуги</span>
              <span class="prices__value">Замена програмного обеспечения</span>
            </div>
            <div class="prices__cell">
              <span class="prices__label">Цена</span>
              <span class="prices__value">1 000 ₽</span>
            </div>
<!--            <div class="prices__block&#45;&#45;leveling">-->
              <div class="prices__cell">
                <span class="prices__label">Срок</span>
                <span class="prices__value">30-120 мин</span>
              </div>
              <div class="prices__cell">
                <img class="prices__order" src="${orderIcon}" alt="Заказать">
              </div>
<!--            </div>-->
          </div>
          
        </div>
        
        <div class="swiper-pagination prices-pagination "></div>
      </div>
    </div>
    </section>
    
    <footer class="footer">
       <div class="footer__container">
         <p class="footer__text">
           Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
         </p>
         <div class="footer__commerce">
           <a href="#!" class="footer__commerce-text">Получить коммерческое предложение</a>
           <img class="footer__commerce-arrow" src="${footerArrow}" alt="СТРЕЛКА">
         </div>
       </div>
       <div class="footer__information">
         <span class="footer__copyright">
           © 2019 CPS<br> Разработано командой Apesong 
         </span>
         <span class="footer__copyright">
           Политика конфиденциальности
         </span>
         <span class="footer__copyright">
           Информация, размещенная на данной странице, не является публичной офертой 
         </span>
       </div>
    </footer>
    
    <aside class="modal modal--feedback">
       <div class="modal__block-main">
         <button class="modal__close-top">
           <img class="modal__close-top-img" src="${closeMenu}" alt="закрыть"> 
         </button>
         
         <div class="modal__block-connection">
           <img class="modal__slash" src="${bodySlashIcon}" alt="слеш">
           <p class="modal__text">Обратная связь</p> 
         </div>
    
         <div class="modal__block-data">

            <div class="modal__field">
               <input class="modal__input" type="text" name="name" 
               value="Имя" onfocus="if(this.value==='Имя')this.value=''" onblur="if(this.value==='')this.value='Имя'">
            </div>
      
            <div class="modal__field">
               <input class="modal__input" type="tel" name="phone" 
               value="Телефон" onfocus="if(this.value==='Телефон')this.value=''" onblur="if(this.value==='')this.value='Телефон'">
            </div>
      
            <div class="modal__field">
               <input class="modal__input" type="email" name="email" 
               value="Электронная почта" onfocus="if(this.value==='Электронная почта')this.value=''" onblur="if(this.value==='')this.value='Электронная почта'">
            </div>
      
            <div class="modal__field">
               <textarea class="modal__textarea" name="message" 
               onfocus="if(this.value==='Сообщение')this.value=''" onblur="if(this.value==='')this.value='Сообщение'">Сообщение</textarea>
               </div>
               
            <div class="modal__consent">
               <p>
                  Нажимая “отправить”, вы даёте согласие на 
                  <span class="modal__consent-highlight">обработку персональных данных</span> 
                  и соглашаетесь с нашей 
                  <span class="modal__consent-highlight">политикой конфиденциальности</span>.
               </p>
            </div>
      
            <button type="submit" class="modal__submit"><img src="${submitIcon}" alt="отправить"></button>
         </div> 
       </div>
       </div>
    </aside>
    
    <aside class="modal modal--callback">
       <div class="modal__block-main">
         <button class="modal__close-top">
           <img class="modal__close-top-img" src="${closeMenu}" alt="закрыть"> 
         </button>
         
         <div class="modal__block-connection">
           <img class="modal__slash" src="${bodySlashIcon}" alt="слеш">
           <p class="modal__text">Заказать звонок</p> 
         </div>
    
         <div class="modal__block-data">

            <div class="modal__field">
               <input class="modal__input" type="tel" name="phone" 
               value="Телефон" onfocus="if(this.value==='Телефон')this.value=''" onblur="if(this.value==='')this.value='Телефон'">
            </div>
            
            <div class="modal__consent">
               <p>
                  Нажимая “отправить”, вы даёте согласие на 
                  <span class="modal__consent-highlight">обработку персональных данных</span> 
                  и соглашаетесь с нашей 
                  <span class="modal__consent-highlight">политикой конфиденциальности</span>.
               </p>
            </div>
            
            <button type="submit" class="modal__submit"><img src="${submitIcon}" alt="отправить"></button>
         </div> 
       </div>
       </div>
    </aside>
    
  </main>
 </div>
`;
  return pages;
}

