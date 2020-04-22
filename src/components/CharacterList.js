import React from 'react';
import Character from './Character.js';
//import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    console.log(props.inputValue)
    return (
        <ul>
        {props.data
            .filter(characterObject => props.inputValue === '' || characterObject.name.toLowerCase().includes(props.inputValue.toLowerCase()))
            .map(characterObject =>

            <li>

                    <Character key = {characterObject.id}
                               image={characterObject.image}
                               name={characterObject.name}
                               specie={characterObject.specie}
                    />

            </li>
            )}
        </ul>
    )
}

export default CharacterList;


