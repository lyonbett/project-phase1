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
            const {image_url, name} = beer;
          //create an image element
          const img = document.createElement('img');
            //assign the image url to the image source
            img.src = image_url;

            //create a heading element
            const beerName = document.createElement('h3');
            //assign the beer name to the text
            beerName.textContent = name;

            //create a container to hold the image and name
            const card = document.createElement('div');
            card.className = 'card';
            card.append(img,beerName);
            //append the container to item container
            document.querySelector('.item-container').appendChild(card);
        })
      }
    //when the html page loads to the DOM
    document.addEventListener('DOMContentLoaded', () => {
      //invoke getBeer
      getBeer();
})

// create a like button element
const likeButton = document.createElement('button');
likeButton.className = 'like-button';
likeButton.textContent = 'Like';

// add event listener to like button
likeButton.addEventListener('click', () => {
  // perform some action when the like button is clicked
  console.log('Liked beer:', beer.name);
});

// append like button to card container
card.append(img, beerName, likeButton);



function search_name(name){
  
  fetch('https://api.punkapi.com/v2/beers?beer_name='+name)
  .then(response=>response.json())
  .then((list)=>{ console.log(list)})
}

function searchData(e){
  e.preventDefault()
  value = document.getElementById('beer_name').value;
  search_name(value)
}











