// JavaScript example using plain JS
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".mainmenu li");

  menuItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var submenu = this.querySelector(".sub");
      submenu.style.display = "block";
    });

    item.addEventListener("mouseleave", function () {
      var submenu = this.querySelector(".sub");
      submenu.style.display = "none";
    });
  });
});

