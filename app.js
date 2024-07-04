// app.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Exemple de route GET
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Exemple de route utilisant Axios pour faire une requête HTTP
app.get('/data', async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=47.2173&lon=-1.5534&units=metric&appid=18a60266f1c11f783cbdca59ebf0e67d');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
