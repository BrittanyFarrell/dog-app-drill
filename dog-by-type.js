/* eslint-disable strict */
/* eslint-disable indent */

const photo = 'https://dog.ceo/api/breed/';



function retrieveValue() {
    
    $('form').submit(event => {
        event.preventDefault();
        const value = $(event.currentTarget).find('input').val();

        let url = `${photo}${value}/images`;

         //console.log(url);

        fetch(url).then((response) => response.json())
        .then((json) => {
            
             //console.log(json.message[0]);

           let html = `<img src="${json.message[0]}" alt="Sorry, we don't have any photos of this breed of dog." width="500px" height="500px">`;
           //console.log(html);


           $('main').html(html);
           console.log(html);
           
        })
        .catch(err => console.log(err));
    });

}

function displayDogPhotos(array) {
    let html = `<img src="${json.message[0]}" alt="Sorry, no dogs for you!" width="500px" height="500px">`;
  
    $('main').html(html);
    console.log(html);
}

function main() {
    retrieveValue();

}

$(main);