export const getGifs = async (category) =>{

    const limit = 10;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=gNJ4tEDeNyXXjy4nl7OK8jX8S78NcnWC&q=${category}&limit=${limit}`;

    const resp   = await fetch(url);

    //igualamos al arreglo para que siempre traiga data
    const {data = []} = await resp.json();

    console.log(data)

    const gifs = data.map( img => {
        return {
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}