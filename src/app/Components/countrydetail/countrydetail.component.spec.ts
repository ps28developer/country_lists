import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrydetailComponent } from './countrydetail.component';

describe('CountrydetailComponent', () => {
  let component: CountrydetailComponent;
  let fixture: ComponentFixture<CountrydetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrydetailComponent]
    });
    fixture = TestBed.createComponent(CountrydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
