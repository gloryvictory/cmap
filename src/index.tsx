import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';
import "@esri/calcite-components"; // for typings
import "@esri/calcite-components/dist/calcite/calcite.css";
// import '@arcgis/core/assets/esri/themes/light/main.css'

import { setAssetPath } from "@esri/calcite-components/dist/components";

const calcite_assets = `${window.location.href}` 
setAssetPath(calcite_assets);

// setAssetPath(window.location.href);
// setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");


console.log(`my location ${calcite_assets}`)



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

