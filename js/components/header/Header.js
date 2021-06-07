function header(selector, data) {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.verticalMeniuClose')
    let isSidebarVisible = false;
    hamburger.addEventListener('click', () => {
        verticalMeniu(isVisisble)
        isVisible = !isVisible;
        hamburger.style.display = '';
        close.style.display = 'block';
    })

    close.addEventListener('click', () => {
        verticalMeniu(isVisisble)
        isVisible = !isVisible;
        hamburger.style.display = 'block';
        close.style.display = 'none';
    })
    //validation
    //logic
}
function verticalMeniu(isVisible) {
    constheaderVerticalMeniu = document.getElementsByClassName('vertical-meniu');
    if (isVisible) {

    }

}



export { header }