import React from 'react';

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
        </div>
    )
}

export default CharacterDetails;
