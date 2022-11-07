import NavBar from './NavBar'
import GifContainer from './GifContainer'
import GifSearch from './GifSearch'
import { useState, useEffect } from 'react'

const API_KEY = "PSVG2HdjaFLueJ1CPpQCHzu35F528gaY";



function App() {

  //effects
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`)
      .then(res => res.json())
      .then(gifData => {
        console.log("inside useEffect", gifData['data'])
        handleGifArray(gifData['data']);
      })
  }, []);

  const [gifArray, setGifArray] = useState(Array(0));

  function handleGifArray(array) {
    setGifArray(array);
  };

  function getSearchResult(input) {
    console.log(input)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`)
      .then(res => res.json())
      .then(gifData => {
        console.log(gifData['data'])
        handleGifArray(gifData['data'])
      })
  }

  return (
    <div>
      <NavBar color='white' title="Giphy Search" />
      <div className="ui container">
        <GifSearch getSearchResult={getSearchResult} />
        <br />
        {gifArray && <GifContainer gifArray={gifArray} />}
      </div>
    </div>
  );
}

export default App;
