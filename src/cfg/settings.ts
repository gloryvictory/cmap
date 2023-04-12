


export default class Map_Settings {
    
  public titleApp = 'Карта для теста Calcite-Components';
  apiKey = "";
  
  public portalServer = "https://services.arcgis.com";
  public portalUrl = `${this.portalServer}/arcgis`;

  public mapId = '2a41791214b34f78a893db47a4313114';          // Идентификатор карты  (после webmap= ) https://<Server>/arcgis/home/item.html?id=2a41791214b34f78a893db47a4313115
  public baseMap = "default";                                 // "osm" Берем по-умолчанию

  // id: "18215e8031a-layer-13"
  // public layerStrain_ID: string = 'f5e658973eab49679df6a4f4d113e0d2';  //ПОЛИНИЕЙНЫЙ Слой https://<Server>/arcgis/home/item.html?id=f5e658973eab49679df6a4f4d113e0d3
    
  
}

export const MapSettings: Map_Settings = new Map_Settings();


