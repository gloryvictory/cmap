import React, { useState } from "react";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";


import {
  CalciteButton,
  CalciteIcon,
  CalciteSlider,
} from "@esri/calcite-components-react";
import "@esri/calcite-components/dist/calcite/calcite.css";

// export interface IProps {
//   view?: ;
// }
// const App: React.FC<IProps> = ({view}) =>  {

const App: React.FC = ({}) =>  {
  const [sliderValue, setSliderValue] = useState<number>(50);

  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   if (typeof newValue === 'number') {
  //     setValue(newValue);
  //     drawStrainRegional()
  //   }
  // };

  // const Lu_Id = new URLSearchParams(window.location.search).get("lu")  //http://localhost:3000/?lu=123

  // const params = new URLSearchParams(window.location.search)
  // const lat_str:string = params?.get("lat")?.length ? params.get("lat") : ""
  // const lat = parseInt(lat_str, 10)  // http://localhost:3000/?lat=123

  const lat = new URLSearchParams(window.location.search).get("lat") // http://localhost:3000/?lon=123
  const lon = new URLSearchParams(window.location.search).get("lon") // http://localhost:3000/?lon=123
  
  console.log(`Lat ${lat}`)
  console.log(`Lon ${lon}`)

  return (
    <>
      <h1>
        Hello, React <CalciteIcon icon="banana" />
      </h1>
      <CalciteButton onClick={(e) => setSliderValue(0)}>
        Reset
      </CalciteButton>
      <CalciteSlider
        value={sliderValue}
        min={1}
        max={100}
        step={1}
        // min="1"
        // max="100"
        // step="1"
        // onCalciteSliderUpdate={(e) => setSliderValue(e.target.value)}
      />

      <p>The slider currently has a value of {sliderValue}</p>
    </>
  );
}

export default App;
