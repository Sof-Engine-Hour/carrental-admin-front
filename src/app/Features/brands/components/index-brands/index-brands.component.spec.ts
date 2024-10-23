import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBrandsComponent } from './index-brands.component';

describe('IndexBrandsComponent', () => {
  let component: IndexBrandsComponent;
  let fixture: ComponentFixture<IndexBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
