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
                    <Character key = {characterObject.id}
                               image={characterObject.image}
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

/*
            <li key={drinkObj.idDrink}>
              <Link to={`/drink/${drinkObj.idDrink}`}>
                <Drink
                  img={drinkObj.strDrinkThumb}
                  name={drinkObj.strDrink}
                />
              </Link>
            </li>
          )}*/
    
/*const CharacterList = (props) => {
  
      return (
        <ul>
        {props.data
            .filter(characterObject => props.inputValue === '' || characterObject.name.toLowerCase().includes(props.inputValue.toLowerCase()))
            .map(characterObject =>

            <li>

                    <Character key = {characterObject.id}
                               image={characterObject.image}
                               name={characterObject.name !== props.inputValue ? <p>hola</p> : characterObject.name}
                            
                               specie={characterObject.species}
                    />

            </li>
            )}
        </ul>
      );
    }
  export default CharacterList;
  
*/