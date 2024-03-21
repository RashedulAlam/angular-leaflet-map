import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MapComponent } from './components/map/map.component';
import { SimpleMapComponent } from './components/simple-map/simple-map.component';
import { MapToolsComponent } from './components/map-tools/map-tools.component';
import { MapLayersComponent } from './components/map-layers/map-layers.component';
import { MapClustersComponent } from './components/map-clusters/map-clusters.component';

@NgModule({
  declarations: [AppComponent, MapComponent, SimpleMapComponent, MapToolsComponent, MapLayersComponent, MapClustersComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
