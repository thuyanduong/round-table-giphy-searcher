import { useState, useContext } from 'react'
import GifContext from '../context/GifContext';

function GifSearch() {
    const [input, setInput] = useState("");

    let {setGifArray, API_KEY} = useContext(GifContext)
    
    function getSearchResult(input) {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`)
        .then(res => res.json())
        .then(gifData => {
            setGifArray(gifData.data)
        })
    }

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                getSearchResult(input)
            }}>
                <label htmlFor="searchInput">Enter a Search Term </label>
                <input type="text" className="form-control" id="searchInput" value={input} onChange={(event) => {
                    setInput(event.target.value)
                }} />
                <input type="submit" className='submitButton' />
            </form>
        </div>
    )
}

//Controlled Component     form <==> state
export default GifSearch