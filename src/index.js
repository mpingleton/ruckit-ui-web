import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProvider from './providers/AppProvider';

ReactDOM.render(
  <React.StrictMode><AppProvider /></React.StrictMode>,
  document.getElementById('root')
);
