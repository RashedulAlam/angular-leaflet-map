import { Component } from '@angular/core';
import { IMapConfig } from '../../models/map';

@Component({
  selector: 'app-map-layers',
  templateUrl: './map-layers.component.html',
  styleUrl: './map-layers.component.scss',
})
export class MapLayersComponent {
  mapConfig: IMapConfig = {
    addDrawingTool: true,
    addOnClick: false,
    addDefaultmarker: false,
    addDefaultLayer: false,
    addWmslayers: true,
  };
}
