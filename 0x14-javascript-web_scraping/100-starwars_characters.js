#!/usr/bin/node

const req = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
req.get(url, function (error, response, body) {
  if (error) console.log(error);
  const data = JSON.parse(body);
  for (const i of data.characters) {
    req.get(i, function (error, response, body) {
      if (error) console.log(error);
      const character = JSON.parse(body);
      console.log(character.name);
    });
  }
});
