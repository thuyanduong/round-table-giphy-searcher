import { useState } from 'react'
import App from '../components/App'
import GifContext from './GifContext'

export default function GifProvider(){

  const [gifArray, setGifArray] = useState(Array(0));
  const API_KEY = "PSVG2HdjaFLueJ1CPpQCHzu35F528gaY";

  return (
    <GifContext.Provider value={ {gifArray, setGifArray, API_KEY} }>
      <App />
    </GifContext.Provider>
  )
}