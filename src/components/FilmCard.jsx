import React from 'react';

let FilmCard = (props) => {




    return (
        < div className="card bg-warning">
            <div className="card-header text-center">
                <h4> {props.title} </h4>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                Released: {props.date} <span>Rotten Tomato: <span className="badge badge-danger badge-pill text-center"> {props.rt}% </span></span>
            </div>
            <div className="card-body">
                <p className="card-text text-right">Directed by {props.direc}</p>
                <p className="card-text">{props.desc}</p>
            </div>
        </ div>

    );



}

export default FilmCard;