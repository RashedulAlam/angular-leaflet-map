import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClustersComponent } from './map-clusters.component';

describe('MapClustersComponent', () => {
  let component: MapClustersComponent;
  let fixture: ComponentFixture<MapClustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapClustersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
