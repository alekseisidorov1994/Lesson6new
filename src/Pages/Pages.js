export default class Pages {
    constructor(path, content) {
        this.path = path
        this.fragment = document.createDocumentFragment()
        this.fragment.append(...content.map(x => x.render()))
    }
}