import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GifProvider from './context/GifProvider'

ReactDOM.render(
  <GifProvider/>,
  document.getElementById('root')
);
