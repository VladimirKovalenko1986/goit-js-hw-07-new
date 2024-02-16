const listCategories = document.querySelector('#categories');
const listCategoriesChilren = listCategories.children;

const itemsAll = document.querySelectorAll('.item');
const items = document.querySelector('.item');

// console.log(`Namber of categorie: ${itemsAll.length}`);

itemsAll.forEach(item => {
  const firstElementChild = item.firstElementChild;
  const lastElementChild = item.lastElementChild;
  console.log(`Category: ${firstElementChild.textContent}`);
  console.log(`Elements: ${lastElementChild.children.length}`);
});
