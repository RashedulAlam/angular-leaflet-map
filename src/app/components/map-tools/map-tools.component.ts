import { Component } from '@angular/core';
import { IMapConfig } from '../../models/map';

@Component({
  selector: 'app-map-tools',
  templateUrl: './map-tools.component.html',
  styleUrl: './map-tools.component.scss'
})
export class MapToolsComponent {
  mapConfig: IMapConfig = {
    addDrawingTool: true,
    addOnClick: false,
  };
}
