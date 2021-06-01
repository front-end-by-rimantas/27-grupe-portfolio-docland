import { formatNumber } from './formatNumber.js';
import { calcTargetDate } from './calcTargetDate.js';
function renderTimer(selector, tarderDate) {

    const DOM = document.querySelector(selector);
    const time = calcTargetDate(tarderDate)
    const title = ['Days', 'Hours', 'Minutes', 'Seconds'];
    let HTML = '';

    for (let i = 0; i < time.length; i++) {
        const formatedNumber = formatNumber(time[i]) //dont forget to check formated numbers
        HTML += `<div class="box">
                        <div class="value">${formatedNumber}</div>
                        <div class="title">${title[i]}</div>
                    </div>`

    }

    DOM.innerHTML = HTML

}

export { renderTimer }