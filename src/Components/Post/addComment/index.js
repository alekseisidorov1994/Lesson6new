import Component from '../../Component'
import HtmlTemplate from './index.html'

export default class AddComment extends Component{
    constructor(){
        super('addComment')
    }
    getHtmlElement(){
        return HtmlTemplate
    }
    
}


