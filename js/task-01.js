
const categoriesItemEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(category => {
    const titleItemEl = category.querySelector("h2");
    console.log(`Category: ${titleItemEl.textContent}`);

    const listItemEl = category.querySelectorAll('li');
    console.log(`Elements: ${listItemEl.length}`);
})