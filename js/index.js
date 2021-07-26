const headerMenu = document.querySelector('.header-menu');
const menuIcon = document.querySelector('.fa-bars');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-bars-active')
  headerMenu.classList.toggle('header-menu-active')
})