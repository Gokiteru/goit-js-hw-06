const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
const validLength = Number(inputRef.dataset.length);
const inputLength = inputRef.value.length;

if (inputLength === validLength) {
inputRef.classList.add('valid');
inputRef.classList.remove('invalid');
} else {
inputRef.classList.add('invalid');
inputRef.classList.remove('valid');
}
});