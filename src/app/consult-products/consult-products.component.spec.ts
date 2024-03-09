import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultProductsComponent } from './consult-products.component';

describe('ConsultProductsComponent', () => {
  let component: ConsultProductsComponent;
  let fixture: ComponentFixture<ConsultProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
