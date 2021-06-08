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
        this.addEvents();

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
        const reviewsCount = this.data.list.length;
        const reviewPerView = 2;
        const listWidth = reviewsCount / reviewPerView * 100;
        const reviewWidth = 100 / reviewsCount;
        const singleMargin = 100 / reviewPerView;

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
            <div class="reviews-frame">
                <div id="review_block" class="reviews-galery" style="width: ${listWidth}%;">
                    <div class="first" style="width: ${reviewWidth}%;">Review</div>
                    <div class="second" style="width: ${reviewWidth}%;">Review</div>
                    <div class="third" style="width: ${reviewWidth}%;">Review</div>
                </div>
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

    addEvents() {
        this.data.reviewPerView = this.data.reviewPerView.sort((a, b) => a.minWidth - b.minWidth);

        const responsive = this.data.reviewPerView;
        console.log(responsive);

        window.addEventListener('resize', () => {
            console.log('resizing...');
        })
    }

}

export { reviewCarousel }