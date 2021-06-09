function progressLine() {
    const emailInputField = document.querySelector('.input');
    const emailLine = document.getElementById('progressLine');
    const arrow =
        emailInputField.addEventListener('click', () => {
            console.log("Pavyko");
            emailLine.style.animationDuration = "20s";
            emailLine.style.backgroundColor = '#fbc006';
        })

    emailInputField.addEventListener('focusout', () => {
        console.log("Blur");
        emailLine.style.backgroundColor = '#fff';
    })
}
export { progressLine }


