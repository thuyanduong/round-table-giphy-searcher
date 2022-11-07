import Image from './Image';

function GifContainer(props) {
    console.log("this is container props",props)
    return (
        <ul className='imageContainer'>
            {props.gifArray.map(gif => <Image url = {gif['images']['original']['url']} key = {gif['title']} /> )}
        </ul>
    )
}

export default GifContainer