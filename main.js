const hamburgerMenu = document.getElementById("hamburger");
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

$(document).ready(function () {
  $("#contact").validate({
    rules: {
      fullname: {
        required: true,
        maxlength: 20,
      },
      email: {
        required: true,
        email: true,
        maxlength: 40,
      },
      message: {
        required: true,
        maxlength: 70,
      },
    },
    messages: {
      fullname: {
        required: "Name Required!",
        maxlength: "Maximum of 20 Character",
      },
      email: {
        required: "Email Required!",
        email: "Email is not Correct!",
        maxlength: "Maximun of 40 Character",
      },
      messages: {
        required: "Commission Request Required!",
        maxlength: "Maximun of 200 Character",
      },
    },
  });
});
