const request = require('request');
const searchBread = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchBread}`;

if (searchBread) {
    
  request(url,(error, response, body) => {
    if (error) {
      console.log(`Error in url: ${error}`);
    } else {
      const data = JSON.parse(body);
      if (Object.keys(data).length !== 0) {
        console.log("-------------------------------------------------");
        console.log(data[0].description);
      } else {
        console.log("Breed Not Found");
      }
    }
  });
} else {
  console.log("please enter breed name");
}
