import { OrderSummaryComponent } from './components/order-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSummaryRoutingModule } from './order-summary-routing.module';

@NgModule({
  declarations: [OrderSummaryComponent],
  imports: [CommonModule, OrderSummaryRoutingModule],
})
export class OrderSummaryModule {}
