import React from 'react';

function onSubmit(ev) {
    ev.preventDefault()
  }

const FilterInput = (props) => {

    const updateInputValue = (event) => {
        props.handleInputValue(event.currentTarget.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search-input">
                <i className="fas fa-search"></i>
            </label>
            <input type="text" 
                   value={props.value} 
                   onChange={updateInputValue}
                   placeholder="Search characters..."
            />
        </form>
    )
}

export default FilterInput;