import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map.component';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet.markercluster';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize map', () => {
    const tilesLayerSpy = jasmine.createSpyObj('tilesLayer', ['addTo']);
    spyOn(L, 'map').and.returnValue(<any>{
      addLayer: jasmine.createSpy('addLayer'),
    });
    spyOn(L, 'tileLayer').and.returnValue(tilesLayerSpy);

    component.ngAfterViewInit();

    expect(L.map).toHaveBeenCalled();
    expect(L.tileLayer).toHaveBeenCalledWith(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      jasmine.objectContaining({
        maxZoom: 18,
        minZoom: 3,
      })
    );
    expect(tilesLayerSpy.addTo).toHaveBeenCalled();
  });
});
