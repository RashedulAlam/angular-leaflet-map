import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet.markercluster';
import { IMapConfig } from '../../models/map';
L.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  @Input() config?: IMapConfig = {
    addDrawingTool: false,
    addOnClick: false,
    addDefaultmarker: false,
    addDefaultLayer: true,
    addWmslayers: false,
    addMarkerClusters: false,
    useUSACenter: false,
  };

  private map: any;
  private popup = L.popup();

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const center: any = this.config?.useUSACenter
      ? [39.742043, -104.991531]
      : [60.45451, 22.264824];
    this.map = L.map('map', {
      center: center,
      zoom: 6,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    this.config?.addDefaultmarker && this.addMyLocationMarker();

    this.config?.addOnClick && this.addOnClick();

    this.config?.addDrawingTool && this.editMapTools();

    this.config?.addWmslayers && this.addWmsLayers();

    this.config?.addMarkerClusters && this.addMarkerClusters();
  }

  private addMyLocationMarker(): void {
    L.marker([60.45451, 22.264824])
      .addTo(this.map)
      .bindPopup('I current live on this city.')
      .openPopup();
  }

  private addOnClick(): void {
    this.map.on('click', (e: any) => {
      this.popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(this.map);
    });
  }

  private editMapTools(): void {
    const drawnItems = new L.FeatureGroup();
    this.map.addLayer(drawnItems);

    const editableLayers = new L.FeatureGroup();

    L.marker([60.45451, 22.264824])
    .bindPopup("<b>Hello world!</b><br>I am a popup.")
    .addTo(editableLayers);

    L.marker([60.45451, 23.264824])
    .bindPopup("<b>Hello world!</b><br>I am a popup.")
    .addTo(editableLayers);

    L.marker([60.45451, 24.264824])
    .bindPopup("<b>Hello world!</b><br>I am a popup.")
    .addTo(editableLayers);


    this.map.addLayer(editableLayers);

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: editableLayers,
      },
    });

    this.map.addControl(drawControl);

    this.map.on(L.Draw.Event.CREATED, function (e: any) {
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
      }

      editableLayers.addLayer(layer);
    });
  }

  private addWmsLayers(): void {
    const basemaps = {
      OpenSteetMap: L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          minZoom: 3,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ),
      Clouds: L.tileLayer.wms(
        'https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=88d7ef27b3134a995fe787193e9cda72',
        {
          layers: 'clouds_new',
        }
      ),
      Precipitation: L.tileLayer.wms(
        'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=88d7ef27b3134a995fe787193e9cda72',
        {
          layers: 'precipitation_new',
        }
      ),
      WindSpeed: L.tileLayer.wms(
        'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=88d7ef27b3134a995fe787193e9cda72',
        {
          layers: 'wind_new',
        }
      ),
      Temperature: L.tileLayer.wms(
        'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=88d7ef27b3134a995fe787193e9cda72',
        {
          layers: 'temp_new',
        }
      ),
      Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'TOPO-WMS',
      }),

      Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'OSM-Overlay-WMS',
      }),

      'Topography, then places': L.tileLayer.wms(
        'http://ows.mundialis.de/services/service?',
        {
          layers: 'TOPO-WMS,OSM-Overlay-WMS',
        }
      ),

      'Places, then topography': L.tileLayer.wms(
        'http://ows.mundialis.de/services/service?',
        {
          layers: 'OSM-Overlay-WMS,TOPO-WMS',
        }
      ),
    };

    L.control.layers(basemaps).addTo(this.map);

    basemaps.Temperature.addTo(this.map);
  }

  private addMarkerClusters(): void {
    fetch(
      'https://raw.githubusercontent.com/geodav-tech/open-source-web-mapping-workshop/master/demos/data/climbs.geojson'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        var clusteredPoints = new window.L.MarkerClusterGroup();
        var climbsGeojsonMarkers = L.geoJson(data, {
          onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Name);
          },
        });
        clusteredPoints.addLayer(climbsGeojsonMarkers);

        this.map.addLayer(clusteredPoints);
      });
  }
}
