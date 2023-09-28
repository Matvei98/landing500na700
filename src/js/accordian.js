document.querySelectorAll(".accordion-item-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parentElem = trigger.closest(".accordion-item");
      const contentElem = parentElem.querySelector(".accordion-item-content");
  
      if (parentElem.classList.contains("accordion-item-active")) {
        parentElem.classList.remove("accordion-item-active");
        contentElem.style.display = "none"; // Скрываем содержимое
      } else {
        document
          .querySelectorAll(".accordion-item")
          .forEach((child) => {
            child.classList.remove("accordion-item-active");
            const childContent = child.querySelector(".accordion-item-content");
            childContent.style.display = "none"; // Скрываем содержимое всех вкладок
          });
  
        parentElem.classList.add("accordion-item-active");
        contentElem.style.display = "block"; // Показываем содержимое выбранной вкладки
      }
    });
  });