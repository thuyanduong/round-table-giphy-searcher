import { useState } from 'react'

function GifSearch(props) {
    const [input, setInput] = useState("");
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.getSearchResult(input)
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

export default GifSearch