import { FoodCataloguePage } from './../../shared/models/FoodCataloguePage';
import { FoodItemService } from './../service/FoodItemService';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItem } from 'src/app/shared/models/FoodItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css'],
})
export class FoodCatalogueComponentent implements OnDestroy {
  restaurantId: number;
  foodItemResponse: FoodCataloguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodCataloguePage;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private foodItemService: FoodItemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.restaurantId = +params.get('id');
    });

    this.getFoodItemsByRestaurant(this.restaurantId);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getFoodItemsByRestaurant(restaurantId: number) {
    this.subscription = this.foodItemService
      .getFoodItemsByRestaurant(restaurantId)
      .subscribe((data) => {
        this.foodItemResponse = data;
      });
  }

  increment(food: any) {
    food.quantity++;
    const index = this.foodItemCart.findIndex((item) => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodItemCart.findIndex((item) => item.id === food.id);
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }
    }
  }

  onCheckOut() {
    this.foodItemCart;
    this.orderSummary = {
      foodItemsList: this.foodItemCart,
      restaurant: this.foodItemResponse.restaurant,
    };
    //this.orderSummary.foodItemsList = this.foodItemCart;
    //this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    this.router.navigate(['/orderSummary'], {
      queryParams: { data: JSON.stringify(this.orderSummary) },
    });
  }
}
