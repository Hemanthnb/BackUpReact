function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
  
// document.querySelector('body').addEventListener('click',()=>{
//     const menu = document.getElementById('menu');
//     menu.classList.remove('show');
// })
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
  
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove('show');
    }
  });