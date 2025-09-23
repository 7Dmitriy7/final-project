
import {createPages} from "./pages";
import {initSwiper} from "./swiper";
import "../assets/SCSS/style.scss"

const root = document.getElementById('root');

const pages = createPages();
root.appendChild(pages);

window.addEventListener('load', () => {
  initSwiper();
});


