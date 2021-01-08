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
import Up from '../../assets/images/thumbup.png';
import Down from '../../assets/images/thumbdown.png';
import Crickets from '../../assets/images/cricketshort.mp3';
import Cheer from '../../assets/images/cheer.mp3';
import {Link} from 'react-router-dom';
import Ashley from '../../assets/images/ashley.png';
import Lauren from '../../assets/images/lauren.png';
import Hussein from '../../assets/images/hussein.png';
import Nolan from '../../assets/images/nolan.png';
import Eric from '../../assets/images/eric.png';



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
    };
    
    newJoke = () => {
        axios.get(url)
        .then(response => {
          this.setState({
            joke: response.data
          })
        })
        .catch(err => {
          console.log(err)
        });
    };

    componentDidUpdate() {

      let {match: {params}} = this.props;
      let type = params.type;   
  
      axios.get(url + '/' + type)             
      .then(res => {
        console.log(res)
        if (type !== this.state.joke.type) {        
          this.setState({
              joke: res.data
            });
        }
      })
      .catch(err => {
        console.log(err)
      });;
  };

  jokeType = (e) => {

    e.preventDefault();
  }
    

    render(){

      const cheer = new Audio(Cheer);
      const crickets = new Audio(Crickets);


        return (
            <section className="home">
              <div className="home__stage">
                <h1 className="home__header">Jon's Comedy Special</h1>
                <img src={Lauren} className="home__educator home__educator1" alt=""/>
                <img src={Nolan} className="home__educator home__educator2" alt=""/>
                <img src={Eric} className="home__educator home__educator3" alt=""/>
                <img src={Hussein} className="home__educator home__educator4" alt=""/>
                <img src={Ashley} className="home__educator home__educator5" alt=""/>

                <div className="home__joke-container">
                        <img className="home__jon" src={Jon} alt="jon"/>
                    <p className="home__joke">{this.state.joke.joke}</p>
                    <h3 className="home__type-header">Select Joke By Type:</h3>
                    <form onSubmit={() => this.jokeType()} className="home__type-form" id="typeform">
                    <Link to={'/jokes/webdev'}><button type="submit" className="home__web-button">Webdev</button></Link>
                    <Link to={'/jokes/pun'}><button type="submit" className="home__pun-button">Puns</button></Link>
                    <Link to={'/jokes/corny'}><button type="submit" className="home__corny-button">Corny</button></Link>
                    <Link to={'/jokes/one-liner'}><button type="submit" className="home__oneliner-button">One-Liners</button></Link>
                    </form>
                    <Link to={'/'}><button onClick={() => this.newJoke()}className="home__button">RANDOM JOKE</button></Link>
                    <img src={Up} className="home__up" alt="" onClick={() => cheer.play()}></img>
                    <img src={Down} className="home__down" alt="" onClick={() => crickets.play()}></img>
                </div>
              </div>
              <div className="home__students">
                <div>
                    <img src={Ryan} className="home__student" alt=""/>
                    <img src={James} className="home__student" alt=""/>
                    <img src={Ari} className="home__student" alt=""/>
                    <img src={Anjali} className="home__student" alt=""/>
                    <img src={Amy} className="home__student" alt=""/>
                    <img src={Ian} className="home__student" alt=""/>
                    <img src={CJ} className="home__student" alt=""/>
                    <img src={Drake} className="home__student" alt=""/>
                    <img src={Edro} className="home__student" alt=""/>
                    <img src={Ethan} className="home__student" alt=""/>
                    <img src={Chris} className="home__student" alt=""/>
                    <img src={Jas} className="home__student" alt=""/>
                    <img src={Jim} className="home__student" alt=""/>
                    <img src={Mark} className="home__student" alt=""/>
                    <img src={Mike} className="home__student" alt=""/>
                    <img src={Orest} className="home__student" alt=""/>
                    <img src={Patti} className="home__student" alt=""/>
                    <img src={Piyush} className="home__student" alt=""/>
                    <img src={TJ} className="home__student" alt=""/>
                    <img src={David} className="home__student home__david" alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home


// <form>
// <input className="home__search-input" type="text" name="search" placeholder="Search by keyword"></input>
// <button className="home__search-button">Search</button>
// </form>