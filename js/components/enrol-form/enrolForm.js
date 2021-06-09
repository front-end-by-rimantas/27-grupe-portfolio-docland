function progressLine() {
    const emailInputField = document.querySelector('.input');
    const emailLine = document.getElementById('progressLine');

    emailInputField.addEventListener('click', () => {
        emailLine.style.animationDuration = "20s";
        emailLine.style.backgroundColor = '#fbc006';
    })

    emailInputField.addEventListener('focusout', () => {
        emailLine.style.backgroundColor = '#fff';
    })
}
export { progressLine }


