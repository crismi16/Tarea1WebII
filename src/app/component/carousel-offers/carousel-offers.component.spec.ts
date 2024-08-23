import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOffersComponent } from './carousel-offers.component';

describe('CarouselOffersComponent', () => {
  let component: CarouselOffersComponent;
  let fixture: ComponentFixture<CarouselOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
