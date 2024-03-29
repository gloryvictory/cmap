import React, { useState } from "react";
// import "@esri/calcite-components/dist/components/calcite-button";
// import "@esri/calcite-components/dist/components/calcite-icon";
// import "@esri/calcite-components/dist/components/calcite-slider";


// import {
//   CalciteButton,
//   CalciteSlider,
// } from "@esri/calcite-components-react";
// import "@esri/calcite-components/dist/calcite/calcite.css";
// import "@esri/calcite-components";


import Header from "./Components/UI/Header";
import Map from "./Components/UI/Map";
import LeftSideBar from "./Components/UI/LeftSideBar";
// export interface IProps {
//   view?: ;
// }
// const App: React.FC<IProps> = ({view}) =>  {

const App: React.FC = ({}) =>  {

  
  // const LuId = new URLSearchParams(window.location.search).get("luid")  //http://localhost:3000/?luid=123

  const params = new URLSearchParams(window.location.search)
  const lat_ = parseFloat(params?.get("lat") ?? '0')  // http://localhost:3000/?lat=123.23
  const lon_ = parseFloat(params?.get("lon") ?? '0')  // http://localhost:3000/?lon=123.433
  

  console.log(`Lat ${lat_}`)
  console.log(`Lon ${lon_}`)

  return (
    <>
      <Header/>
      <LeftSideBar/>
      <Map lat={lat_} lon={lon_} />
    </>
  );
}

export default App;
