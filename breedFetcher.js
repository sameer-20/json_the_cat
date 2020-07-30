// Print description of a cat breed based on the input from the command line argument


const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback(error,null);
    }
    
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log(`Type of body: ${typeof body}`); // Print the type of the body fetched by the given url.
    //console.log('body:', body); // Print the HTML for the given url.
   
    const data = JSON.parse(body);
    //console.log(`Type of parsed body: ${typeof data}`); // Print the type of the parsed body
    //console.log(data);
    
    if (data[0] && data[0].description) {
      callback(null,data[0].description);
    } else
      callback(`No such breed exists`, null);
  });

};

module.exports = { fetchBreedDescription };