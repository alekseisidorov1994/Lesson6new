import Component from '../Component'
import HtmlTemplate from './index.html'

export default class Container extends Component{
    constructor(){
        super('container')
        this.components =[]
    }
    getHtmlElement(){
        return HtmlTemplate
    }
    add(component){
       this.components.push(component)
    }
    render(){
        const main = super.render()
        main.append(...this.components.map(x=>x.render()))
        return main
    }
}


