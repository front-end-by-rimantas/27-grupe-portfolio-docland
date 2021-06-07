class Carousel1 {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;
        this.listDOM = null;
        this.leftArrow = null;
        this.rightArrow = null;
        this.itemsInScrean = 1;
        this.visibleItemIndex = 0;

        this.init()


    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.data.itemsInScrean = this.data.itemsInScrean.sort((a, b) => a.minWidth - b.minWidth);
        this.itemsInScrean = this.calcTmensPerWiewValue();
        this.visibleItemIndex = this.itemsInScrean;
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

    generateItems(data) {
        const itemsCount = data.length;
        const itmeWidth = 100 / itemsCount;
        let HTML = '';
        // const imgList = this.data.list

        for (let i = 0; i < itemsCount; i++) {
            HTML += `<div class="item" style="width: ${itmeWidth}%;">
            <img src="#" alt="#">
            <a href="#" class='title'></a>
            </div>`
        }

        // for (let i = 0; i < itemsCount; i++) {
        //     HTML += `<div class="item ${imgList[i].shadow}" style="width: ${itmeWidth}%;
        //     background-color: ${imgList[i].color};">
        //     <img src="${this.data.imgPath + imgList[i].src}" alt="${imgList[i].alt}">
        //     <a href="#" class='title'>${imgList[i].title}</a>
        //     </div>`
        // }
        return HTML;
    }

    render(itemsOnScreen) {

        const clonedData = [
            ...this.data.list.slice(-itemsOnScreen),
            ...this.data.list,
            ...this.data.list.slice(0, itemsOnScreen)
        ];


        const itemsCount = clonedData.length;
        const listWidth = itemsCount / itemsOnScreen * 100;
        const translate = itemsOnScreen / clonedData.length * 100;



        const HTML = `  <div class="col-12 col-md-12 col-lg-10">
                            <h2>What You'll Learn From This Course</h2>
                        </div>
                        <div class="hidden visible-lg col-lg-2 reverse-lg">
                            <button class="leftArrw fa fa-angle-left"></button>
                            <button class="rightArrw fa fa-angle-right"></button>
                        </div>
                        <div class='corouselLearn'>
                        <div class="gallery">
                            <div class="list" style="width: ${listWidth}%; transform: translateX(-${translate}%);">
                               ${this.generateItems(clonedData)}
                            </div>
                            
                        </div>
                    </div>`

        this.DOM.innerHTML = HTML;
        this.listDOM = this.DOM.querySelector('.list');
        this.leftArrow = this.DOM.querySelector('.leftArrw')
        this.rightArrow = this.DOM.querySelector('.rightArrw')


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

        let translate = 0;
        let clickright = 0;
        let clickleft = 0;
        this.rightArrow.addEventListener('click', () => {
            clickright++
            clickleft--
            this.visibleItemIndex = this.itemsInScrean + clickright;
            translate = this.visibleItemIndex / (this.data.list.length + 2 * this.itemsInScrean) * 100
            console.log(clickright);
            this.listDOM.style.transform = `translateX(-${translate}%)`;

        })


        this.leftArrow.addEventListener('click', () => {
            clickleft++
            clickrigh--
            this.visibleItemIndex = this.itemsInScrean + clickleft;
            translate += this.visibleItemIndex / (this.data.list.length + 2 * this.itemsInScrean) * 100
            console.log(clickleft);
            this.listDOM.style.transform = `translateX(${translate}%)`;

        })

    }
    //  Options

}
export { Carousel1 }

