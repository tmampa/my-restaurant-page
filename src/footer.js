const footer = () => {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.innerHTML = 'Copyright © Tshephang M. All rights reserved.';
  footer.appendChild(footerText);
  const body = document.querySelector('body');
  body.appendChild(footer);
};

export default footer;