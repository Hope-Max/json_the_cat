const request = require('request');

const breedFetcher = function(url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }

    const data = JSON.parse(body);
    if (!data.length) {
      console.log('The breed queried is not found');
      return;
    }
    console.log(data[0].description);
  });
};

const nameOfBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${nameOfBreed}`;
breedFetcher(url);