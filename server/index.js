const express = require('express');
const axios = require('axios');
const typeDefs = require('./schema');
require('dotenv').config()

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/movies', async (req, res) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  res.send(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})