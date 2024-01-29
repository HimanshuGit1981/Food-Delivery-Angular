import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { OrderDTO } from '../models/OrderDTO';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  orderSummary?: OrderDTO;
  obj: any;
  total: any;
  showOrderPlacedDialog: boolean = false;
  showOrderCanceledDialog: boolean = false;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId = 1;
    this.orderSummary = this.obj;

    this.total = this.orderSummary?.foodItemsList?.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.price;
      },
      0
    );
  }

  saveOrder() {
    this.subscription = this.orderService
      .saveOrder(this.orderSummary)
      .subscribe({
        error: (e) => console.error('Failed to save data:', e),
        complete: () => (this.showOrderPlacedDialog = true),
      });
  }

  cancelOrder() {
    this.showOrderCanceledDialog = true;
  }

  closeDialog() {
    this.showOrderPlacedDialog = false;
    this.showOrderCanceledDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
