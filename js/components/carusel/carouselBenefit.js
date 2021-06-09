class Carousel2 {
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
