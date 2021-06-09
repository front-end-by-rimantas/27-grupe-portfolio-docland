
class Interface {
    constructor(data) {
        this.data = data;
    }

    learnHTML() {
        const imgPath = this.data.imgPath + this.data.src
        return `<img src="${imgPath}" alt="${this.data.alt}">
                  <a href="#" class = 'title'>${this.data.title}</a>`
    }

}

export { Interface }