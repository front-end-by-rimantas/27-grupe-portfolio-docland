class Carousel1 {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;
        this.itemsInScrean = 1

        this.init()

    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.data.itemsInScrean = this.data.itemsInScrean.sort((a, b) => a.minWidth - b.minWidth);
        this.itemsInScrean = this.calcTmensPerWiewValue();
        this.render(this.itemsInScrean);
        this.addEvant();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    generateItems() {
        const itemsCount = this.data.list.length;
        const itmeWidth = 100 / itemsCount;
        let HTML = '';

        for (let i = 0; i < itemsCount; i++) {
            HTML += `<div class="item" style="width: ${itmeWidth}%">content</div>`
        }
        return HTML;
    }

    render(itemsOnScreen) {
        const itemsCount = this.data.list.length;
        const listWidth = itemsCount / itemsOnScreen * 100;



        const HTML = `<div class='corouselLearn'>
                        <div class="gallery">
                            <div class="list" style="width: ${listWidth}%;">
                               ${this.generateItems()}
                            </div>
                            
                        </div>
                    </div>`

        this.DOM.innerHTML = HTML;

    }

    calcTmensPerWiewValue() {
        const resposive = this.data.itemsInScrean;

        let itemsToRender = 1;

        for (let i = 0; i < resposive.length; i++) {
            if (innerWidth > resposive[i].minWidth) {
                itemsToRender = resposive[i].itemsNumber;
            }
        }

        return itemsToRender;
    }

    addEvant() {

        window.addEventListener('resize', () => {

            const itemsToRender = this.calcTmensPerWiewValue();
            if (this.itemsInScrean !== itemsToRender) {
                this.render(itemsToRender)
                this.itemsInScrean = itemsToRender;
            }
        })

    }

}
export { Carousel1 }
