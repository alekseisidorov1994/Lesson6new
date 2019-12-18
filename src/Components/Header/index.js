import Component from '../Component'
import HtmlTemplate from './index.html'

export default class Header extends Component{
    constructor(){
        super('header')
    }
    getHtmlElement(){
        return HtmlTemplate
    }
}