import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
       // console.log(event.target.value)
        setInputValue(event.target.value)       
    }

    const onSubmit = (event) => {
        event.preventDefault()
        //console.log(inputValue)
        if (inputValue.trim().length <= 1) return
        setCategory(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit= { onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs...-->"
                value={inputValue}
                onChange={ onInputChange }
            />   
        </form>     
    );    
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

export default AddCategory