import React from 'react';
import Character from './Character.js';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    console.log(props.inputValue)
    if(characterObject => props.data.includes(characterObject.name)) {
        
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
    else{
     return( `There is no character named ${props.inputValue}`)
       
    
}

}
export default CharacterList;

/*if(props.data.length !== props.inputValue){
        return (`There is no character named ${props.inputValue}`)
    }else{
     return(
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
*/