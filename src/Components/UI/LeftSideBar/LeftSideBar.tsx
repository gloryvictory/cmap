import React from 'react'


import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action";


import {
    
    CalciteActionBar,
    CalcitePanel, 
    CalciteShellPanel,
    CalciteAction,
  } from "@esri/calcite-components-react";

const LeftSideBar = () => {
  return (

    <CalciteShellPanel>
        <CalciteActionBar>
            <CalciteAction data-action-id="layers" icon="layers" text="Слои"  onClick={()=>{console.log("clicked")}}/>
            <CalciteAction data-action-id="basemaps" icon="basemap" text="Основа" />
            <CalciteAction data-action-id="legend" icon="legend" text="Легенда" />
            <CalciteAction data-action-id="bookmarks" icon="bookmark" text="Закладки" />
            <CalciteAction data-action-id="print" icon="print" text="Печать" />
            <CalciteAction data-action-id="information" icon="information" text="Информация" />
        </CalciteActionBar>

        <CalcitePanel heading="Layers" height-scale="l" data-panel-id="layers" hidden>
            <div id="layers-container"></div>
        </CalcitePanel>


        
    </CalciteShellPanel>
    
  )
}

export default LeftSideBar
