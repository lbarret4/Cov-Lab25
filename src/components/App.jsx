import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './FilmCard'
import PeopleCard from './PeopleCard'
import logo from '../logo.png'
import Header from './Header'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasLoaded: false,
            cardtype: "",
            isLoading: false
        }
        this.handleLoaded = this.handleLoaded.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    /*   async componentDidMount() {
          try {
              let results = await fetch("https://ghibliapi.herokuapp.com/films");
              results = await results.json();
  
              this.setState({
                  data: results
              })
  
          } catch (error) {
              console.log(error);
          }
  
      } */

    async loadData(field) {
        let url = `https://ghibliapi.herokuapp.com/${field}`;
        try {
            let results = await fetch(url);
            results = await results.json();
            this.setState({
                hasLoaded: true,
                data: results,
                isLoading: false
            })

        } catch (error) {
            console.log(error);
        }
    }

    handleLoaded(field, e) {
        e.preventDefault();
        this.loadData(field);
        this.setState({
            cardtype: field,
            isLoading: true
        })

    }
    
    handleBack(e){
        e.preventDefault();
        this.setState({
            hasLoaded:false
        })

    }



    render() {
        let cards;
        if (this.state.cardtype === "films") {
            cards = this.state.data.map((film) => {
                return <FilmCard title={film.title} rt={film.rt_score} desc={film.description} direc={film.director} date={film.release_date} key={film.id} />
            });
        } else if (this.state.cardtype === "people") {
            cards = this.state.data.map((people) => {
                
                return <PeopleCard name={people.name} gender={people.gender} age={people.age} hair={people.hair_color} eyes={people.eye_color} id={people.id} key={people.id}/>


            })
        }


        if (this.state.hasLoaded) {
            return (

                <div className="container">
                    < Header logo={logo} />
                    <button type="button" className="btn btn-dark mb-2" onClick={this.handleBack}>Go Back</button>
                    <div className="card-columns">
                        {cards}
                    </div>
                </div>
            );
        } else if (this.state.isLoading) {
            return (
                <div className="container">
                    < Header logo={logo} />
                    <h1 className="display-1">Loading....</h1>
                </div>
            );

        } else {
            return (

                <div className="container">
                    < Header logo={logo} />
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-dark mb-2" onClick={this.handleLoaded.bind(this, 'films')}>Load Films</button>
                        <button type="button" className="btn btn-dark mb-2" onClick={this.handleLoaded.bind(this, 'people')}>Load People</button>
                    </div>

                </div>



            );

        }

    }















}


export default App;