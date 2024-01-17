fetch("categories.json")
  .then((res) => res.json())
  .then((category) => {
    const btnContainer = document.querySelector(".categoryBtns");

    const List = category.categories;
    
    const categoryButtons = List.map((items) => {
      const button = document.createElement("button");
      button.textContent = items.category;
      return button;
    });

    categoryButtons.forEach((button) => {
      btnContainer.appendChild(button);
    });
  });
