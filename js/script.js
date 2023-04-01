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

const tabs = document.querySelectorAll(".click-a");
const contents = document.querySelectorAll("#change-section");

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', ()=>{
        tabs.forEach((tab) =>{
            tab.classList.remove('hv-after')
        })
        tab.classList.add('hv-after')

        contents.forEach((c) => c.classList.remove('active-section'))

        contents[index].classList.add('active-section')
    })
})
