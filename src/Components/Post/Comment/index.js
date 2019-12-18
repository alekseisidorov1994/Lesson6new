import Component from '../../Component'
import HtmlTemplate from './index.html'

export default class Comment extends Component{
    constructor(comment){
        super('comment')
        this.comment = comment
    }
    getHtmlElement(){
        return HtmlTemplate
        .replace(/{{name}}/g, this.comment.user.name)
        .replace(/{{family}}/g, this.comment.user.family)
        .replace(/{{image}}/g, this.comment.user.image)
        .replace(/{{content}}/g, this.comment.content)
    }
}
