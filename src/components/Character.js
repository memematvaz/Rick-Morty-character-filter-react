import React from 'react';


const Character = (props) => {
  return (
    <div id={props.key} className="card-character">
      <img src={props.image} alt={props.name} className="card-img"/>
      <div className="card-text-container">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-specie">{props.specie}</p>
      </div>
    </div>
  )
}

export default Character;
