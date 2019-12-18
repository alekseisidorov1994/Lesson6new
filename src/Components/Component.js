export default class Component {
    constructor(type){
        this.type = type;
    }
    getHtmlElement(){
        return HtmlTemplate
    }
    render(){
        const divElement = document.createElement('div')
        divElement.innerHTML = this.getHtmlElement()
        return divElement.firstElementChild
    }
}