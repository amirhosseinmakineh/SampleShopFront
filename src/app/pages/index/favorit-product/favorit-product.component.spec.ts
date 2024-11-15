import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritProductComponent } from './favorit-product.component';

describe('FavoritProductComponent', () => {
  let component: FavoritProductComponent;
  let fixture: ComponentFixture<FavoritProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
