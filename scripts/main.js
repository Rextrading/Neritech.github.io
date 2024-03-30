
/*--------------------------------------*/

const menuContainer = document.querySelector(".menu-container");
const overlay = document.querySelector(".overlay");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");

const menuFunction = function(){
  menuContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuCloseBtn.addEventListener("click", menuFunction);
overlay.addEventListener("click", menuFunction);
menuOpenBtn.addEventListener("click", menuFunction);

/*--------------------------------------*/
