import React  from 'react';


const Header= (props) => { 

    return (
        <div className="jumbotron bg-warning d-flex justify-content-center">
        <img src={props.logo} alt="Logo of Studio Ghibli " />
    </div>
    );




}

export default Header;