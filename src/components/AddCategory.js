import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')    
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length>2) {
        setCategories (e=>[inputValue,...e]);
            setInputValue('');
        
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            className='animate__animated animate__heartBeat' 
                placeholder='Buscar Gifs'
                type="text"
                // value={inputValue}
                onChange= {handleInputValue}
            ></input>
        </form>
    )


}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired

}


export default (AddCategory);
