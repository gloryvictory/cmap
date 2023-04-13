import React, { useRef, useState , useEffect} from 'react'

import esriConfig from '@arcgis/core/config'
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

import LayerList                from '@arcgis/core/widgets/LayerList';

// import Map from "@arcgis/core/Map";

// import "@esri/calcite-components/dist/components/calcite-button";
// import "@esri/calcite-components/dist/components/calcite-slider";

// import {
//     CalciteButton,
//     CalciteSlider,
// } from "@esri/calcite-components-react";

import { MapSettings } from '../../../cfg/settings';

import "./Map.css"
import MapWidgets from './MapWidgets';

function setEsriConfig(){
    esriConfig.apiKey = MapSettings.apiKey;
    esriConfig.portalUrl = MapSettings.portalUrl;
    esriConfig.assetsPath = './assets'; // Чтобы брал Widgets локально, ане с сервера ESRI https://js.arcgis.com/... // https://www.npmjs.com/package/@arcgis/core
    esriConfig.request.useIdentity = false 
}



const Map: React.FC = () => {
    // const mapDiv = useRef(null);
    const [view, setView] = useState<__esri.MapView|null>(null);


    useEffect(() => {
    
        setEsriConfig()
    
        // const map = new Map();    
        // map.basemap = "arcgis-topographic" // Basemap layer service
        
            const webmap = new WebMap({portalItem: {id: MapSettings.mapId,}});
            // const webmap = new WebMap({portalItem: {id: "c51ea4b006c94ae296ee460336dd10ec"}});
        
            const mapView1 = new MapView({
            container: "mapDiv",
            map: webmap, 
            center: [69.5086144, 70.731533], 
            zoom: 7,
            padding: { left: 49 }

            
            // highlightOptions: {color: "orange" },
        }).when((view1: __esri.MapView) => setView(view1)
            
        )
        



}, []);

    return (
    <>
        <div id="mapDiv" className="mapDiv" ></div>
        {view && (
        <>
          <MapWidgets view={view} />
        </>   
        )}
    </>
    )
}


export default Map
