import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapClustersComponent } from './map-clusters.component';
import { IMapConfig } from '../../models/map';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MapClustersComponent', () => {
  let component: MapClustersComponent;
  let fixture: ComponentFixture<MapClustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapClustersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mapConfig correctly', () => {
    const expectedConfig: IMapConfig = {
      addDrawingTool: true,
      addOnClick: false,
      addDefaultmarker: false,
      addDefaultLayer: false,
      addWmslayers: false,
      addMarkerClusters: true,
      useUSACenter: true,
    };
    expect(component.mapConfig).toEqual(expectedConfig);
  });
});
