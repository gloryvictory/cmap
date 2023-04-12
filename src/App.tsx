import React, { useState } from "react";
// import "@esri/calcite-components/dist/components/calcite-button";
// import "@esri/calcite-components/dist/components/calcite-icon";
// import "@esri/calcite-components/dist/components/calcite-slider";


// import {
//   CalciteButton,
//   CalciteSlider,
// } from "@esri/calcite-components-react";
import "@esri/calcite-components/dist/calcite/calcite.css";


import Header from "./Components/UI/Header";
import Map from "./Components/UI/Map";
import LeftSideBar from "./Components/UI/LeftSideBar";
// export interface IProps {
//   view?: ;
// }
// const App: React.FC<IProps> = ({view}) =>  {

const App: React.FC = ({}) =>  {

  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   if (typeof newValue === 'number') {
  //     setValue(newValue);
  //     drawStrainRegional()
  //   }
  // };

  // const Lu_Id = new URLSearchParams(window.location.search).get("lu")  //http://localhost:3000/?lu=123

  const params = new URLSearchParams(window.location.search)
  const lat_int = parseFloat(params?.get("lat") ?? '0')  // http://localhost:3000/?lat=123.23
  const lon_int = parseFloat(params?.get("lon") ?? '0')  // http://localhost:3000/?lon=123.433
  

  console.log(`Lat ${lat_int}`)
  console.log(`Lon ${lon_int}`)

  return (
    <>
      <Header/>
      <Map/>
      <LeftSideBar/>

    </>
  );
}

export default App;
