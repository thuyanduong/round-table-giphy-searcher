function GifSearch(){
    return (
        <div>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" />
            <button type="button" className="btn btn-success">Search</button>
        </div>
    )
}

export default GifSearch
