// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


import axios from 'axios'
console.log(axios)

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(res => {

    console.log(res)
    const article1 = res.data.articles.bootstrap
    const article2 = res.data.articles.javascript
    const article3 = res.data.articles.jquery
    const article4 = res.data.articles.node
    const article5 = res.data.articles.technology

    article1.forEach((item) => {
        articleContainer.appendChild(articleMaker(item))
    })

    article2.forEach((item) => {
        articleContainer.appendChild(articleMaker(item))
    })

    article3.forEach((item) => {
        articleContainer.appendChild(articleMaker(item))
    })

    article4.forEach((item) => {
        articleContainer.appendChild(articleMaker(item))
    })

    article5.forEach((item) => {
        articleContainer.appendChild(articleMaker(item))
    })

})

.catch(err => {
    console.log(err)
})

const articleContainer = document.querySelector('div.cards-container')

function articleMaker(obj){

    const mainCard = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    const logHeadline = document.createElement('div')

    mainCard.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')

    author.appendChild(imageContainer)
    author.appendChild(authorName)
    imageContainer.appendChild(image)
    mainCard.appendChild(author)
    mainCard.appendChild(headline)
    mainCard.appendChild(logHeadline)

    image.src = obj.authorPhoto
    authorName.textContent = obj.authorName
    headline.textContent = obj.headline

    // logHeadline.textContent = obj.headline

    mainCard.addEventListener('click', () => {
        console.log(obj.headline)
    })


    return mainCard;
}