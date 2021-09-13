import nav from './nav.js';
import footer from './footer.js';

const home = () => {
  const content = document.getElementById('content');
  content.classList.add('home');

  if (!document.querySelector('nav')) {
    const navbar = nav();
    content.appendChild(navbar);
  }
  const home = document.getElementById('home');
  home.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Pizza Base';
  header.appendChild(headline);
  container.appendChild(header);

  const tagline = document.createElement('p');
  tagline.innerHTML = 'The Best Pizza in the World';
  header.appendChild(tagline);

  content.appendChild(container);

  if (!document.querySelector('footer')) {
    footer();
  }
};

export default home;