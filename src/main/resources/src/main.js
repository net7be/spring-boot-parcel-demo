import './main.css';

const btn = document.getElementById('btn');

if (btn) {
  btn.addEventListener('click', () => {
    const newNode = document.createElement('h2');
    newNode.textContent = 'New node';
    document.body.appendChild(newNode);
  });
}