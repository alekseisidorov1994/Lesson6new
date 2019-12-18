import Component from '../Component'
import HtmlTemplate from './index.html'

import WrapComment from '../Post/wrapComment'
import AddComment from '../Post/addComment'

export default class Post extends Component{
    constructor(originalArgs={}){
        super('post')
        const args = {
            user: {
                name: 'NoName',
                family: 'NoFamily',
                image: 'Oops'
            },

            content: {
                description: '',
                image: [],
                tags: []
            },

            comments: [],

            ...originalArgs
        }
        this.user = {
            name: args.user.name,
            family: args.user.family,
            image: args.user.image
        }
        this.content ={
            image: args.content.image,
            description: args.content.description,
            tags: args.content.tags
        }
        this.comments = args.comments.map(x=>({
            user: {
                name: x.user.name,
                family: x.user.family,
                image: x.user.image,    
            },
            content: x.content
        }))
    }
    getHtmlElement(){
        
        return HtmlTemplate
        .replace(/{{user.name}}/g, this.user.name)
        .replace(/{{user.family}}/g, this.user.family)
        .replace(/{{user.image}}/g, this.user.image)
        .replace(/{{content.image}}/g, this.content.image)
        .replace(/{{content.description}}/g, this.content.description)
        .replace(/{{content.tags}}/g, this.content.tags.join(' '))
        
    }
    render(){
        const wrapComment = new WrapComment(this.comments)
        const addComment = new AddComment
        const main = super.render()
        main.append(wrapComment.render())
        main.append(addComment.render())
        return main
    }
}