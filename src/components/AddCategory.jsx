import { useState } from "react";
export function AddCategory({onNewCategory}) {

    const [inputValue, setInputValue] = useState();

    const onInpuntChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmitForm = (event) =>{
        event.preventDefault();
        if(inputValue.trim() <= 1) return;

       // setCategories(categories=>[...categories,inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={ onSubmitForm }>
        <input
        type="text"
        placeholder="buscar gifs" 
        value = { inputValue } 
        onChange={ onInpuntChange }/>
    </form>
  )
}
