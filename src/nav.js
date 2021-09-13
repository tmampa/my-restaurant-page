const nav = () => {
  const nav = document.createElement('nav');
  const home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
  const about = document.createElement('button');
  about.innerHTML = 'About';
  about.id = 'about';
  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  const contact = document.createElement('button');
  contact.innerHTML = 'Contact Us';
  contact.id = 'contact';
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
};

export default nav;