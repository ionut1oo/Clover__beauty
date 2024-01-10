import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import { BrowserRouter } from'react-router-dom';
import '../src/styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Clover__beauty'>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

