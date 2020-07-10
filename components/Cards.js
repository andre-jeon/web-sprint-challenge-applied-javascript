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
})
.catch(err => {
    console.log(err)
})

function articleMaker(data){

    let mainCard = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    let authorName = document.createElement('span');

    mainCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    author.appendChild(imageContainer)
    author.appendChild(authorName)
    imageContainer.appendChild(image)



    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    span.textContent = "By " + data.authorName;

    //connect elements

    //return
    return cardDiv;

} 