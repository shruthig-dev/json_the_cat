const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (breedName) {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    request(url,(error, response, body) => {
      if (error) {
        if (error.errno === "ENOTFOUND") {
          callback("Entered url is Invalid.Please enter valid Url");
        } else {
          callback(error);
        }
      } else {
        const data = JSON.parse(body);
        if (Object.keys(data).length !== 0) {
          console.log("-------------------------------------------------");
          callback(null,data[0].description);
        } else {
          callback("Breed Not Found");
        }
      }
    });
  } else {
    callback("please enter breed name");
  }
};

module.exports = { fetchBreedDescription };