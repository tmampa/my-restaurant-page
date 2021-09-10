let about = () => {
  let body = document.querySelector('body');
  let content = document.getElementById('content');
  content.classList.add('about');

  let about = document.getElementById('about');
  about.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');
  let headline = document.createElement('h1');
  let tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'The Story of Pizza Base';
  tagline.innerHTML = 'We have been serving the best Pizza in the land since 2019';

  container.appendChild(headline);
  container.appendChild(tagline);
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);
}

export default about;