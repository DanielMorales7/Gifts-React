import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => { se desestructira para que solo quede eñ target
    const onInputChange = ({target}) => {

        //console.log(target.value);
        setInputValue(target.value)

    }

    const onSubmit = (event) => {

        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; // esto romperia la ejecución

        // onCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit (event) } >

            <input 
                type="text"
                inputMode="numeric"
                placeholder="Ingresa el tema de los Gifs que quieres buscar y presiona ENTER"
                value={ inputValue }
                // onChange = { (event) => onInputChange(event) } se puede acortar solo mandan la referencia por eso funciona onchange
                onChange = { onInputChange }
            />

        </form>
    )
}