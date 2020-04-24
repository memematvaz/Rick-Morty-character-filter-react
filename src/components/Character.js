import React from 'react';


const Character = (props) => {
  return (
    <div id={props.key}>
      <img src={props.image} alt={props.name}/>
      <h2>{props.name}</h2>
      <p>{props.specie}</p>
    </div>
  )
}

export default Character;
