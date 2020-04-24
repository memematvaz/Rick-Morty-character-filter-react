import React from 'react';

function onSubmit(event) {
    event.preventDefault()
  }

const FilterInput = (props) => {

    const updateInputValue = (event) => {
        props.handleInputValue(event.currentTarget.value)
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
        </form>
    )
}

export default FilterInput;