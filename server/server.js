const express = require('express');
const app = express();
const jokes = require('./data.json');
const cors = require('cors');

app.use(cors());


app.get('/jokes', (req, res) => {

    let joke = jokes[Math.floor(Math.random()*jokes.length)];
    
    let newJoke = {
        key: joke.id,
        joke: joke.joke,
        type: joke.type,
    };

    res.send(newJoke);
});



app.listen(8087, (error) => error ? console.log(error) : console.info('running on 8087'));
