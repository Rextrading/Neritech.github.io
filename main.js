
const theme = document.querySelector("[data-theme]");
theme.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme-colors");
  theme.querySelector("[data-theme-light]").classList.toggle("active");
  theme.querySelector("[data-theme-dark]").classList.toggle("active");
})

// menu displaying code

const menuContainer = document.querySelector("[data-menu-container]");
const overlay = document.querySelector("[data-overlay]");
const menuOpenBtn = document.querySelector("[data-menu-open-btn]");
const menuCloseBtn = document.querySelector("[data-menu-close-btn]");

const menuFunction = function(){
  menuContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuOpenBtn.addEventListener("click", menuFunction);
overlay.addEventListener("click", menuFunction);
menuCloseBtn.addEventListener("click", menuFunction);

const quickLinksBtn = document.querySelector("[data-quick-links-btn]");
const quickLinksList = document.querySelector(".quickLinks-list");

quickLinksBtn.addEventListener("click", function() {
  quickLinksBtn.classList.toggle("active");
  quickLinksList.classList.toggle("active");
})

// const quickLinks = document.querySelectorAll(".quickLinks");

/*    thia code here will be worked on next

const quickLinksModalFunction = function(){
  
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  quickLinksBtn.classList.toggle("active");
  quickLinksList.classList.toggle("active");
}
*/