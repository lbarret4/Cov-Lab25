import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card'
import logo from '../logo.png'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasLoadedFilms: false
        }
        this.handleLoadFilms=this.handleLoadFilms.bind(this);
    }

    async componentDidMount() {
        try {
            let results = await fetch("https://ghibliapi.herokuapp.com/films");
            results = await results.json();

            this.setState({
                data: results
            })

        } catch (error) {
            console.log(error);
        }

    }

    handleLoadFilms(e){
        e.preventDefault();
        this.setState({
            hasLoadedFilms:true
        })

    }

    render() {
        let films = this.state.data.map((film) => {
            return <Card title={film.title} rt={film.rt_score} desc={film.description} direc={film.director} date={film.release_date} key={film.id} />
        });

        if (this.state.hasLoadedFilms) {
            return (

                <div className="container">
                    <div class="jumbotron bg-warning d-flex justify-content-center">
                        <img src={logo} alt="Logo of Studio Ghibli " />
                    </div>
                    <div className="card-columns">
                        {films}
                    </div>
                </div>
            );
        } else {
            return (

                <div className="container">
                    <div class="jumbotron bg-warning d-flex justify-content-center">
                        <img src={logo} alt="Logo of Studio Ghibli " />
                    </div>
                    <button type="button" class="btn btn-dark mb-2" onClick={this.handleLoadFilms}>Load Films</button>
                </div>



            );

        }

    }















}


export default App;