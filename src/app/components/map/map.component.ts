import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import { IMapConfig } from '../../models/map';
L.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  @Input() config?: IMapConfig = { addDrawingTool: false, addOnClick: false };

  private map: any;
  private popup = L.popup();

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [60.45451, 22.264824],
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

    L.marker([60.45451, 22.264824])
      .addTo(this.map)
      .bindPopup('I current live on this city.')
      .openPopup();

    this.config?.addOnClick && this.addOnClick();

    this.config?.addDrawingTool && this.editMapTools();
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
    this.map.addLayer(editableLayers);

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: editableLayers,
      },
    });

    this.map.addControl(drawControl);

    this.map.on('draw:created', (e: any) => {
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
      }

      editableLayers.addLayer(layer);
    });
  }
}
