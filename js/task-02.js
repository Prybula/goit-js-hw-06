const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsSpecies = document.querySelector('#ingredients');
const ingredientsArray = ingredients.map(element => {
  
const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingredientEl.classList.add("item");
  return ingredientEl;
})

ingredientsSpecies.append(...ingredientsArray);;


