const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const header = item.querySelector("h2");
  const categoryItems = item.querySelectorAll("li");
  console.log(`Category: ${header.textContent}`);
  console.log(`Items count: ${categoryItems.length}`);
});