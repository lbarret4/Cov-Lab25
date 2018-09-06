import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            < div className="card bg-light">
                <div className="card-header text-center">
                   <h4> {this.props.title} </h4>   
                </div>
                <div class="card-footer text-muted d-flex justify-content-between align-items-center"> 
                   Released: {this.props.date} <span>Rotten Tomato: <span className="badge badge-danger badge-pill text-center"> { this.props.rt}% </span></span>
                </div>
                <div className="card-body">
                    <p className="card-text text-right">Directed by {this.props.direc}</p>
                    <p className="card-text">{this.props.desc}</p>
                </div>
            </ div>

        );
    }


}

export default Card;