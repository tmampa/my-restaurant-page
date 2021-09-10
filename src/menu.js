const menu = () => {
  const content = document.getElementById('content');
  content.classList.add('menu');

  const menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container');

  const headline = document.createElement('h1');
  headline.innerHTML = 'Seasonal Menu';
  container.appendChild(headline);

  const menu = document.createElement('ul');
  const items = ['duo of pogos, marble cheeze whiz, honey ham rosette, spongebob zoodles   20', 'raspberry poptart parfait, vanilla snackpack, grape crush scented gel, mike n ikes, cry babies, fruity mentos   17', 'hungry man dinner   24', 'beef n bean burrito, wishbone caesar crema, lemon lime gatorade spheres   15', 'dunkin munchkin, oreo soil, shamrock fluid gel, moosetracks quenelle   21'];

  for (let i = 0; i < items.length; i += 1) {
    const item = document.createElement('li');
    item.innerHTML = items[i];
    menu.appendChild(item);
  }

  container.appendChild(menu);

  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  body.insertBefore(container, footer);
};

export default menu;