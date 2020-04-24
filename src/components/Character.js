import React from 'react';
import alien from '../icons/alien.png';
import human from '../icons/human.png';

const Character = (props) => {
  return (
    <div id={props.key}>
      <img src={props.image} alt={props.name}/>
      <h2>{props.name}</h2>
      <img alt={props.specie} 
           src={props.specie === 'Human' ? human : alien }></img>
    </div>
  )
}

export default Character;
