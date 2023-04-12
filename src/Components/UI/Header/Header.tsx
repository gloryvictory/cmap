import React from 'react'
import "@esri/calcite-components/dist/components/calcite-icon";
import {
    CalciteIcon,
  } from "@esri/calcite-components-react";
import { MapSettings } from '../../../cfg/settings';
import "./Header.css"

  


const Header: React.FC = () => {
  return (
    <h1  id="header-title" >
    {MapSettings.titleApp} <CalciteIcon icon="banana" />
  </h1>
  )
}

export default Header;
