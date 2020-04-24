import React from 'react';
import { Link } from 'react-router-dom';
import alien from '../icons/alien.png';
import human from '../icons/human.png';
import dead from '../icons/dead.png';
import alive from '../icons/live.png';

const CharacterDetails = (props) => {
    console.log(props)
    return(
        <div>
            <Link to="/">
                <span className="icon fas fa-times"></span>
            </Link>
            <img src={props.characterObject.image}
                 alt={props.characterObject.name}
            />
            <h3>{props.characterObject.name}</h3>
            <p>{`${props.characterObject.name} appears in ${props.characterObject.episode.lenght} episodes.`}</p>
            <img alt={props.characterObject.species} 
                 src={props.characterObject.species === 'Human' ? human : alien }></img>
            <img alt={props.characterObject.status}    
                 src={props.characterObject.status === 'Alive' ? alive : dead }></img>
     
        
        </div>
    )
}

export default CharacterDetails;
