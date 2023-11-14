// Un hook es una función

import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    // use Effect se utiliza para lanzar efectos secundarios => proceso que se ejecuta cuando algo suceda

    useEffect( () => {
        
        //en el use Effect no se puede hacer async
        getGifs(category)
            .then( newImages => { setImages(newImages); setIsloading(false) });

        
        // console.log(newImages);

    },[]);

    return {
        images,
        isLoading
    }
}
