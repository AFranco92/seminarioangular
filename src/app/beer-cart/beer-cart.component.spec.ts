import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCartComponent } from './beer-cart.component';

describe('BeerCartComponent', () => {
  let component: BeerCartComponent;
  let fixture: ComponentFixture<BeerCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
