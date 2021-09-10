let about = () => {
    let body = document.querySelector('body');
    let content = document.createElement('content');
    content.classList.add('about');

    let about = document.createElement('about');
    about.classList.add('active');

    let container = document.createElement('div');
    container.classList.add('container');
    let headline = document.createElement('h1');
    let tagline = document.createElement('p');
    tagline.classList.add('text');

    headline.innerText = 'Pizza and Doughnuts is a popular restaurant. It\'s a great place to get a pizza or a doughnut.';
    tagline.innerText = 'Since 2021, Pizza and Doughnuts has been serving delicious food to the world.';

    container.appendChild(headline);
    container.appendChild(tagline);

    let footer = document.querySelector('.footer');
    body.insertBefore(container, footer);
}

export default about;