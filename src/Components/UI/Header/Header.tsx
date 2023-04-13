import React from 'react'
import "@esri/calcite-components/dist/components/calcite-icon";
import {
    CalciteIcon,
  } from "@esri/calcite-components-react";
import { MapSettings } from '../../../cfg/settings';

import"./Header.css"


  


const Header: React.FC = () => {
  return (
    <header className="header">
      <h1  id="header-title" >        
        {MapSettings.titleApp || "...loading"} <CalciteIcon icon="banana" />
      </h1>
    </header>
  )
}

export default Header;
