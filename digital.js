const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const openmenu = () => {
   //  console.log(event.target);
    menu.classList.add('menushown');
    body.classList.add('bodyunscroll');
 };

 const closemenu = () => {
   //  console.log(event.target);
    menu.classList.remove('menushown');
    body.classList.remove('bodyunscroll');
 };