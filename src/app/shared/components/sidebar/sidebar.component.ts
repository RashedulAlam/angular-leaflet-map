import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      url: '/',
    },
    {
      name: 'Map with Tools',
      id: 'map-with-tools',
      icon: 'other',
      url: '/map-tools',
    },
    {
      name: 'Map with Layers',
      id: 'map-with-layers',
      icon: 'other',
      url: '/map-layers',
    },
    {
      name: 'Map with Clustering',
      id: 'map-with-clustering',
      icon: 'other',
      url: '/map-clusters',
    },
  ];

  constructor(private router: Router) {}
  navigate(url: string): void {
    this.router.navigate([url]);
  }

  isActivateRoute(url: string): boolean {
    return this.router.isActive(url, {
      paths: 'exact',
      fragment: 'ignored',
      matrixParams: 'subset',
      queryParams: 'subset',
    });
  }
}
