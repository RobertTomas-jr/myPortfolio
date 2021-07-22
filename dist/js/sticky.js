
const header = document.querySelector('header');
window.addEventListener("scroll", () =>{
    header.classList.toggle('sticky', window.scrollY > 0);
});
    
const navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
});

const navItems = document.querySelector(".nav-items");
navBtn.addEventListener("click", () => {
    navItems.classList.toggle("open");
});

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((item) => {
    item.addEventListener("click", () => {
      if (navBtn.classList.contains("open")) {
        navBtn.classList.toggle("open");
        navItems.classList.toggle("open");
      }
    });
  });
