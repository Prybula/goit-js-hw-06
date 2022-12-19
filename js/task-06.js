
const input = document.querySelector("#validation-input");
const inputNeedLength = Number(input.dataset.length);

input.addEventListener("blur", () => {
    
    if (input.value.length === inputNeedLength) {

        input.classList.toggle("valid")
        
        if (input.classList.contains('invalid')) {
			input.classList.remove('invalid')
        }
        return;
    }
    
    if (input.classList.contains('valid')) {
		input.classList.remove('valid')
	}
		input.classList.add('invalid')
});