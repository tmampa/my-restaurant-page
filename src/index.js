import home from './home.js';
import about from './about.js';
import clear from './clear.js';
import menu from './menu.js';
import contact from './contact.js';
import './reset.css';
import './style.css';

home();

// Home tab
const homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  clear();
  home();
};

// About tab
const aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  clear();
  about();
};

// Menu tab
const menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  clear();
  menu();
};

// Contact tab
const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  clear();
  contact();
};