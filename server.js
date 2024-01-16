const express = require('express')
const axios = require('axios')
const cors = require('cors')

app.use(cors())



const app = express();
const port = 3000



const url = "https://moviesverse1.p.rapidapi.com/movies/year/%7Byear%7D/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a4564eda00mshda6272279634f46p10f310jsn501d1234f374",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
};

app.get('/movies', async (req, res) => {
  try {
    console.log('Request received');
    const response = await axios.get(url,options);


    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});