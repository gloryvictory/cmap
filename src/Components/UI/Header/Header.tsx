import React from 'react'
import "@esri/calcite-components/dist/components/calcite-icon";
import {
    CalciteIcon,
  } from "@esri/calcite-components-react";

const Header = () => {
  return (
    <h1>
    Hello, React <CalciteIcon icon="banana" />
  </h1>
  )
}

export default Header;
