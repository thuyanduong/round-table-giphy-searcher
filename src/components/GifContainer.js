import { useContext, useEffect } from 'react';
import GifContext from '../context/GifContext';
import Image from './Image';

function GifContainer() {

    let {gifArray, setGifArray, API_KEY} = useContext(GifContext)


    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`)
        .then(res => res.json())
        .then(gifData => {
            setGifArray(gifData.data);
        })
    }, []);

    return (
        <ul className='imageContainer'>
            {gifArray.map(gif => <Image url={gif.images.original.url} key={gif.title} title={gif.title}/> )}
        </ul>
    )
}

export default GifContainer