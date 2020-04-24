import React from 'react';
import Character from './Character.js';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {

    const results = [ ...props.data ]
      
        .filter(characterObject => props.inputValue === '' || characterObject.name.toLowerCase().includes(props.inputValue.toLowerCase()));
    
    if(results.length===0) {
        return <p className="text-not-found">{`There is no character named ${props.inputValue}`}</p>}
    else{
        return(
            <ul className="main">
                {results
                    .sort((characterObject, characterObject2) => characterObject.name.localeCompare(characterObject2.name))
                    .map(characterObject =>
        
                    <li className="card"
                        key={characterObject.id}>
                        <Link to={`/character/${characterObject.id}`}>
                            <Character image={characterObject.image}
                                       name={characterObject.name}
                                       specie={characterObject.species}
                                       episode={characterObject.episode}
                            />
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
    

}
export default CharacterList;