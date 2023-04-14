import React, { useState } from 'react'

import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-tooltip";

import "./LeftSideBar.css"

import {
    CalciteActionBar,
    CalcitePanel, 
    CalciteShellPanel,
    CalciteAction,
    CalciteTooltip,
} from "@esri/calcite-components-react";

const LeftSideBar:React.FC = () => {

  const [activeAction, setActiveAction] = useState("");
  const [actionBarExpanded, setActionBarExpanded] = useState<boolean>(true);
  
  const [layersPanel, setLayersPanel] = useState<boolean>(true);
  const [baseMapsPanel, setbaseMapsPanel] = useState<boolean>(true);
  const [bookmarkPanel, setbookmarkPanel] = useState<boolean>(true);
  const [legendPanel, setlegendPanel] = useState<boolean>(true);
  const [printPanel, setprintPanel] = useState<boolean>(true);


  const clearPanels = () => {

    setbaseMapsPanel(true)
    setLayersPanel(true)
    setbookmarkPanel(true)
    setlegendPanel(true)
    setprintPanel(true)
  }

  const handleActionBarClick = (
        event: React.MouseEvent<HTMLCalciteActionBarElement>
  ) => {
        setActionBarExpanded(!actionBarExpanded)
        
        const target = event.target as HTMLCalciteActionElement;

        // console.log(`${target?.id}`)
        // console.log(`${activeAction}`)

        if (target.tagName !== "CALCITE-ACTION") { return; }

        // if (!activeAction.length) {setActionBarExpanded(!actionBarExpanded)}

        if (activeAction) {
            (document.querySelector( `[id=${activeAction}]` ) as HTMLCalciteActionElement
            ).active = false;
            
            (document.querySelector( `[id=${activeAction}]` ) as HTMLCalciteActionElement
            ).indicator = false;

            (document.querySelector( `[id=panel-layers]` ) as HTMLCalciteActionElement
            ).hidden = false;
        }

        const nextAction = target.id;
        // console.log(`${nextAction}`)
        if (nextAction && nextAction !== activeAction) {          
            ( document.querySelector( `[id=${nextAction}]` ) as HTMLCalciteActionElement
            ).active = true;
            (document.querySelector( `[id=${nextAction}]` ) as HTMLCalciteActionElement
            ).indicator = true;

            (document.querySelector( `[id=panel-layers]` ) as HTMLCalciteActionElement
            ).hidden = false;

            
            setActiveAction(nextAction);
        } else {
                setActiveAction("");

                // setActionBarExpanded(false)

                }
  };

  const handleLayersClick = (
    event: React.MouseEvent<HTMLCalciteActionElement>
  ) => {
    // const target = event.target as HTMLCalciteActionElement;
    // console.log(`clicked ${target}`)
      clearPanels()
      if (actionBarExpanded){    
        setLayersPanel(false)
      }
    // console.log(`${actionBarExpanded}`)
  }
  const handleBaseMapsClick = (event: React.MouseEvent<HTMLCalciteActionElement>) => {
    // const target = event.target as HTMLCalciteActionElement;
    clearPanels()
    setActionBarExpanded(true)
    if (actionBarExpanded){      
      setbaseMapsPanel(false)
    }

  }

  const handleBookmarkClick = (event: React.MouseEvent<HTMLCalciteActionElement>) => {
    // const target = event.target as HTMLCalciteActionElement;
    clearPanels()
    setActionBarExpanded(true)

    if (actionBarExpanded){      
      setbookmarkPanel(false)
    }

  }
  const handleLegendClick = (event: React.MouseEvent<HTMLCalciteActionElement>) => {
    // const target = event.target as HTMLCalciteActionElement;
    clearPanels()
    if (actionBarExpanded){      
      setlegendPanel(false)
    }
  }
  const handlePrintClick = (event: React.MouseEvent<HTMLCalciteActionElement>) => {
    // const target = event.target as HTMLCalciteActionElement;
    clearPanels()
    if (actionBarExpanded){      
      setprintPanel(false)
    }
  }



  return (
    <div id="left-panel" className="left-panel">
        <CalciteShellPanel slot="primary-panel" detached = {actionBarExpanded}>
            <CalciteActionBar slot="action-bar" onClick={handleActionBarClick} >
                <CalciteAction data-action-id="layers" id="layers" icon="layers" text="Слои"  onClick={handleLayersClick} />
                <CalciteAction data-action-id="basemaps" id="basemaps" icon="basemap" text="Основа"  onClick={handleBaseMapsClick}  />
                <CalciteAction data-action-id="legend" id="legend" icon="legend" text="Легенда"  onClick={handleLegendClick}  />
                <CalciteAction data-action-id="bookmarks" id="bookmarks" icon="bookmark" text="Закладки"  onClick={handleBookmarkClick} />
                <CalciteAction data-action-id="print" id="print" icon="print" text="Печать"  onClick={handlePrintClick} />
                <CalciteAction data-action-id="information" id="information" icon="information" text="Информация"  onClick={handleLayersClick} />
                <CalciteTooltip slot="layers" label='Слои'/>
            </CalciteActionBar>

            <CalcitePanel heading="Layers" height-scale="l" data-panel-id="layers" id="panel-layers" hidden={layersPanel} >
                <div id="layers-container"></div>
            </CalcitePanel>
            <CalcitePanel heading="Basemaps" height-scale="l" data-panel-id="basemaps" hidden={baseMapsPanel}>
              <div id="basemaps-container"></div>
            </CalcitePanel>
            <CalcitePanel heading="Legend" height-scale="l" data-panel-id="legend" hidden={legendPanel}>
              <div id="legend-container"></div>
            </CalcitePanel>
            <CalcitePanel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" hidden={bookmarkPanel}>
              <div id="bookmarks-container"></div>
            </CalcitePanel>
            <CalcitePanel heading="Print" height-scale="l" data-panel-id="print" hidden={printPanel}>
              <div id="print-container"></div>
            </CalcitePanel>


        </CalciteShellPanel>
    </div>    
  )
}

export default LeftSideBar
