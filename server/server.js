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

app.get('/jokes/:type', (req, res) => {
    const jokeType = req.params.type;

    let jokeArray = jokes.filter((joke) => joke.type === jokeType);

    let typeJoke = jokeArray[Math.floor(Math.random()*jokeArray.length)];
    
    let newJokeType = {
        key: typeJoke.id,
        joke: typeJoke.joke,
        type: typeJoke.type,
    };

    res.send(newJokeType);


    // let thisJoke = currentJoke[0].type;

    // for (let i = 0; i < currentJoke.length; i++) {
        
    //     if (jokeType == thisJoke) {
    
    //         return res.status(200).send(currentJoke[i]);
    //     }
    // }

    
});

app.listen(8087, (error) => error ? console.log(error) : console.info('running on 8087'));
