import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
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

    render() {
            let films = this.state.data.map((film) =>{
                return <Card title={film.title} rt= {film.rt_score} desc={film.description} direc={film.director} date={film.release_date} key={film.id} />
            });
        return (
            <div className="container">
                <div className="card-columns">
                    {films}
                </div>
            </div>



        );
    }















}


export default App;