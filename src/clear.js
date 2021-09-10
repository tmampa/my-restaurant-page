const clear = () => {
  const content = document.getElementById('content');
  const container = document.getElementsByClassName('container')[0];
  container.remove();
  content.className = '';
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].className = '';
  }
};

export default clear;