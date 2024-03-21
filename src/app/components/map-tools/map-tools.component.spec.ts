import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToolsComponent } from './map-tools.component';

describe('MapToolsComponent', () => {
  let component: MapToolsComponent;
  let fixture: ComponentFixture<MapToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
