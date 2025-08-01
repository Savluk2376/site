const pizza_card = document.querySelectorAll(".pizza-item");
const modal_window = document.querySelector(".modal_window");
const close_btn = document.querySelector(".close-btn");
const order_btns = [];
pizza_card.forEach((item) => {
  order_btns.push(item.querySelector(".order-btn"));
});

order_btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    const pizza = pizza_card[index];
    const image = pizza.querySelector("img").src;
    const alt = pizza.querySelector("img").alt;
    const description = pizza.querySelector("p").textContent;
    const price = pizza.querySelector(".price").textContent;

    document.querySelector(".order-image").src = image;
    document.querySelector(".order-image").alt = alt;
    document.querySelector(".order-description").textContent =
      description;
    document.querySelector(".order-price").textContent = price;

    modal_window.classList.remove("hidden");
  });
});

function closeModal() {
  modal_window.classList.toggle("hidden");
}

const orderBtn = document.querySelector(".submit-order-btn");

orderBtn.addEventListener("click", () => {
  // Очищаємо всі інпути на сторінці
  document
    .querySelectorAll("input")
    .forEach((input) => (input.value = ""));

  // Очищаємо всі select
  document
    .querySelectorAll("select")
    .forEach((select) => (select.selectedIndex = 0));

  // Встановити перше радіо кнопці стан checked (наприклад, "якомога швидше")
  const radios = document.querySelectorAll(
    'input[type="radio"][name="time"]'
  );
  if (radios.length) {
    radios[0].checked = true;
  }

  // Очистити інформацію про замовлення (піца справа)
  document.querySelector(".order-image").src = "";
  document.querySelector(".order-description").textContent = "";
  document.querySelector(".order-price").textContent = "";

  // Сховати модальне вікно
  modal_window.classList.add("hidden");

  // Можна додати повідомлення
  alert("Дякуємо за замовлення!");
});
