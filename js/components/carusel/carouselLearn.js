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
        this.animationInProgress = false;
        this.animationDuration = 500;
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

        for (let i = 0; i < itemsCount; i++) {
            const obj = new this.component({
                ...data[i],
                imgPath: this.data.imgPath
            });


            HTML += `<div class="item ${obj.data.shadow}" style="width: ${itmeWidth}%; background-color: ${obj.data.color}">
            ${obj.learnHTML()}
            </div>`

        }

        return HTML;
    }

    render(itemsInScrean) {

        const clonedData = [
            ...this.data.list.slice(-itemsInScrean),
            ...this.data.list,
            ...this.data.list.slice(0, itemsInScrean)
        ];


        const itemsCount = clonedData.length;
        const listWidth = itemsCount / itemsInScrean * 100;
        const translate = itemsInScrean / clonedData.length * 100;



        const HTML = `  <div class="header col-12 col-md-12 col-lg-10">
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

    carouselAnimarion() {
        const transalte = this.visibleItemIndex / (this.data.list.length + 2 * this.itemsInScrean) * 100;
        this.listDOM.style.transform = `translateX(-${transalte}%)`;
    }

    addEvant() {

        window.addEventListener('resize', () => {

            const itemsToRender = this.calcTmensPerWiewValue();
            if (this.itemsInScrean !== itemsToRender) {
                this.render(itemsToRender)
                this.itemsInScrean = itemsToRender;
            }
        })

        this.rightArrow.addEventListener('click', () => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex++;
                this.carouselAnimarion();
                if (this.data.list.length + this.itemsInScrean === this.visibleItemIndex) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.itemsInScrean;
                        this.carouselAnimarion();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 20);
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        });



        this.leftArrow.addEventListener('click', () => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex--;
                this.carouselAnimarion();
                if (this.visibleItemIndex === 0) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.data.list.length;
                        this.carouselAnimarion();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 20);
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        });


    }
    //  Options

}
export { Carousel1 }

