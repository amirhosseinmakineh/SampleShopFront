import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastedNewsComponent } from './lasted-news.component';

describe('LastedNewsComponent', () => {
  let component: LastedNewsComponent;
  let fixture: ComponentFixture<LastedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastedNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
