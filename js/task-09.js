function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
}






1213      


//sadaddweqeqweqwe123         
asdasdadasd 


11213
  
                    123112312 1231  231212