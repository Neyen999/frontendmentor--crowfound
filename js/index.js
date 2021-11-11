import "./info-card.js";

/*--BURGER BUTTON--*/

const menubtn = document.querySelector("#menu-btn");
const navmenu = document.querySelector(".header__nav");
const icon = document.querySelector(".icon-img");

menubtn.addEventListener("click", () => {
    navmenu.classList.toggle("open");
    // if (navmenu.classList.contains("open")) {
    //   icon.setAttribute("src", "../images/icon-close-menu.svg")
    // }
    navmenu.classList.contains("open") ? icon.setAttribute("src", "../images/icon-close-menu.svg") : icon.setAttribute("src", "../images/icon-hamburger.svg")
})


/*--MODAL--*/
const body = document.querySelector(".body");
const backthis = document.querySelector(".button--project");
const modalcont = document.querySelector(".modal__container");
const modalClose = document.querySelector(".close--modal");
const inputradio = document.querySelectorAll(".input--container")
const card = document.querySelector(".card");
const cards = document.querySelectorAll(".card");
console.log(cards)

backthis.addEventListener("click", () => openModal())

modalClose.addEventListener("click", () => closeModal())

function checkRadio() {
  for(let j = 0; j < inputradio.length - 1; j++) {
    inputradio[j].addEventListener("click", () => {
      inputradio[j].classList.add("ischecked")
    })
  }
  for(let i = 0; i < inputradio.length - 1; i++) {
    inputradio[i].addEventListener("click", () => {
      cards[i].classList.add("active-card")
    })
  } 
}

function openModal() {
  modalcont.classList.add("open")
  icon.style = "display:none"
  body.style = "overflow: hidden"
  checkRadio()
}

function closeModal() {
  modalcont.classList.remove("open")
  icon.style = "display:initial"
  body.style = "overflow: initial"
}



/*---MODAL SUCCESS--- */


function openSuccessModal() {
  successModal.classList.add("success--open")
}

function closeSuccessModal() {
  successModal.classList.remove("success--open")
}

const successModal = document.querySelector(".success__modal");
const successBtn   = document.querySelector("#close--success")
const continueBtns = document.querySelectorAll(".send--btn");
const amountInputs = document.querySelectorAll(".amount--input");

for(let i = 0; i < continueBtns.length; i++) {
  continueBtns[i].addEventListener("click", () =>  {
    if(amountInputs[i] !== "") {
      closeModal()
      openSuccessModal()
    }
  })
}

successBtn.addEventListener("click", () => closeSuccessModal())


/* PROGRESS BAR CALC */

const progressBar = document.querySelector("#founding");
const total       = 100000;
const current     = 89914;

progressBar.setAttribute("value", Math.floor(current / total * 100))