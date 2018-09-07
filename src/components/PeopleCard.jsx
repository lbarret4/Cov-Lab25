import React from 'react';

let PeopleCard = (props) => {

    let url = `https://ghibliapi.herokuapp.com/people/${props.id}`
    return (
        < div className="card bg-warning">
            <div className="card-header text-center">
                <h4> {props.name} </h4>
            </div>
            <div className="card-footer  d-flex justify-content-between align-items-center">
                Gender: {props.gender} <span>Age: <span className="badge badge-primary badge-pill text-center"> {props.age} </span></span>
            </div>
            <ul className="list-group list-group-flush ">
                <li className="list-group-item  bg-warning">Eye Color: {props.eyes}</li>
                <li className="list-group-item bg-warning">Hair Color: {props.hair}</li>
            </ul>
            <div className="card-body">
                <a href={url} className="card-link text-body">{props.name}'s JSON </a>
            </div>
        </ div>

    );



}

export default PeopleCard;