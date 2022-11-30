import './style.css';

function showMenu() {
  var x = document.getElementById('nav-menu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
