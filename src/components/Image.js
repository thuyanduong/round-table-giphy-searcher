function Image(props) {
    console.log("this is the image url", props.url)
    return (
        <div className="eachGif">
            <img height="400" width="400" src={props.url} alt={props.key}></img>
            <h6>{props.key}</h6>
        </div>
    )
}


export default Image