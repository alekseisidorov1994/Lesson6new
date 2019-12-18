import Component from '../../Component'
import HtmlTemplate from './index.html'

import Comment from '../Comment'

export default class wrapComment extends Component{
    constructor(comments){
        super('wrapComment')
        this.comments = comments
    }
    getHtmlElement(){
        return HtmlTemplate
    }
    render(){
        const main = super.render()
        main.append(...this.comments.map(x=> new Comment(x).render()))
        return main
    }
}