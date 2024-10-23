import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVehiclesComponent } from './header-vehicles.component';

describe('HeaderVehiclesComponent', () => {
  let component: HeaderVehiclesComponent;
  let fixture: ComponentFixture<HeaderVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
