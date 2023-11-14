import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../../helpers/getGifs";

export const GifGrid = ({category}) => {
  
    // SE HARÁ UN CUSTOME HOOK PARA MANDAR A LLAMAR LAS IMÁGENES

    const { images, isLoading } = useFetchGifs( category );

    console.log({ isLoading});

    // const [images, setImages] = useState([]);

    // // use Effect se utiliza para lanzar efectos secundarios => proceso que se ejecuta cuando algo suceda

    // useEffect( () => {
        
    //     //en el use Effect no se puede hacer async
    //     getGifs(category)
    //         .then( newImages => { setImages(newImages) });

    //     // console.log(newImages);

    // },[]);

    
    //si se deja el arreglo vacío solo se va adisparar una vez, cuando se crea el componente


    return (
        <>
            <h3>{category}</h3>

            {
                // los parentesís son un return explicito, React no renderiza null
                // isLoading
                // ? (<h2>Cargando...</h2>)
                // : null

                isLoading && (<h2>Cargando...</h2>) // => esto es un AND lógico, solo ejecuta si es true
            }
            

            <div className="card-grid">
                {/* images.map */}
                {/* { images.map(img => { */}
                { 
                images.map((image) => (
                    <GifItem 
                    // el operador spreed manda todos los props
                        key={image.id}
                        {...image}
                    />
                ))
                //    return <li key={id}>{title}</li>;
                
                }
                
            </div>


            {/* <h5> {counter} </h5> */}

            {/* <button onClick={ () => setCounter(counter+1)}>+1</button> */}
        </>
    )
}
