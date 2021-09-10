const about = () => {
  const body = document.querySelector('body');
  const content = document.getElementById('content');
  content.classList.add('about');

  const about = document.getElementById('about');
  about.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container');
  const headline = document.createElement('h1');
  const tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'The Story of Pizza Base';
  tagline.innerHTML = 'We have been serving the best Pizza in the land since 2019';

  container.appendChild(headline);
  container.appendChild(tagline);
  const footer = document.querySelector('footer');
  body.insertBefore(container, footer);
};

export default about;