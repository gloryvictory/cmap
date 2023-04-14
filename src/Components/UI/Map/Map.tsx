import React, { useRef, useState , useEffect} from 'react'

import esriConfig from '@arcgis/core/config'
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Point from "@arcgis/core/geometry/Point";

import { MapSettings } from '../../../cfg/settings';

import MapWidgets from './MapWidgets';
import "./Map.css"


function setEsriConfig(){
    esriConfig.apiKey = MapSettings.apiKey;
    esriConfig.portalUrl = MapSettings.portalUrl;
    esriConfig.assetsPath = './assets/core'; // Чтобы брал Widgets локально, ане с сервера ESRI https://js.arcgis.com/... // https://www.npmjs.com/package/@arcgis/core
    esriConfig.request.useIdentity = false 
}


export interface IProps{
    lat?:number,
    lon?:number
}

// http://localhost:3000/?lat=69.5086144&lon=55.731533
// lat = 69.5086144, lon=70.731533

const Map: React.FC<IProps> = ({lat, lon}) => {
    // center :[69.5086144, 70.731533]
    // const mapDiv = useRef(null);
    const [view, setView] = useState<__esri.MapView|null>(null);


    useEffect(() => {

        setEsriConfig()

        if (!lat ){lat = 69.50}
        if (!lon ){lon = 70.73}
        const pt = new Point({ latitude: lat, longitude: lon});
        
        const webmap = new WebMap({portalItem: {id: MapSettings.mapId,}});
        // const webmap = new WebMap({portalItem: {id: "c51ea4b006c94ae296ee460336dd10ec"}});
    
        const mapView1 = new MapView({
        container: "mapDiv",
        map: webmap, 
        center: pt, 
        zoom: 7,
        padding: { left: 49 }
        // highlightOptions: {color: "orange" },
        }).when((view1: __esri.MapView) => setView(view1)
            
        )
        
        // go to the given point
        //   view.goTo(pt);
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
