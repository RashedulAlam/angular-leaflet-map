import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapLayersComponent } from './map-layers.component';
import { IMapConfig } from '../../models/map';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MapLayersComponent', () => {
  let component: MapLayersComponent;
  let fixture: ComponentFixture<MapLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapLayersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLayersComponent);
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
      addWmslayers: true,
    };
    expect(component.mapConfig).toEqual(expectedConfig);
  });
});
