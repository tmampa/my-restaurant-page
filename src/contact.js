const contact = () => {
  const content = document.getElementById('content');
  content.classList.add('contact');

  const contactBtn = document.getElementById('contact');
  contactBtn.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container');

  const headline = document.createElement('h1');
  headline.innerHTML = 'Get in Touch';
  const tagline = document.createElement('p');
  tagline.innerHTML = 'Give us call or email. Our chefs are ready to assist';

  const phone = document.createElement('p');
  phone.innerHTML = 'Phone: (619) 123-4567';
  const email = document.createElement('p');
  email.innerHTML = 'Email: pizzabase@tripoli.com';

  container.appendChild(headline);
  container.appendChild(tagline);
  container.appendChild(phone);
  container.appendChild(email);

  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  body.insertBefore(container, footer);
};

export default contact;