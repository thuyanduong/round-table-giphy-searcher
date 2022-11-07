import NavBar from './NavBar'
import GifContainer from './GifContainer'
import GifSearch from './GifSearch'
import { useState, useEffect } from 'react'




function App() {
  return (
    <div>
      <NavBar color='white' title="Giphy Search" />
      <div className="ui container">
        <GifSearch/>
        <br />
        <GifContainer />
      </div>
    </div>
  );
}

export default App;
