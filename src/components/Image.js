function Image(props) {
    return (
        <div className="eachGif">
            <img height="400" width="400" src={props.url} alt={props.title}></img>
            <h6>{props.title}</h6>
        </div>
    )
}


export default Image