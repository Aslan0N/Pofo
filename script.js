import { images } from "./data.js";
// Open Card
const btn1 = document.querySelector(".button-opn");
const btn2 = document.querySelector(".my-button");
const openScreen = document.querySelector(".open-screen");

const opn = () =>{
    openScreen.classList.add('one');
}
btn1.addEventListener('click', opn)
const close = () =>{
   openScreen.classList.remove('one');
   console.log('Test');
}
btn2.addEventListener('click', close)
  
// Button after
const tabs = document.querySelectorAll(".click-a");
tabs.forEach((tab) =>{
    tab.addEventListener('click', ()=>{
        tabs.forEach((tab) =>{
            tab.classList.remove('hv-after')
        })
        tab.classList.add('hv-after')

})
})
// Dark \ Light Mode
const imgPofo = document.querySelector(".brand-pofo");
const imgPofo2 = document.querySelector(".brand-pofo2");
const brand = document.querySelector(".navbar-brand")
const changeMode = () =>{
    document.body.classList.toggle("dark")
    if(imgPofo.attributes[2].value  == "http://www.themezaa.com/html/pofo/images/logo-white@2x.png"){
        imgPofo.attributes[2].value  = "http://www.themezaa.com/html/pofo/images/logo@2x.png"
    }else{
        imgPofo.attributes[2].value  = "http://www.themezaa.com/html/pofo/images/logo-white@2x.png"
    }
    if(imgPofo2.attributes[2].value  == "http://www.themezaa.com/html/pofo/images/logo-white@2x.png"){
        imgPofo2.attributes[2].value  = "http://www.themezaa.com/html/pofo/images/logo@2x.png"
    }else{
        imgPofo2.attributes[2].value  = "http://www.themezaa.com/html/pofo/images/logo-white@2x.png"
    }
    tabs.forEach((tab)=>{
        tab.classList.add("hv-dark")
    })
}
brand.onclick = () =>{
    changeMode()
}

const img = document.querySelector(".img");

let format = "";

const myFilter = () =>{
    const change = (value) =>{
        return value.format == format
    }


let add = "";

images.filter(change).map(item =>{
    add += `<img src=${item.photo} class="animate__animated animate__bounce" alt="">`
})

img.innerHTML = add

}
tabs[1].onclick = () =>{
    format = "Web"
    myFilter()
}
tabs[2].onclick = () =>{
    format = "Advertising"
    myFilter()
}
tabs[3].onclick = () =>{
    format = "Branding"
    myFilter()
}
tabs[4].onclick = () =>{
    format = "Design"
    myFilter()
}
tabs[5].onclick = () =>{
    format = "Photography"
    myFilter()
}
