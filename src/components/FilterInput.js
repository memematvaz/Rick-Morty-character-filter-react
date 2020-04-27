import React from 'react';

function onSubmit(event) {
    event.preventDefault()
  }

const FilterInput = (props) => {

    const updateInputValue = (event) => {
        props.handleInputValue(event.currentTarget.value)
    }

    const updateEpisode = (event) => {
        props.handleInputEpisode(event.currentTarget.value)
    }
    return (
        <form onSubmit={onSubmit} className="form-search">
            <label htmlFor="search-input" className="search-label">
                <i className="fas fa-search"></i>
            </label>
            <input className="search-input"
                   type="text" 
                   value={props.value} 
                   onChange={updateInputValue}
                   placeholder="Search characters..."
            />
            <input type="number"
                    value={props.valueNumber}
                    onChange={updateEpisode}/>
        </form>
    )
}

export default FilterInput;