import React from 'react';

const FilterInput = (props) => {

    const updateInputValue = (event) => {
        props.handleInputValue(event.currentTarget.value)
    }

    return (
        <form>
            <label htmlFor="search-input">
                <i class="fas fa-search"></i>
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