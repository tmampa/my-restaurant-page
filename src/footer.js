let footer = () => {
  let footer = document.createElement('footer');
  let footerText = document.createElement('p');
  footerText.innerHTML = 'Copyright © Tshephang M. All rights reserved.'
  footer.appendChild(footerText);
  let body = document.querySelector('body');
  body.appendChild(footer);
};

export default footer;