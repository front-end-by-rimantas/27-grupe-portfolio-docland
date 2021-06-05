class reviewCarousel {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();

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
        if (!this.DOM) {
            return false;
        }
        return true;
    }

    render() {
        console.log('Rendering carousel...');
    }

}

export { reviewCarousel }
