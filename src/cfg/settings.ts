

export default class Map_Settings {
    
  public titleApp = 'Карта для теста Calcite-Components';
  public apiKey = "";
    
  public portalServer = "https://<SERVER_PUT_HERE>";
    
  public portalUrl = `${this.portalServer}/arcgis`;

  public mapId = 'c51ea4b006c94ae296ee460336dd10ec';          // Идентификатор карты  (после webmap= ) https://<Server>/arcgis/home/item.html?id=2a41791214b34f78a893db47a4313115
  
  public baseMap = "default";                                 // "osm" Берем по-умолчанию AAPK9570c841433645bdb956d7f97bce6abaicujedljPsSwTanSjn-eeYEMglWVC-vdlW8Xc1a4puas7x27ZBwXX2bGoyfDkhNf

  // id: "18215e8031a-layer-13"
  // public layerStrain_ID: string = 'f5e658973eab49679df6a4f4d113e0d2';  //ПОЛИНИЕЙНЫЙ Слой https://<Server>/arcgis/home/item.html?id=f5e658973eab49679df6a4f4d113e0d3
    
  
}

export const MapSettings: Map_Settings = new Map_Settings();


