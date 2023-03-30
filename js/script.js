const btn = document.querySelector(".button-opn");
const btn2 = document.querySelector(".my-button");
const openScreen = document.querySelector(".open-screen");

const opn = () =>{
    openScreen.classList.add('one');
}
btn.addEventListener('click', opn)
const close = () =>{
   openScreen.classList.remove('one');
   console.log('Test');
}
btn2.addEventListener('click', close)
  
// =================================================================================

const hiddenImg = document.querySelectorAll(".hidden")
const click = document.querySelector(".my-click")
const changing = () =>{
    hiddenImg.classList.add("none")
}
// click.addEventListener('click',changing)
