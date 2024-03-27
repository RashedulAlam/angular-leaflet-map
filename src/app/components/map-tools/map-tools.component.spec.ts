import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapToolsComponent } from './map-tools.component';
import { IMapConfig } from '../../models/map';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MapToolsComponent', () => {
  let component: MapToolsComponent;
  let fixture: ComponentFixture<MapToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapToolsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToolsComponent);
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
    };
    expect(component.mapConfig).toEqual(expectedConfig);
  });
});
