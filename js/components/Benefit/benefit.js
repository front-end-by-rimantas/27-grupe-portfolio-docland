class benefit {
    constructor(data) {
        this.data = data;
    }

    HTML() {
        const src = this.data.imgPath + this.data.src;
        return `<div class="benefit">
                    <img src="${src}" alt="${this.data.name} photo">
                    <div class="name">${this.data.name}</div>
                    <div class="benefit-info">
                       <a href="#" class="benefit-heading">
                         <h3 class="benefit-heading-text">100% Online</h3>
                        </a>
                        <p class="benefit-paragraph">Aenean non accumsan ante. Duis et risus accumsan.</p>
                     </div>`
    }
}

export { benefit }
