import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRestaurantOwnerComponent } from './board-restaurant-owner.component';

describe('BoardRestaurantOwnerComponent', () => {
  let component: BoardRestaurantOwnerComponent;
  let fixture: ComponentFixture<BoardRestaurantOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardRestaurantOwnerComponent]
    });
    fixture = TestBed.createComponent(BoardRestaurantOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
