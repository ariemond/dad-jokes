import React from 'react';
import Styles from '../Home/home.scss';
import Jon from '../../assets/images/joncomic-removebg-preview.png';
import Amy from '../../assets/images/amy.png';
import Ari from '../../assets/images/ari.png';
import James from '../../assets/images/james.png';
import Anjali from '../../assets/images/anjali.png';
import CJ from '../../assets/images/cj.png';
import Ian from '../../assets/images/ian.png';
import Jas from '../../assets/images/jaspreet.png';
import Mark from '../../assets/images/mark.png';
import Ryan from '../../assets/images/ryan.png';
import Patti from '../../assets/images/patti.png';
import Orest from '../../assets/images/orest.png';
import Jim from '../../assets/images/jim.png';
import Drake from '../../assets/images/drake.png';
import Edro from '../../assets/images/edro.png';
import TJ from '../../assets/images/tj.png';
import Ethan from '../../assets/images/ethan.png';
import David from '../../assets/images/david.png';
import Piyush from '../../assets/images/piyush.png';
import Chris from '../../assets/images/chris.png';
import Mike from '../../assets/images/mike.png';
import axios from 'axios';
import Top from '../../assets/images/jontop.png';
import Bottom from '../../assets/images/jonbottom.png';

// const url = 'https://api.chucknorris.io/jokes/random'

const url = 'http://localhost:8087/jokes';

class Home extends React.Component {

    state = {
        joke: []
    }


    componentDidMount(){
    
        axios.get(url)
        .then(response => {
            console.log(response.data)
          this.setState({
            joke: response.data
          })
        })
        .catch(err => {
          console.log(err)
        });
    }

    newJoke = () =>{

        axios.get(url)
        .then(response => {
            console.log(response.data)
          this.setState({
            joke: response.data
          })
        })
        .catch(err => {
          console.log(err)
        });
    }
    

    render(){

        return (
            <section className="home">
                <h1 className="home__header">Jon's Comedy Special</h1>
                <div className="home__joke-container">
                        <img className="home__jon" src={Jon} alt="jon"/>
                    <p className="home__joke">{this.state.joke.joke}</p>
                    <button onClick={() => this.newJoke()} className="home__button">NEW JOKE!</button>
                </div>
                
                <div className="home__students">
                    <img src={Ryan} className="home__student" alt=""/>
                    <img src={James} className="home__student" alt=""/>
                    <img src={Ari} className="home__student" alt=""/>
                    <img src={Anjali} className="home__student" alt=""/>
                    <img src={Amy} className="home__student" alt=""/>
                    <img src={Chris} className="home__student" alt=""/>
                    <img src={CJ} className="home__student" alt=""/>
                    <img src={Drake} className="home__student" alt=""/>
                    <img src={Edro} className="home__student" alt=""/>
                    <img src={Ethan} className="home__student" alt=""/>
                    <img src={Ian} className="home__student" alt=""/>
                    <img src={Jas} className="home__student" alt=""/>
                    <img src={Jim} className="home__student" alt=""/>
                    <img src={Mark} className="home__student" alt=""/>
                    <img src={Mike} className="home__student" alt=""/>
                    <img src={Orest} className="home__student" alt=""/>
                    <img src={Patti} className="home__student" alt=""/>
                    <img src={Piyush} className="home__student" alt=""/>
                    <img src={TJ} className="home__student" alt=""/>
                </div>
            </section>
        )

    }
}

export default Home


//let's have this as a space where jon can practice his dad jokes
//he can either choose a random joke
//or he can search by type of joke
//hover over the students to make them laugh
//random timeout for the students to laugh?