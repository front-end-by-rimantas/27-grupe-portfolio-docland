const renderAccordion = (data, id) => {
    const DOM = document.getElementById(id);
    let weekNo = 'week' + id[id.length - 1];
    const expandedWeekData = data[weekNo];
    console.log(expandedWeekData);

    // for loop, kol yra videos:
    //  DOM.innerHTML += video html eilute

    // tuomet prideti stilius - grid, flex, yadda yadda ir pakeisti klase i display visible
}

export { renderAccordion }