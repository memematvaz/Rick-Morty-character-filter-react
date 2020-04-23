import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.characterObject.image}
                 alt={props.characterObject.name}
            />
            <h3>{props.characterObject.name}</h3>
            <p>{props.characterObject.species}</p>
            <p>{props.characterObject.name} appears in {props.characterObject.episode.lenght} episodes.</p>
            <p>Status: {props.characterObject.status}</p>
            <Link to="/">
                <span className="icon fas fa-times"></span>
              </Link>
        </div>
    )
}

export default CharacterDetails;
