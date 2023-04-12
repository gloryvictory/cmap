import React, { useRef, useState , useEffect} from 'react'

import esriConfig from '@arcgis/core/config'
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-slider";

import {
    CalciteButton,
    CalciteSlider,
} from "@esri/calcite-components-react";

import { MapSettings } from '../../../cfg/settings';

import "./Map.css"

function setEsriConfig(){
    esriConfig.apiKey = MapSettings.apiKey;
    esriConfig.portalUrl = MapSettings.portalUrl;
    esriConfig.assetsPath = './assets'; // Чтобы брал Widgets локально, ане с сервера ESRI https://js.arcgis.com/... // https://www.npmjs.com/package/@arcgis/core
    esriConfig.request.useIdentity = false 
}



const Map = () => {
    const mapDiv = useRef(null);
    const [sliderValue, setSliderValue] = useState<number>(50);

    useEffect(() => {
    
        setEsriConfig()
    
            
            const map = new WebMap({
                portalItem: {
                // id: "210c5b77056846808c7a5ce93920be81"
                id: "cd13d0ed1c8f4b0ea0914366b4ed5bd6"
                }
            });

            const view = new MapView({
                map,
                container: "viewDiv",
                padding: {
                left: 49
                }
            });
        
        // if (mapDiv.current) {
    //       const webmap = new WebMap({portalItem: {id: MapSettings.mapId,}});
    
    //       const mapView1 = new MapView({
    //         container: mapDiv.current,
    //         map: webmap, 
    //         center: [69.5086144, 70.731533], // [72.5086144, 65.531533]
    //         zoom: 7,
    //         highlightOptions: {color: "orange" },
    //       }).when((view1: __esri.MapView) => setView(view1))
    //   }


}, []);

    return (
    <>
    
        {/* ref={mapDiv} */}
        
        <CalciteButton label='dfsdf' id='tb' > TEST</CalciteButton>
        <p>The slider currently has a value of {sliderValue}</p>
    </>
    )
}


export default Map
