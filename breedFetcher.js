// Print description of a cat breed based on the input from the command line argument
// Input format: node breedFetcher.js <Breed-name>

const request = require('request');

const arr = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + arr[0];

//const urlError = 'https://api.thecatapi.om/v1/breeds/search?name=' + arr[0];

console.log("URL is", url);

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(`Type of body: ${typeof body}`); // Print the type of the body fetched by the given url.
  //console.log('body:', body); // Print the HTML for the given url.
 
  const data = JSON.parse(body);
  console.log(`Type of parsed body: ${typeof data}`); // Print the type of the parsed body
  //console.log(data);
  
  if (data[0] && data[0].description) {
    console.log(`****** Description of the ${arr[0]} breed ******`);
    console.log(data[0].description);
  } else
    console.log(`No such breed exists`);
  
});