function header() {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.close-btn')
    let isVerticalMeniuVisible = false;
    const shadow = document.querySelector('.shadow');
    hamburger.addEventListener('click', () => {
        verticalMeniu(isVerticalMeniuVisible)
        isVerticalMeniuVisible = !isVerticalMeniuVisible;
        hamburger.style.display = 'visible';
        close.style.display = 'block';
        shadow.style.display = 'block';
        shadow.style.visibility = 'visible';
    })


    close.addEventListener('click', () => {
        verticalMeniu(isVerticalMeniuVisible)
        isVerticalMeniuVisible = !isVerticalMeniuVisible;
        hamburger.style.display = 'block';
        close.style.display = 'none';
        shadow.style.visibility = 'hidden';
    })
    //validation
    //logic
}

function verticalMeniu(isVerticalMeniuVisible) {
    const headerVerticalMeniu = document.getElementById('verticalMeniu');
    if (isVerticalMeniuVisible) {
        headerVerticalMeniu.style.width = "0";
        headerVerticalMeniu.style.display = "none";
    }
    else {
        headerVerticalMeniu.style.width = "350px";
        headerVerticalMeniu.style.display = "inline-block";
    }
}
export { header }