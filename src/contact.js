const { container } = require("webpack");

let contact = () => {
    let content = document.getElementById('content');
    content.classList.add('contact');

    let contactBtn = document.getElementById('contact');
    contactBtn.classList.add('active');

    let container = document.createElement('div');
    container.classList.add('container');

    let headline = document.createElement('h1');
    headline.innerHTML = 'Get in Contact';
    let tagline = document.createElement('p');
    tagline.innerHTML = 'We are always open to new ideas and collaborations. Feel free to contact us!';

    let phone = document.createElement('p');
    phone.innerHTML = 'Phone: +49 (0)1511 / 730-0';

    let email = document.createElement('p');
    email.innerHTML = 'Email: pizzabase@thebase.com';

    container.appendChild(headline);
    container.appendChild(tagline);
    container.appendChild(phone);
    container.appendChild(email);

    let body = document.querySelector('body');
    let footer = document.querySelector('footer');
    body.insertBefore(container, footer);
}