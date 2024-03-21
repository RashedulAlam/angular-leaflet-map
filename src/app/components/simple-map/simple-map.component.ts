import { Component } from '@angular/core';
import { IMapConfig } from '../../models/map';

@Component({
  selector: 'app-simple-map',
  templateUrl: './simple-map.component.html',
  styleUrl: './simple-map.component.scss',
})
export class SimpleMapComponent {
  mapConfig: IMapConfig = {
    addDrawingTool: false,
    addOnClick: true,
  };
}
