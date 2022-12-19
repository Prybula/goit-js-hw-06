const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsSpecies = document.querySelector('#ingredients');
const ingredientsArray = [];

ingredients.forEach(element => {
  
const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingredientEl.classList.add("item");
  ingredientsArray.push(ingredientEl);
})

ingredientsSpecies.append(...ingredientsArray);