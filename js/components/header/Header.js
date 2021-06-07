function header() {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.closeBtn')
    let isVerticalMeniuVisible = false;
    const shadow = document.querySelector('.shadow')
    hamburger.addEventListener('click', () => {
        verticalMeniu(isVisisble)
        isVisible = !isVisible;
        hamburger.style.display = 'none';
        close.style.display = 'block';
    })
    console.log('headeris veikia');

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
    const headerVerticalMeniu = document.getElementsById('verticalMeniu');
    if (isVisible) {
        headerVerticalMeniu.style.width = "0";
    }
    else {
        headerVerticalMeniu.style.width = "350px";
    }
}
export { header }