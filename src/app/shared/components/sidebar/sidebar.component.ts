import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    {
      name: 'Simple Map',
      id: 'simple-map',
      icon: 'home',
    },
    {
      name: 'Map with Tools',
      id: 'map-with-tools',
      icon: 'other',
    },
    {
      name: 'Map with Layers',
      id: 'map-with-layers',
      icon: 'other',
    },
    {
      name: 'Map with Clustering',
      id: 'map-with-clustering',
      icon: 'other',
    },
  ];
}
