import { Component } from '@angular/core';
import { IMapConfig } from '../../models/map';

@Component({
  selector: 'app-map-clusters',
  templateUrl: './map-clusters.component.html',
  styleUrl: './map-clusters.component.scss',
})
export class MapClustersComponent {
  mapConfig: IMapConfig = {
    addDrawingTool: true,
    addOnClick: false,
    addDefaultmarker: false,
    addDefaultLayer: false,
    addWmslayers: false,
    addMarkerClusters: true,
    useUSACenter: true,
  };
}
