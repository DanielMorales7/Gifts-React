// Funtional component

import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {

  //variable que se utiliza - función que nota el cambio - valor inicial 
  const [categories, setCategories] = useState([ 'Demon Slayer']);

  const onAddCategory = (newCategory) => {

    //validamos que la categoría no exista para que no haya tema con las llave

    if( categories.includes( newCategory ) ) return;

    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    //onCategorie( cat => [...cat,'Naruto']);
  }

  return (
    <>
        {/*  Título */}
        <div>GifExpertApp</div>
        
        {/* Input */}
        <AddCategory
        
        onNewCategory = { (event) => onAddCategory(event) }
        // onCategories = { setCategories } 
        
        />

        {/* Listado de Gif */}
        
            { categories.map( category => {
                //vamos a regresar un objeto porque tiene más de un elemento
                return (
                  // <div key={ category } >
                  //    <h3>{category}</h3>
                  //    <li>{category}</li> 
                  // </div> 
                  <GifGrid key={category} category={category}/>
                )

              }) 
            }
          {/* Gif item */}

        {/* gNJ4tEDeNyXXjy4nl7OK8jX8S78NcnWC */}
    </>
  )
}

