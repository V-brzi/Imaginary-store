import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {HashRouter} from "react-router-dom";
import {ContextProvider} from "./Contex";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ContextProvider>
  </React.StrictMode>
)
