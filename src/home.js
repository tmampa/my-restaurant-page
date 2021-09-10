import nav from '../nav';

let home = () => {
  let content = document.getElementById('content');
  content.classList.add('home');

  if (!document.querySelector('nav')) {
      let navbar = nav();
      content.appendChild(navbar);
  }

  let home = document.getElementById('home');
  home.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');
  let header = document.createElement('header');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Pizza & Doughnuts';
  header.appendChild(headline);
  container.appendChild(header);

  let tagline = document.createElement('p');
  tagline.innerHTML = 'We have the best pizza and doughnuts in town!';
  header.appendChild(tagline);
}