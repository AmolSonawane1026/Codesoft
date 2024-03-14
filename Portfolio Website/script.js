const Hamburger = document.querySelector(".hamburger");
const NavUl = document.querySelector(".nav-ul");

Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("active");
  NavUl.classList.toggle("active");
});

NavUl.querySelectorAll(".nav-li").forEach((n) => {
  n.addEventListener("click", () => {
    Hamburger.classList.remove("active");
    NavUl.classList.remove("active");
  });
});
