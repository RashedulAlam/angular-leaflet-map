import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import {RouterModule} from "@angular/router";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to specified URL', () => {
    const navigateSpy = spyOn(component['router'], 'navigate').and.stub();
    const url = '/map-tools';
    component.navigate(url);
    expect(navigateSpy).toHaveBeenCalledWith([url]);
  });

  it('should return true for active route', () => {
    const url = '/';
    expect(component.isActivateRoute(url)).toBe(true);
  });

  it('should return false for inactive route', () => {
    const url = '/map-tools';
    expect(component.isActivateRoute(url)).toBe(false);
  });
});
