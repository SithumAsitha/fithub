import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { store } from './Store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
