import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleMapComponent } from './components/simple-map/simple-map.component';
import { MapToolsComponent } from './components/map-tools/map-tools.component';
import { MapLayersComponent } from './components/map-layers/map-layers.component';
import { MapClustersComponent } from './components/map-clusters/map-clusters.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleMapComponent,
  },
  {
    path: 'map-tools',
    component: MapToolsComponent,
  },
  {
    path: 'map-layers',
    component: MapLayersComponent,
  },
  {
    path: 'map-clusters',
    component: MapClustersComponent,
  },
  {
    path: '*',
    component: SimpleMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
