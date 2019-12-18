import fakeDate from './fakeDate.json'

import Applicaton from './Applicaton'
import Header from './Components/Header'
import Container from './Components/Container'
import Post from './Components/Post'
import PostCarousel from './Components/Post/postCarousel'
import Pages from './Pages/Pages'

const container = new Container
for (const post of fakeDate.posts) {
    if (post.content.image.length <= 1) {
        container.add(new Post(post))
    } else {
        container.add(new PostCarousel(post))
    }

}

const app = new Applicaton({
    root: document.querySelector('#app')
})

app.router.add(new Pages('/', [new Header, container]))


app.update()