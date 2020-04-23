import React from 'react';
import Character from './Character.js';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    console.log(props.inputValue)
    return (
        <ul>
        {props.data
            .filter(characterObject => props.inputValue === '' || characterObject.name.toLowerCase().includes(props.inputValue.toLowerCase()))
            .map(characterObject =>

            <li key={characterObject.id}>
                <Link to={`/character/${characterObject.id}`}>
                    <Character image={characterObject.image}
                               name={characterObject.name}
                               specie={characterObject.species}
                    />
                </Link>
            </li>
            )}
        </ul>
    )
}





export default CharacterList;
