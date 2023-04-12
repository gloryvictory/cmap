import React, { useState } from 'react'


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

    const [activeAction, setActiveAction] = useState("");

    const handleActionBarClick = (
        event: React.MouseEvent<HTMLCalciteActionBarElement>
    ) => {
        const target = event.target as HTMLCalciteActionElement;
        if (target.tagName !== "CALCITE-ACTION") {
        return;
        }

        if (activeAction) {
        (
            document.querySelector(
            `[id=${activeAction}]`
            ) as HTMLCalciteActionElement
        ).active = false;
        }

        const nextAction = target.id;
        if (nextAction && nextAction !== activeAction) {
        (
            document.querySelector(
            `[id=${nextAction}]`
            ) as HTMLCalciteActionElement
        ).active = true;
        setActiveAction(nextAction);
        } else {
        setActiveAction("");
        }
    };



  return (

    <CalciteShellPanel >
        <CalciteActionBar slot="action-bar" onClick={handleActionBarClick}>
            <CalciteAction data-action-id="layers" icon="layers" text="Слои"  onClick={()=>{console.log("clicked")}} indicator/>
            <CalciteAction data-action-id="basemaps" icon="basemap" text="Основа" />
            <CalciteAction data-action-id="legend" icon="legend" text="Легенда" />
            <CalciteAction data-action-id="bookmarks" icon="bookmark" text="Закладки" />
            <CalciteAction data-action-id="print" icon="print" text="Печать" />
            <CalciteAction data-action-id="information" icon="information" text="Информация" />
        </CalciteActionBar>

        <CalcitePanel heading="Layers" height-scale="l" data-panel-id="layers" hidden = {true}>
            <div id="layers-container"></div>
        </CalcitePanel>



    </CalciteShellPanel>
    
  )
}

export default LeftSideBar
