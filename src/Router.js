export default class Router {
    constructor() {
        this.page = null
        this.pages = []
    }

    add(page) {
        this.pages.push(page)
    }

    update() {
        for (const page of this.pages) {
            if (location.pathname.match(page.path)) {
                this.page = page
            }
        }
    }
}