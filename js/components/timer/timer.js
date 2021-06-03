import { formatNumber } from './formatNumber.js';
import { calcTargetDate } from './calcTargetDate.js';
import { updateTimer } from './updateTimer.js';
function renderTimer(selector, tarderDate) {

    const DOM = document.querySelector(selector);
    const time = calcTargetDate(tarderDate)
    const title = ['Days', 'Hours', 'Minutes', 'Seconds'];
    let HTML = '';

    for (let i = 0; i < time.length; i++) {
        const formatedNumber = formatNumber(time[i])
        HTML += `<div class="box">
                        <div class="value">${formatedNumber}</div>
                        <div class="title">${title[i]}</div>
                    </div>`

    }

    DOM.innerHTML = HTML

    const timerAllValue = DOM.querySelectorAll('.value');

    setInterval(function () {
        updateTimer(timerAllValue, calcTargetDate(tarderDate))
    }, 1000 / 3)

}

export { renderTimer }