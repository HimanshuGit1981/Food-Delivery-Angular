import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatalogueComponentent } from './food-catalogue.component';

describe('FoodCatalogueComponent', () => {
  let component: FoodCatalogueComponentent;
  let fixture: ComponentFixture<FoodCatalogueComponentent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCatalogueComponentent],
    });
    fixture = TestBed.createComponent(FoodCatalogueComponentent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
