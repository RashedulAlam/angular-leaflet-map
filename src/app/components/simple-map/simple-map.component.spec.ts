import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleMapComponent } from './simple-map.component';
import { IMapConfig } from '../../models/map';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SimpleMapComponent', () => {
  let component: SimpleMapComponent;
  let fixture: ComponentFixture<SimpleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleMapComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mapConfig correctly', () => {
    const expectedConfig: IMapConfig = {
      addDrawingTool: false,
      addOnClick: true,
      addDefaultmarker: true,
    };
    expect(component.mapConfig).toEqual(expectedConfig);
  });
});
