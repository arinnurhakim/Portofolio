const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Close the menu when a menu item is clicked
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
  }
});
