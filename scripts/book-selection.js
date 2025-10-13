const books = document.querySelectorAll("[data-bookid]:not(.lent)");

for (const book of books) {
  book.addEventListener("click", (e) => {
    if (book.classList.contains("selected")) {
      book.classList.remove("selected");
    } else {
    
      for (const b of books) {
        b.classList.remove("selected");
      }
    
      book.classList.add("selected");
    }
  });
}
