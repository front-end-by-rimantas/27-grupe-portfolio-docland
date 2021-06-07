class reviewCarousel {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.render();
        console.log(this);

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

    render() {
        const HTML = `<div class="reviews-carousel">
            <div class="reviews-controls">
                <div class="arrows">
                    <h2 class="reviews-title">Student Reviews</h2>
                </div>
                <div class="arrows">
                    <div class="arrow"></div>
                    <div class="arrow"></div>
                </div>
            </div>
            <div id="review_block" class="reviews-galery grid-container">
                <div class="first">Review</div>
                <div class="second">Review</div>
                <div class="third">Review</div>
            </div>
            <div class="reviews-stat">
                <div class="ratings">
                    <h2 class="average">4.85/5</h2>
                    <span>Average Ratings</span>
                </div>
                <div class="ratings">
                    <h2 class="student">15.4k</h2>
                    <span>Student Ratings</span>
                </div>
            </div>
            <div class="all">
                <div class="all-reviews">
                    <a href="#">View All Reviews</a>
                </div>
            </div>
        </div>`;

        this.DOM.innerHTML = HTML;

    }

}

export { reviewCarousel }
