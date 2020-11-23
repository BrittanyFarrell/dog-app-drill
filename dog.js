/* eslint-disable strict */
/* eslint-disable indent */

    const photo = 'https://dog.ceo/api/breeds/image/random';



function retrieveValue() {
    
    $('form').submit(event => {
        event.preventDefault();
        const value = $(event.currentTarget).find('input').val();

        let url = `${photo}/${value}`;

         //console.log(url);

        fetch(url).then((response) => response.json())
        .then((json) => {

           // console.log(json.message);

           let array = json.message;
           //console.log(array);


           displayDogPhotos(array);
        })
        .catch(err => console.log(err));
    });

}

function displayDogPhotos(array) {
    let html = '';
   // console.log(array.length);
    for (let x = 0; x < array.length; x++) {
        //console.log('so far, so good...');
        html += `<img src="${array[x]}" alt="Sorry, no dogs for you!" width="500px" height="500px">`;

    }
    $('main').html(html);
    console.log(html);
}

function main() {
    retrieveValue();
}

$(main);