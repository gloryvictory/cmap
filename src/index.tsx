import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();



// "start": "npm run build && node build/main",
// "build": "rimraf ./build && npx tsc",
