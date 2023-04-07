//As a user, when i first open up the application,i want to see a list of items.
//each item
//Will go into a container and will contan:
//an image
//a name
//this item will be appended to the item container
//implement getBeer
const getBeer = () => {
  //fetch data from PUNK API
  fetch(' https://api.punkapi.com/v2/beers?per_page=80')
    //then grap the response and convert to JSON
    .then(resp => resp.json())
    //then render the beer data
    .then(renderBeer)
}
//implement renderBeer
const renderBeer = beerArray => {
  //for each beer from fetch
  beerArray.forEach(beer => {
    console.log(beer);
    const { image_url, name } = beer;
    //create an image element
    const img = document.createElement('img');
    //assign the image url to the image source
    img.src = image_url;

    //create a heading element
    const beerName = document.createElement('h3');
    //assign the beer name to the text
    beerName.textContent = name;

    // create a like button element
    const likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.innerHTML = '<i id="like_button" class="far fa-heart"> Like</i>';

    // create a counter for the like button
    const likeCounter = document.createElement('span');
    likeCounter.className = 'like-counter';
    likeCounter.innerText = '0';


    //create a container to hold the image and name
    const card = document.createElement('div');
    card.className = 'card';
    card.append(img, beerName, likeButton, likeCounter);

    // add an event listener to the like button
    let likes = 0;
    likeButton.addEventListener('click', () => {
      likes++;
      likeCounter.innerText = likes;
      likeButton.innerHTML = '<i  class="fas fa-heart"></i>Liked';
    });

    //append the container to item container
    document.querySelector('.item-container').appendChild(card);
  })
}
//when the html page loads to the DOM
document.addEventListener('DOMContentLoaded', () => {
  //invoke getBeer
  getBeer();
}