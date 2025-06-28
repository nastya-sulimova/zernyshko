const buttons = document.querySelectorAll(".catalog__button_coffee-hover, .catalog__button_desserts-hover, .catalog__button_snacks-hover");

const allItems = document.querySelectorAll(".product-card_coffee, .product-card_desserts, .product-card_snacks");

function filterCategory(category) {
  allItems.forEach(item => {
    if (category === 'all') {
      item.style.display = "";
    } else {
      if (item.classList.contains(`product-card_${category}`)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    if (button.classList.contains("catalog__button_coffee-hover")) {
      filterCategory('coffee');
    } else if (button.classList.contains("catalog__button_desserts-hover")) {
      filterCategory('desserts');
    } else if (button.classList.contains("catalog__button_snacks-hover")) {
      filterCategory('snacks');
    }
  });
});

filterCategory('coffee');
document.querySelector('.catalog__button_coffee-hover').classList.add('active');