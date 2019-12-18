import Post from '../../Post'
import HtmlTemplate from './index.html'

export default class PostCarousel extends Post{
    constructor(args={}){
        super(args)
    }
    getHtmlElement(){
       this.createCarousel()
        return HtmlTemplate
        .replace(/{{user.name}}/g, this.user.name)
        .replace(/{{user.family}}/g, this.user.family)
        .replace(/{{user.image}}/g, this.user.image)
        .replace(/{{content.image}}/g, this.createCarousel())
        .replace(/{{content.description}}/g, this.content.description)
        .replace(/{{content.tags}}/g, this.content.tags.join(' '))
    }
    createCarousel(){
        const mass = []
        for( const e of this.content.image){
            const divELem = document.createElement('img')
            divELem.setAttribute('src',e)
            mass.push(divELem.outerHTML)
        }
        return mass.join(' ')
    }
}