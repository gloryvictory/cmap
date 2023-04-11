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
