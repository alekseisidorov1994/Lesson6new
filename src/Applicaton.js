import Router from './Router'

export default class Applicaton {
    constructor(arg = {}) {
        this.root = arg.root
        this.router = new Router
    }
    update() {
        this.router.update()
        this.root.innerHTML = ''
        this.root.append(this.router.page.fragment)
    }
}