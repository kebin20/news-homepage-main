// import './style.css';

const menuButton = document.getElementById("menu-btn")
const exitButton = document.getElementById("exit-btn")
const nav = document.getElementById("nav")

menuButton.addEventListener('click', () => {
nav.classList.add('open-nav')
})

exitButton.addEventListener('click', () => {
nav.classList.remove('open-nav')
})