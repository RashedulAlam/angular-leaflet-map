import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  private map: any;

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

    const icon = {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 0 ],
        // specify the path here
        iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
        shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
     })
  };
    L.marker([60.45451, 22.264824])
      .addTo(this.map)
      .bindPopup('I current live on this city.')
      .openPopup();
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
