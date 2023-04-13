import React, { useEffect }     from "react";
import Home                     from "@arcgis/core/widgets/Home";
import ScaleBar                 from "@arcgis/core/widgets/ScaleBar";
import Bookmarks                from '@arcgis/core/widgets/Bookmarks';
import Expand                   from '@arcgis/core/widgets/Expand';
import Compas                   from '@arcgis/core/widgets/Compass';
import Legend                   from '@arcgis/core/widgets/Legend';
import BasemapGallery           from '@arcgis/core/widgets/BasemapGallery';
import LayerList                from '@arcgis/core/widgets/LayerList';
import Zoom                     from '@arcgis/core/widgets/Zoom';
import AreaMeasurement2D        from "@arcgis/core/widgets/AreaMeasurement2D";
import Fullscreen               from "@arcgis/core/widgets/Fullscreen";
import DistanceMeasurement2D    from "@arcgis/core/widgets/DistanceMeasurement2D";
import Search                   from "@arcgis/core/widgets/Search";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";



interface IProps {
    view?: __esri.MapView;
}

const MapWidgets: React.FC<IProps> = ({ view  }) => {
  useEffect(() => {

    view?.ui.empty("top-left");
    
    console.log("view!!!!!!!!!!!!!!!!!!!")
    console.log(view)

    const layerList = new LayerList({
      view,
      selectionEnabled: true,
      container: "layers-container"
    });

    // кнопка "полный экран"
    // const btnFullscreen = new Fullscreen({view: view, })
    // view?.ui.add(btnFullscreen, "top-right");

    // const btnHome = new Home({view,});
    // view?.ui.add(btnHome, "top-right");

    // const btnZoom = new Zoom({view,});
    // view?.ui.add(btnZoom, "top-right");

    // const btnCompas = new Compas({view,});
    // view?.ui.add(btnCompas, "top-left");

    
    // const legend = new Legend({view, style: "classic" });
    // const btnLegend = new Expand({ expandIconClass: "esri-icon-legend", view: view, content: legend, expanded: false });
    // view?.ui.add(btnLegend, "top-left");


    // const btnScaleBar = new ScaleBar({view, style: 'ruler', unit: "metric"});
    // view?.ui.add(btnScaleBar, "bottom-left");

    // const bookmarks = new Bookmarks({view,editingEnabled: true});
    // const btnExpand = new Expand({view,content: bookmarks,expanded: false});
    // view?.ui.add(btnExpand, "top-left");

    // Список слоев
    // const layerList = new LayerList({view: view, container: document.createElement("div"),});
    // const btnLayerList = new Expand({expandIconClass: "esri-icon-layer-list", view: view,  content: layerList });
    // view?.ui.add(btnLayerList , "top-left");

    // const newBasemapGallery = new BasemapGallery({view, });
    // const btnBasemapGallery = new Expand({view: view, content: newBasemapGallery});
    // view?.ui.add(btnBasemapGallery , "top-left");

    // //  Измерения расстояния
    // const newMeasurementArea = new AreaMeasurement2D({view: view, container: document.createElement("div"), });
    // const btnMeasurementArea = new Expand({ expandIconClass: "esri-icon-measure-area", view: view, content: newMeasurementArea });
    // view?.ui.add(btnMeasurementArea , "top-left");
    // // Typical usage
    // let measurementWidget = new DistanceMeasurement2D({view: view  });
    // const btnMeasurement2D = new Expand({ expandIconClass: "esri-icon-measure", view: view, content: measurementWidget });
    // view?.ui.add(btnMeasurement2D , "top-left");

    // const btnSearchWidget = new Search({ view: view, });
    // view?.ui.add(btnSearchWidget , "top-right");


    // const btnCoordinateConversionWidget = new CoordinateConversion({
    //   view: view
    // });

    // view?.ui.add(btnCoordinateConversionWidget, "bottom-right");


    // let node = `${document.getElementById("idTableStrain")}`;
    // const btnTableStrain = new Expand(
    //     { 
    //       expandIconClass: "esri-icon-legend", 
    //       view: view, 
    //       content: node, 
    //       expanded: false 
    //     });
    // view?.ui.add(btnTableStrain, "top-left");
    
      // bonus - how many bookmarks in the webmap?
    //   webmap.when(() => {
    //     if (webmap.bookmarks && webmap.bookmarks.length) {
    //       console.log("Bookmarks: ", webmap.bookmarks.length);
    //     } else {
    //       console.log("No bookmarks in this webmap.");
    //     }
    //   });



  }, []);

  return null;
};

export default MapWidgets;
