import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacialProductComponent } from './spacial-product.component';

describe('SpacialProductComponent', () => {
  let component: SpacialProductComponent;
  let fixture: ComponentFixture<SpacialProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacialProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
