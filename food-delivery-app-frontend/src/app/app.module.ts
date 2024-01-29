import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { FoodCatalogueModule } from './food-catalogue/food-catalogue.module';
import { OrderSummaryModule } from './order-summary/order-summary.module';
import { UserHomeModule } from './user-home/user-home.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    RestaurantListingModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule,
    UserHomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
