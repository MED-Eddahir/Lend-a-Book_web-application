
const label = document.querySelector(".dropdown.active > .dropdown-label");
label.addEventListener("click", (e) => {
   label.classList.toggle("expanded"); // (a)
   const mainItem = label.closest(".level-1");   //(b)
   const submenu = mainItem.nextElementSibling.querySelectorAll(".level-2");
   for (const subitem of submenu) {
      subitem.classList.toggle("hide");
   }
});

  


